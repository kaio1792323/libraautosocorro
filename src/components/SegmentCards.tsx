import React from 'react';
import { Wrench, Truck, Building2, CheckCircle2, MessageSquare } from 'lucide-react';
import { SegmentationCard } from '../data/config';

interface SegmentCardsProps {
  segmentations: SegmentationCard[];
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const SegmentCards: React.FC<SegmentCardsProps> = ({
  segmentations,
  whatsappBaseUrl,
  onTrack,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'socorro-veicular':
        return <Wrench className="w-6 h-6 text-[#14263B]" />;
      case 'guincho-transporte':
        return <Truck className="w-6 h-6 text-[#14263B]" />;
      case 'empresas-frotas':
        return <Building2 className="w-6 h-6 text-[#14263B]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#14263B]" />;
    }
  };

  return (
    <section id="atendimento" className="py-16 sm:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#14263B] mb-2">
            Segmentação de Atendimento
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14263B] tracking-tight mb-4">
            Qual é a sua necessidade no momento?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Selecione a categoria correspondente para abrir o WhatsApp com mensagem direcionada, facilitando a identificação do veículo e agilizando seu contato.
          </p>
        </div>

        {/* 3 Cartões Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segmentations.map((card) => {
            const cardWaUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(card.whatsappMessage)}`;

            return (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  {/* Top Header do Card com Ícone */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center p-3">
                      {getIcon(card.id)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {card.targetAudience}
                    </span>
                  </div>

                  {/* Título do Card */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#14263B] mb-3">
                    {card.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Lista de pontos */}
                  <ul className="space-y-2.5 mb-8">
                    {card.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de Ação com Mensagem Pré-preenchida */}
                <div>
                  <a
                    href={cardWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTrack('whatsapp', `segment_${card.id}`)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#14263B] text-white font-bold text-sm hover:bg-[#1f3854] transition-colors duration-150 shadow-sm active:scale-[0.99] text-center"
                  >
                    <MessageSquare className="w-4 h-4 text-[#F5C400]" />
                    <span>{card.ctaText}</span>
                  </a>
                  
                  <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                    Abre mensagem direta no WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
