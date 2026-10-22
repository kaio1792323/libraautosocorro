import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import heroImageTow from '../assets/images/hero_guincho_socorro_1792676428129.jpg';

interface HeroProps {
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
  phoneFormatted: string;
  phoneTelLink: string;
  whatsappUrl: string;
  baseLocation: string;
  title: string;
  subtitle: string;
  disclaimer: string;
}

export const Hero: React.FC<HeroProps> = ({
  onTrack,
  phoneFormatted,
  phoneTelLink,
  whatsappUrl,
  baseLocation,
  title,
  subtitle,
  disclaimer,
}) => {
  const whatsappHeroUrl = `${whatsappUrl}?text=${encodeURIComponent('Olá! Preciso de assistência/guincho em Barão Geraldo ou região de Campinas.')}`;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#14263B] via-[#112033] to-[#0D1A29] text-white pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background subtle geometric accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F5C400_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Conteúdo e Chamada */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker editorial */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5C400] mb-4">
              <MapPin className="w-4 h-4 text-[#F5C400] shrink-0" />
              <span>Base física em {baseLocation}</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance">
              {title}
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
              {subtitle}
            </p>

            {/* Ações Principais de Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              
              {/* Botão 1: WhatsApp (Destaque visual) */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTrack('whatsapp', 'hero_cta_whatsapp')}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#F5C400] text-[#14263B] font-extrabold text-base hover:bg-[#e6b800] transition-all duration-150 shadow-lg shadow-amber-500/20 active:scale-[0.98] min-h-[50px] text-center"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"/>
                </svg>
                <span>Chamar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              {/* Botão 2: Ligar agora */}
              <a
                href={phoneTelLink}
                onClick={() => onTrack('phone', 'hero_cta_call')}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-lg bg-transparent text-white font-bold text-base border-2 border-slate-600 hover:border-slate-400 hover:bg-white/5 transition-all duration-150 min-h-[50px] text-center"
              >
                <Phone className="w-5 h-5 text-[#F5C400] shrink-0" />
                <span>Ligar agora: <span className="tabular-nums font-mono">{phoneFormatted}</span></span>
              </a>

            </div>

            {/* Aviso de Transparência / Responsabilidade */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400 border-l-2 border-slate-700 pl-3.5 py-0.5 max-w-xl">
              <ShieldCheck className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
              <span>{disclaimer}</span>
            </div>

          </div>

          {/* Coluna Visual: Fotografia Real do Guincho Plataforma */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                <img
                  src={heroImageTow}
                  alt="Guincho e caminhão plataforma da Libra Auto Socorro em atendimento"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Legenda em Scrim */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">Guincho Plataforma Hidráulica</span>
                  <span className="text-[#F5C400] font-mono">Campinas e Rodovias</span>
                </div>
              </div>

              {/* Informações de Suporte Rápido */}
              <div className="p-4 sm:p-5 bg-[#0F1E2E] border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-slate-400 font-medium">Equipamento:</span>
                  <span className="text-white font-bold">Plataforma & Cintas de Fixação</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-medium">Atendimento:</span>
                  <span className="text-[#F5C400] font-bold">Direto com o Operador</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
