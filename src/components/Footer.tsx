import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1522] text-slate-400 text-xs pt-14 pb-24 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Coluna 1: Marca & Apresentação */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-[#F5C400] text-[#14263B] font-black flex items-center justify-center text-sm">
                L
              </div>
              <span className="font-extrabold text-base uppercase text-white tracking-tight">
                {companyName}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 text-xs max-w-sm font-normal">
              Assistência veicular, socorro de bateria, auxílio elétrico/mecânico e guincho plataforma para automóveis de passeio, utilitários leves e frotas na Região Metropolitana de Campinas.
            </p>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-[#F5C400] shrink-0 mt-0.5" />
              <span>Base: {baseAddress}</span>
            </div>
          </div>

          {/* Coluna 2: Canais Oficiais */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Contatos Oficiais
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de falar com a Libra Auto Socorro.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onTrack('whatsapp', 'footer_link_wa')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#F5C400] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#F5C400]" />
                  <span>WhatsApp: <strong className="font-mono">{phoneFormatted}</strong></span>
                </a>
              </li>
              <li>
                <a
                  href={phoneTelLink}
                  onClick={() => onTrack('phone', 'footer_link_phone')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#F5C400] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F5C400]" />
                  <span>Telefone Direto: <strong className="font-mono">{phoneFormatted}</strong></span>
                </a>
              </li>
              <li className="text-slate-400">
                Atendimento mediante confirmação de escala e trânsito
              </li>
            </ul>
          </div>

          {/* Coluna 3: Navegação Rápida */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#atendimento" className="hover:text-white transition-colors">
                  Categorias de Atendimento
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Catálogo de Serviços
                </a>
              </li>
              <li>
                <a href="#regiao" className="hover:text-white transition-colors">
                  Região Atendida & Rodovias
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Solicitar Atendimento
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divisor & Aviso Legal */}
        <div className="pt-8 border-t border-slate-800/80">
          <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
            {legalDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 pt-2">
            <div>
              © {currentYear} {companyName}. Barão Geraldo, Campinas - SP. Todos os direitos reservados.
            </div>
            <div>
              Desenvolvido com foco em conversão e transparência.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
