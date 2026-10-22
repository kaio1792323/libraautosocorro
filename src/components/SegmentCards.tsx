import React from 'react';
import { MessageSquare, Truck, Bus, Waves, Package, Car } from 'lucide-react';
import { SegmentCard } from '../data/config';

interface SegmentCardsProps {
  segments: SegmentCard[];
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

const segmentIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  caminhoes: Truck,
  onibus: Bus,
  vans: Waves,
  utilitarios: Package,
  automoveis: Car,
};

export const SegmentCards: React.FC<SegmentCardsProps> = ({
  segments,
  whatsappBaseUrl,
  onTrack,
}) => {
  return (
    <section
      id="atendimento"
      className="bg-white py-12 sm:py-16 md:py-24 border-t border-slate-100"
      aria-labelledby="segmentos-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FFD400]/15 text-[#061B3D] text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Veículos Atendidos
          </div>
          <h2
            id="segmentos-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061B3D] leading-tight"
          >
            ASSISTÊNCIA PARA DIFERENTES PERFIS DE VEÍCULOS.
          </h2>
        </div>

        {/* Cards grid
            mobile:  1 coluna
            sm/md:   2 colunas (com último item centralizado via justify-items)
            lg:      3 colunas (os 2 últimos ficam centralizados)
            xl:      5 colunas (1 linha limpa)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-items-stretch">
          {segments.map((seg) => {
            const IconComp = segmentIcons[seg.id] ?? Truck;
            const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(seg.whatsappMessage)}`;

            return (
              <article
                key={seg.id}
                className="relative rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 border bg-[#061B3D] text-white border-[#FFD400]/30 shadow-md ring-1 ring-[#FFD400]/20 hover:ring-[#FFD400]/50 hover:shadow-xl"
                aria-label={`Atendimento para ${seg.title}`}
              >
                {/* Badge prioridade */}
                {seg.highlight && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#FFD400] text-[#061B3D] text-[10px] font-extrabold rounded-full uppercase tracking-wide leading-tight">
                    Prioridade
                  </span>
                )}

                {/* Ícone */}
                <div className="w-11 h-11 rounded-xl bg-[#FFD400] flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5 text-[#061B3D]" aria-hidden="true" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-base leading-snug mb-1.5 text-white pr-12">
                    {seg.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {seg.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onTrack('whatsapp', `segment_${seg.id}`)}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 font-bold text-xs rounded-xl active:scale-95 transition-all min-h-[40px] bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  aria-label={`Solicitar assistência para ${seg.title}`}
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  Solicitar Atendimento
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
