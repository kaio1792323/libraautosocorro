import React from 'react';
import { MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  title: string;
  text: string;
  buttonText: string;
  whatsappMessage: string;
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  text,
  buttonText,
  whatsappMessage,
  whatsappBaseUrl,
  onTrack,
}) => {
  const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="contato"
      className="bg-[#FFD400] py-12 sm:py-16 md:py-24"
      aria-labelledby="cta-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2
          id="cta-title"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061B3D] leading-tight mb-4 sm:mb-5"
        >
          {title}
        </h2>

        <p className="text-[#061B3D]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
          {text}
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onTrack('whatsapp', 'final_cta')}
          className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-[#061B3D] text-white font-extrabold text-sm sm:text-base rounded-2xl hover:bg-[#0a2d5e] active:scale-95 transition-all shadow-xl shadow-[#061B3D]/20 min-h-[56px] sm:min-h-[60px] w-full sm:w-auto"
          aria-label={buttonText}
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
          <span className="text-center leading-tight">{buttonText}</span>
        </a>

      </div>
    </section>
  );
};
