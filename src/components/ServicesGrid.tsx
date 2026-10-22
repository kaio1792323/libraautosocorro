import React from 'react';
import {
  Battery, Zap, RotateCcw, Gauge, Fuel, Settings,
  Thermometer, CircleDot, Circle, Key, MessageSquare,
} from 'lucide-react';
import { ServiceItem } from '../data/config';

// Card 01 — imagem original
import img01 from '../assets/images/service_mecanico_socorro_1792676428043.webp';
import img02 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_37_25.webp';
import img03 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_37_50.webp';
import img04 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_37_55.webp';
import img05 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_00.webp';
import img06 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_05.webp';
import img07 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_11.webp';
import img08 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_16.webp';
import img09 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_22.webp';
import img10 from '../assets/images/Imagem do Codex 22 de out. de 2026, 16_38_49.webp';


// Banners do topo da seção
import mecanicoImg from '../assets/images/service_mecanico_socorro_1792676428043.webp';
import frotasImg from '../assets/images/service_frotas_utilitarios_1792676428289.webp';

// Uma imagem dedicada por card (0–9)
const cardImages = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];

interface ServicesGridProps {
  services: ServiceItem[];
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Battery, Zap, RotateCcw, Gauge, Fuel, Settings,
  Thermometer, CircleDot, Circle, Key,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  whatsappBaseUrl,
  onTrack,
}) => {
  return (
    <section
      id="servicos"
      className="bg-[#F5F7FA] py-12 sm:py-16 md:py-24"
      aria-labelledby="servicos-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#061B3D]/10 text-[#061B3D] text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Serviços
          </div>
          <h2
            id="servicos-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061B3D] leading-tight mb-3 sm:mb-4"
          >
            10 SOLUÇÕES EMERGENCIAIS PARA AJUDAR SEU VEÍCULO A VOLTAR À OPERAÇÃO.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Uma pane nem sempre significa que o veículo precisa ser removido. A Libra oferece
            atendimento volante para diagnosticar problemas e executar reparos emergenciais no
            próprio local, sempre que houver condições técnicas e de segurança.
          </p>
        </div>

        {/* Banners topo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="relative rounded-2xl overflow-hidden h-44 sm:h-56 lg:h-64 shadow-md">
            <img
              src={mecanicoImg}
              alt="Mecânico realizando reparo emergencial em motor de veículo pesado na estrada"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={700}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3D]/70 to-transparent flex items-end p-4 sm:p-5">
              <p className="text-white font-bold text-sm">Mecânica emergencial no local</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-44 sm:h-56 lg:h-64 shadow-md">
            <img
              src={frotasImg}
              alt="Assistência volante para van e veículos utilitários de frota comercial"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={700}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3D]/70 to-transparent flex items-end p-4 sm:p-5">
              <p className="text-white font-bold text-sm">Suporte para frotas e utilitários</p>
            </div>
          </div>
        </div>

        {/* Grid 10 cards
            mobile:  1 coluna
            sm:      2 colunas
            md:      3 colunas
            xl:      5 colunas → 2 linhas de 5 (limpo)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const IconComp = iconMap[service.icon] ?? WrenchIcon;
            const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(service.whatsappMessage)}`;
            const imgSrc = cardImages[index] ?? cardImages[0];

            return (
              <article
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:border-[#FFD400]/40 transition-all duration-200 flex flex-col"
                aria-label={`Serviço: ${service.title}`}
              >
                {/* Imagem */}
                <div className="relative h-36 overflow-hidden shrink-0">
                  <img
                    src={imgSrc}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3D]/60 to-transparent" />
                  {/* Ícone */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-[#FFD400] flex items-center justify-center shadow-md">
                    <IconComp className="w-4 h-4 text-[#061B3D]" aria-hidden="true" />
                  </div>
                  {/* Número */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-[#061B3D] text-xs font-extrabold leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <h3 className="text-sm font-extrabold text-[#061B3D] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#FFD400] bg-[#061B3D] rounded px-2 py-0.5 self-start leading-snug">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTrack('whatsapp', `service_card_${service.id}`)}
                    className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 bg-[#25D366] text-white font-bold text-xs rounded-xl hover:bg-[#1ebe5d] active:scale-95 transition-all min-h-[40px]"
                    aria-label={`Solicitar atendimento para ${service.title}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    Solicitar Atendimento
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-[#061B3D]/5 border border-[#061B3D]/10 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto text-center">
          <strong className="text-[#061B3D]">Observação:</strong> A realização dos serviços depende
          de avaliação técnica, condições de segurança e disponibilidade de profissionais, ferramentas
          e peças. Quando a solução exigir estrutura de oficina ou remoção, a Libra poderá auxiliar
          no encaminhamento a parceiros especializados.
        </div>
      </div>
    </section>
  );
};

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
