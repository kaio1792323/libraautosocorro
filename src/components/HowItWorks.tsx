import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { Step } from '../data/config';

interface HowItWorksProps {
  steps: Step[];
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
  const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade?'
  )}`;

  return (
    <section
      id="como-funciona"
      className="bg-white py-12 sm:py-16 md:py-24 border-t border-slate-100"
      aria-labelledby="como-funciona-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#061B3D]/10 text-[#061B3D] text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Como Funciona
          </div>
          <h2
            id="como-funciona-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061B3D] leading-tight"
          >
            PRECISOU DE SOCORRO? VEJA COMO FUNCIONA.
          </h2>
        </div>

        {/* Steps — 1 col mobile, 2 col sm/md, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {steps.map((step, index) => (
            <article
              key={step.step}
              className="relative flex flex-col items-start"
              aria-label={`Passo ${step.step}: ${step.title}`}
            >
              {/* Conector entre steps (só desktop, só nos 3 primeiros) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-[calc(100%_-_1rem)] w-[calc(100%_-_1rem)] h-0.5 bg-gradient-to-r from-[#FFD400]/60 to-transparent z-0"
                  aria-hidden="true"
                />
              )}

              {/* Número */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#FFD400] flex items-center justify-center mb-3 sm:mb-4 shadow-md shrink-0">
                <span className="text-[#061B3D] font-extrabold text-sm leading-none">{step.step}</span>
              </div>

              <h3 className="font-extrabold text-[#061B3D] text-sm sm:text-base mb-1.5 sm:mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl bg-[#061B3D] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl mb-2">
              Precisa de auto socorro agora?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              Entre em contato informando sua localização, tipo de veículo e o problema apresentado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onTrack('whatsapp', 'how_it_works_cta')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#25D366] text-white font-extrabold text-sm rounded-xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-md min-h-[48px] whitespace-nowrap w-full sm:w-auto"
              aria-label="Chamar no WhatsApp"
            >
              <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a
              href={phoneTelLink}
              onClick={() => onTrack('phone', 'how_it_works_tel')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/20 active:scale-95 transition-all min-h-[48px] whitespace-nowrap w-full sm:w-auto"
              aria-label={`Ligar para ${phoneFormatted}`}
            >
              <Phone className="w-4 h-4 text-[#FFD400] shrink-0" aria-hidden="true" />
              {phoneFormatted}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
