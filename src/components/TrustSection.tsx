import React from 'react';
import { Truck, MapPin, Car, Users } from 'lucide-react';
import { TrustPillar } from '../data/config';

interface TrustSectionProps {
  pillars: TrustPillar[];
  phoneFormatted: string;
  baseAddress: string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Truck, MapPin, Car, Users,
};

export const TrustSection: React.FC<TrustSectionProps> = ({ pillars, phoneFormatted, baseAddress }) => {
  return (
    <section
      id="diferenciais"
      className="bg-[#061B3D] py-12 sm:py-16 md:py-24"
      aria-labelledby="diferenciais-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FFD400]/15 text-[#FFD400] text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Nossos Diferenciais
          </div>
          <h2
            id="diferenciais-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl mx-auto"
          >
            SEU VEÍCULO É IMPORTANTE PARA SUA OPERAÇÃO.{' '}
            <span className="text-[#FFD400]">NOSSO COMPROMISSO É AJUDAR VOCÊ A SEGUIR EM FRENTE.</span>
          </h2>
        </div>

        {/* Pillars — 1 col mobile, 2 col sm/md, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {pillars.map((pillar, i) => {
            const IconComp = iconMap[pillar.icon] ?? Truck;
            return (
              <article
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-[#FFD400]/30 transition-all duration-200"
                aria-label={pillar.title}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFD400] flex items-center justify-center mb-4 shadow-md shrink-0">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#061B3D]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-extrabold text-sm sm:text-base mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Info strip — 1 col mobile, 3 col sm+ */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center">
            <p className="text-[#FFD400] font-extrabold text-base sm:text-lg break-all">{phoneFormatted}</p>
            <p className="text-slate-400 text-xs mt-1">WhatsApp / Telefone</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center">
            <p className="text-[#FFD400] font-extrabold text-base sm:text-lg">Leves e Pesados</p>
            <p className="text-slate-400 text-xs mt-1">Atendimento amplo</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center">
            <p className="text-[#FFD400] font-extrabold text-base sm:text-lg">{baseAddress}</p>
            <p className="text-slate-400 text-xs mt-1">Base de atendimento</p>
          </div>
        </div>

      </div>
    </section>
  );
};
