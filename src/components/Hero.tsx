import React from 'react';
import { MessageSquare, Phone, CheckCircle, Wrench } from 'lucide-react';
import heroImg from '../assets/images/hero_guincho_socorro_1792676428129.webp';

interface HeroProps {
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
  phoneFormatted: string;
  phoneTelLink: string;
  whatsappUrl: string;
  title: string;
  subtitle: string;
  heroDescription?: string;
  heroHighlights?: string[];
  disclaimer: string;
}

export const Hero: React.FC<HeroProps> = ({
  onTrack,
  phoneFormatted,
  phoneTelLink,
  whatsappUrl,
  title,
  subtitle,
  heroDescription,
  heroHighlights = [],
  disclaimer,
}) => {
  const waUrl = `${whatsappUrl}?text=${encodeURIComponent(
    'Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade?'
  )}`;

  return (
    <section
      id="hero"
      className="relative bg-[#061B3D] overflow-hidden"
      aria-label="Apresentação principal"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mecânico realizando assistência emergencial em veículo pesado na estrada"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          width={1440}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061B3D]/95 via-[#061B3D]/85 to-[#061B3D]/60" />
      </div>

      {/* Conteúdo — pb extra compensa a MobileFixedBar em telas pequenas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-2xl xl:max-w-3xl">

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/30 mb-5 sm:mb-6">
            <Wrench className="w-3.5 h-3.5 text-[#FFD400]" aria-hidden="true" />
            <span className="text-[#FFD400] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              Assistência Volante Emergencial
            </span>
          </div>

          {/* Título */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-[#FFD400] font-semibold mb-4 sm:mb-5 leading-snug">
            {subtitle}
          </p>

          {/* Descrição — oculta em mobile para reduzir scroll */}
          {heroDescription && (
            <p className="hidden sm:block text-sm sm:text-base text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              {heroDescription}
            </p>
          )}

          {/* Destaques */}
          {heroHighlights.length > 0 && (
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-8 sm:mb-10"
              aria-label="Destaques do serviço"
            >
              {heroHighlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#FFD400] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onTrack('whatsapp', 'hero_primary_cta')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 bg-[#25D366] text-white font-extrabold text-sm sm:text-base rounded-xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-lg shadow-green-400/20 min-h-[48px] sm:min-h-[52px] w-full sm:w-auto"
              aria-label="Solicitar atendimento pelo WhatsApp"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              SOLICITAR ATENDIMENTO
            </a>

            <a
              href={phoneTelLink}
              onClick={() => onTrack('phone', 'hero_phone_cta')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 bg-transparent text-white font-bold text-sm sm:text-base rounded-xl border-2 border-white/40 hover:border-[#FFD400] hover:text-[#FFD400] active:scale-95 transition-all min-h-[48px] sm:min-h-[52px] w-full sm:w-auto"
              aria-label={`Ligar para ${phoneFormatted}`}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              {phoneFormatted}
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-[11px] sm:text-xs text-slate-400 max-w-md leading-relaxed">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
