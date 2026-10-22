import React from 'react';
import { LIBRA_CONFIG } from '../data/config';
import { MessageSquare } from 'lucide-react';

interface HeaderProps {
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
  phoneFormatted: string;
  whatsappUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ onTrack, whatsappUrl }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#14263B] border-b-2 border-[#F5C400] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand wordmark (single element, clean display) */}
          <a href="#hero" className="flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-[#F5C400] text-[#14263B] font-extrabold flex items-center justify-center text-xl shadow-sm transition-transform group-hover:scale-105">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight uppercase leading-none text-white">
                LIBRA AUTO SOCORRO
              </span>
              <span className="text-[11px] font-semibold text-[#F5C400] tracking-wider uppercase mt-0.5">
                Barão Geraldo · Campinas
              </span>
            </div>
          </a>

          {/* Zone 2: 4 single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#atendimento" className="hover:text-[#F5C400] transition-colors whitespace-nowrap shrink-0">
              Atendimento
            </a>
            <a href="#servicos" className="hover:text-[#F5C400] transition-colors whitespace-nowrap shrink-0">
              Serviços
            </a>
            <a href="#regiao" className="hover:text-[#F5C400] transition-colors whitespace-nowrap shrink-0">
              Região Atendida
            </a>
            <a href="#como-funciona" className="hover:text-[#F5C400] transition-colors whitespace-nowrap shrink-0">
              Como Funciona
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent('Olá! Preciso de auto socorro com a Libra em Barão Geraldo ou Campinas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onTrack('whatsapp', 'topbar_cta')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F5C400] text-[#14263B] font-bold text-xs sm:text-sm rounded-lg hover:bg-[#e6b800] transition-all shadow-sm whitespace-nowrap shrink-0 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar Socorro</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
