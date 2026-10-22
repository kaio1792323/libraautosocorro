import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

interface HeaderProps {
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
  phoneFormatted: string;
  whatsappUrl: string;
}

const navLinks = [
  { href: '#atendimento', label: 'Veículos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'FAQ' },
];

export const Header: React.FC<HeaderProps> = ({ onTrack, whatsappUrl }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const waUrl = `${whatsappUrl}?text=${encodeURIComponent(
    'Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade?'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#061B3D] border-b-2 border-[#FFD400] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Brand / Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061B3D] rounded-lg"
            aria-label="Libra Auto Socorro — Início"
          >
            <img
              src="/images/logo_libra.png"
              alt="Logotipo Libra Auto Socorro"
              className="h-9 w-auto object-contain"
              loading="eager"
              decoding="async"
              onError={(e) => {
                // Fallback to text badge if logo fails to load
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight uppercase leading-none text-white">
                LIBRA AUTO SOCORRO
              </span>
              <span className="text-[10px] font-semibold text-[#FFD400] tracking-wider uppercase mt-0.5">
                Mecânica · Elétrica · Borracharia Volante
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FFD400] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:text-[#FFD400]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onTrack('whatsapp', 'header_cta')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-extrabold text-sm rounded-xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061B3D]"
              aria-label="Chamar socorro pelo WhatsApp"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Chamar Socorro
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white hover:text-[#FFD400] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] rounded-lg"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#061B3D] border-t border-white/10 px-4 py-4 flex flex-col gap-1"
          role="navigation"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-2 text-slate-200 font-semibold text-base hover:text-[#FFD400] transition-colors border-b border-white/5 last:border-0 focus-visible:outline-none focus-visible:text-[#FFD400]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onTrack('whatsapp', 'mobile_menu_cta');
              setMobileOpen(false);
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white font-extrabold text-sm rounded-xl hover:bg-[#1ebe5d] active:scale-95 transition-all"
            aria-label="Chamar socorro pelo WhatsApp"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Chamar Socorro
          </a>
        </div>
      )}
    </header>
  );
};
