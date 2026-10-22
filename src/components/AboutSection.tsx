import React from 'react';
import frotasImg from '../assets/images/service_frotas_utilitarios_1792676428289.webp';

interface AboutSectionProps {
  title: string;
  paragraphs: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ title, paragraphs }) => {
  return (
    <section
      id="sobre"
      className="bg-[#F5F7FA] py-12 sm:py-16 md:py-24 border-t border-slate-100"
      aria-labelledby="sobre-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Imagem */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-60 sm:h-72 lg:h-auto lg:min-h-[380px]">
            <img
              src={frotasImg}
              alt="Assistência volante Libra Auto Socorro atendendo veículo comercial na estrada"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={700}
              height={500}
            />
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-[#FFD400]" aria-hidden="true" />
          </div>

          {/* Texto */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#061B3D]/10 text-[#061B3D] text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5">
              Sobre a Libra
            </div>
            <h2
              id="sobre-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061B3D] leading-tight mb-5 sm:mb-6"
            >
              {title}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Logo strip */}
            <div className="mt-7 sm:mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#061B3D]">
              <img
                src="/images/logo_libra.png"
                alt="Logotipo Libra Auto Socorro"
                className="h-7 sm:h-8 w-auto object-contain"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <p className="font-extrabold text-xs sm:text-sm text-white leading-none uppercase">
                  LIBRA AUTO SOCORRO
                </p>
                <p className="text-[#FFD400] text-[10px] sm:text-xs mt-0.5">
                  Assistência Emergencial Veicular
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
