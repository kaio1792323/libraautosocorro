import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

interface FooterProps {
  companyName: string;
  phoneFormatted: string;
  phoneTelLink: string;
  whatsappBaseUrl: string;
  baseAddress: string;
  legalDisclaimer: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  companyName,
  phoneFormatted,
  phoneTelLink,
  whatsappBaseUrl,
  baseAddress,
  legalDisclaimer,
  onTrack,
}) => {
  const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade?'
  )}`;

  return (
    <footer
      className="bg-[#061B3D] border-t-2 border-[#FFD400]/30 pb-24 md:pb-0"
      aria-label="Rodapé"
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo_libra.png"
              alt="Logotipo Libra Auto Socorro"
              className="h-10 w-auto object-contain"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div>
              <p className="text-white font-extrabold text-base uppercase tracking-tight leading-none">
                {companyName}
              </p>
              <p className="text-[#FFD400] text-xs mt-0.5 font-semibold">
                Mecânica · Elétrica · Borracharia Volante
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Assistência emergencial para veículos médios e pesados, com suporte também para automóveis e utilitários leves.
            Diagnóstico e reparos no local da pane, sempre que tecnicamente possível.
          </p>
          <p className="text-slate-500 text-xs mt-3">
            Base: {baseAddress}
          </p>
        </div>

        {/* Contatos */}
        <div>
          <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
            Contatos
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTrack('whatsapp', 'footer_wa_link')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-[#FFD400] text-sm transition-colors focus-visible:outline-none focus-visible:text-[#FFD400]"
                aria-label="Chamar no WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD400] shrink-0" aria-hidden="true" />
                {phoneFormatted} (WhatsApp)
              </a>
            </li>
            <li>
              <a
                href={phoneTelLink}
                onClick={() => onTrack('phone', 'footer_tel_link')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-[#FFD400] text-sm transition-colors focus-visible:outline-none focus-visible:text-[#FFD400]"
                aria-label={`Ligar para ${phoneFormatted}`}
              >
                <Phone className="w-4 h-4 text-[#FFD400] shrink-0" aria-hidden="true" />
                {phoneFormatted} (Telefone)
              </a>
            </li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
            Serviços
          </h3>
          <ul className="space-y-1.5 text-sm text-slate-400">
            {[
              'Bateria e Partida',
              'Pane Elétrica',
              'Motor de Arranque',
              'Alternador',
              'Sistema Diesel',
              'Correias',
              'Arrefecimento',
              'Freios',
              'Borracharia',
              'Ignição e Travas',
            ].map((s) => (
              <li key={s} className="hover:text-slate-300 transition-colors">
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-xs text-slate-500 leading-relaxed mb-2">
          {legalDisclaimer}
        </p>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {companyName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
