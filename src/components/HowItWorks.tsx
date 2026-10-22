import React from 'react';
import { MessageSquare, Phone, ArrowRight, ShieldAlert } from 'lucide-react';
import { LIBRA_CONFIG } from '../data/config';

interface HowItWorksProps {
  steps: typeof LIBRA_CONFIG.steps;
  whatsappBaseUrl: string;
  phoneTelLink: string;
  phoneFormatted: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  steps,
  whatsappBaseUrl,
  phoneTelLink,
  phoneFormatted,
  onTrack,
}) => {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#14263B] mb-2">
            Fluxo de Atendimento
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14263B] tracking-tight mb-4">
            Como funciona o pedido de socorro
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Processo ágil em 3 passos para você resolver a situação do seu veículo sem complicação e com total clareza.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-7 relative shadow-sm"
            >
              <div className="text-3xl font-extrabold text-[#F5C400] mb-3 font-mono">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-[#14263B] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de Chamada Final para Ação */}
        <div className="bg-[#14263B] rounded-2xl p-8 sm:p-12 text-center text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
              Precisa de socorro veicular ou guincho agora?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed font-normal">
              Clique para enviar sua localização no WhatsApp ou ligue diretamente para consultar viabilidade em Barão Geraldo e região.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Preciso de atendimento com a Libra Auto Socorro em Campinas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTrack('whatsapp', 'banner_cta_whatsapp')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#F5C400] text-[#14263B] font-extrabold text-base hover:bg-[#e6b800] transition-colors shadow-md active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={phoneTelLink}
                onClick={() => onTrack('phone', 'banner_cta_call')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-transparent text-white font-bold text-base border-2 border-slate-600 hover:border-slate-400 hover:bg-white/5 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F5C400]" />
                <span>Ligar: <span className="font-mono tabular-nums">{phoneFormatted}</span></span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 mt-6 flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Em rodovias concessionadas com risco imediato de colisão, utilize também o botão SOS da rodovia ou disque para a concessionária.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
