import React, { useState } from 'react';
import { Smartphone, Monitor, Code, Settings, ExternalLink, Check, RefreshCw } from 'lucide-react';

interface ControlToolbarProps {
  viewMode: 'desktop' | 'mobile';
  setViewMode: (mode: 'desktop' | 'mobile') => void;
  onOpenEmbedModal: () => void;
  phoneFormatted: string;
  setPhoneFormatted: (val: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (val: string) => void;
  trackedEventsCount: number;
}

export const ControlToolbar: React.FC<ControlToolbarProps> = ({
  viewMode,
  setViewMode,
  onOpenEmbedModal,
  phoneFormatted,
  setPhoneFormatted,
  whatsappNumber,
  setWhatsappNumber,
  trackedEventsCount,
}) => {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <aside aria-label="Painel de controle do desenvolvedor" className="bg-[#0D1A29] border-b border-slate-800 text-white px-4 py-2.5 sticky top-0 z-50 text-xs shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Lado Esquerdo: Marca & Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-bold tracking-tight text-slate-200">
              Painel Libra Auto Socorro
            </span>
          </div>

          <span className="text-slate-500 hidden sm:inline">|</span>

          {/* Seletor de Modo de Visualização */}
          <div className="inline-flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold transition-all ${
                viewMode === 'desktop'
                  ? 'bg-[#14263B] text-[#F5C400] shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Computador</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold transition-all ${
                viewMode === 'mobile'
                  ? 'bg-[#14263B] text-[#F5C400] shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Simulador Celular</span>
            </button>
          </div>
        </div>

        {/* Lado Direito: Ações */}
        <div className="flex items-center gap-2 flex-wrap">
          
          {/* Botão de Configuração de Telefone/WhatsApp */}
          <button
            onClick={() => setShowConfig(!showConfig)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
              showConfig
                ? 'bg-amber-500/20 text-[#F5C400] border-amber-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Editar Telefones</span>
          </button>

          {/* Botão para Abrir Central do Google Sites */}
          <button
            onClick={onOpenEmbedModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F5C400] text-[#14263B] font-extrabold rounded-lg hover:bg-[#e6b800] transition-colors shadow-xs"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Código Google Sites & Checklist</span>
          </button>

          {/* Link para o arquivo HTML puro */}
          <a
            href="/embed-google-sites.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 px-2 py-1"
          >
            <span>Ver HTML Puro</span>
            <ExternalLink className="w-3 h-3" />
          </a>

        </div>

      </div>

      {/* Painel Expansível de Configurações de Contato */}
      {showConfig && (
        <div className="max-w-7xl mx-auto mt-2.5 pt-2.5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 animate-in fade-in duration-150">
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Telefone Exibido (Formato Nacional):
            </label>
            <input
              type="text"
              value={phoneFormatted}
              onChange={(e) => setPhoneFormatted(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#F5C400]"
              placeholder="(19) 99675-9605"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1">
              Número WhatsApp (com DDI 55 e DDD):
            </label>
            <input
              type="text"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#F5C400]"
              placeholder="5519996759605"
            />
          </div>

          <div className="flex items-end">
            <span className="text-[11px] text-slate-400 pb-1">
              As alterações atualizam automaticamente todos os botões da página e o código do Google Sites!
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};
