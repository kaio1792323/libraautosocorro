import React from 'react';
import { Phone } from 'lucide-react';

interface MobileFixedBarProps {
  whatsappBaseUrl: string;
  phoneTelLink: string;
  phoneFormatted: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const MobileFixedBar: React.FC<MobileFixedBarProps> = ({
  whatsappBaseUrl,
  phoneTelLink,
  phoneFormatted,
  onTrack,
}) => {
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade?'
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#061B3D] border-t-2 border-[#FFD400]/40 shadow-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="px-3 py-2.5 max-w-lg mx-auto flex items-center gap-2.5">

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onTrack('whatsapp', 'mobile_sticky_whatsapp')}
          className="flex-[1.3] inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-md min-h-[48px]"
          aria-label="Chamar no WhatsApp"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
          </svg>
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Ligar */}
        <a
          href={phoneTelLink}
          onClick={() => onTrack('phone', 'mobile_sticky_call')}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 active:scale-95 transition-all min-h-[48px]"
          aria-label={`Ligar para ${phoneFormatted}`}
        >
          <Phone className="w-4 h-4 text-[#FFD400] shrink-0" aria-hidden="true" />
          <span className="whitespace-nowrap">Ligar</span>
        </a>

      </div>
    </div>
  );
};
