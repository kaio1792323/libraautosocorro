import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, HelpCircle, AlertTriangle, ShieldCheck, ListChecks, Activity } from 'lucide-react';
import { generateGoogleSitesEmbed } from '../utils/generateGoogleSitesEmbed';
import { LIBRA_CONFIG } from '../data/config';

interface EmbedExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackedEvents: Array<{ type: 'whatsapp' | 'phone'; source: string; timestamp: string }>;
  customPhone: string;
  customWhatsApp: string;
}

export const EmbedExportModal: React.FC<EmbedExportModalProps> = ({
  isOpen,
  onClose,
  trackedEvents,
  customPhone,
  customWhatsApp,
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'instructions' | 'limitations' | 'checklist' | 'tracking'>('code');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Custom config based on current phone/WhatsApp values
  const currentConfig = {
    ...LIBRA_CONFIG,
    phoneFormatted: customPhone,
    phoneTelLink: `tel:+${customPhone.replace(/\D/g, '')}`,
    whatsappBaseUrl: `https://wa.me/${customWhatsApp.replace(/\D/g, '')}`,
  };

  const embedCode = generateGoogleSitesEmbed(currentConfig);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([embedCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'libra-auto-socorro-google-sites-embed.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header do Modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14263B] text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F5C400] text-[#14263B] font-extrabold flex items-center justify-center text-sm">
              L
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg leading-tight">
                Central de Incorporação para Google Sites
              </h2>
              <p className="text-xs text-slate-300">
                Código puro consolidado, documentação técnica e lista de testes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 sm:gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'code'
                ? 'border-[#14263B] text-[#14263B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Código HTML/CSS/JS
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'instructions'
                ? 'border-[#14263B] text-[#14263B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Instruções Passo a Passo
          </button>
          <button
            onClick={() => setActiveTab('limitations')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'limitations'
                ? 'border-[#14263B] text-[#14263B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Limitações do Google Sites
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'border-[#14263B] text-[#14263B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Checklist de Testes
          </button>
          <button
            onClick={() => setActiveTab('tracking')}
            className={`py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'tracking'
                ? 'border-[#14263B] text-[#14263B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Monitor de Cliques ({trackedEvents.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-700 text-sm">
          
          {/* TAB 1: CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900">
                <div>
                  <strong>Código 100% autocontido:</strong> Todo o HTML, CSS isolado em <code className="bg-amber-100 px-1 py-0.5 rounded">#libra-embed-wrapper</code> e JavaScript com rastreamento já estão incluídos neste único bloco.
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#14263B] text-white rounded-lg font-bold text-xs hover:bg-[#1f3854] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#F5C400]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar .html</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <textarea
                  readOnly
                  value={embedCode}
                  className="w-full h-80 font-mono text-xs p-4 bg-slate-900 text-slate-200 rounded-xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F5C400] select-all leading-relaxed"
                />
              </div>

              <div className="text-xs text-slate-500">
                Você também pode acessar diretamente o arquivo gerado em <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded">/embed-google-sites.html</code> no servidor.
              </div>
            </div>
          )}

          {/* TAB 2: INSTRUCTIONS */}
          {activeTab === 'instructions' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h3 className="font-bold text-base text-[#14263B] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  Como incorporar no Google Sites (Passo a Passo)
                </h3>
                <p className="text-xs text-slate-600">
                  Siga estas etapas no editor oficial do Google Sites (sites.google.com):
                </p>
              </div>

              <ol className="space-y-4 list-decimal list-inside text-sm">
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Acesse o Google Sites:</strong> Abra a página onde você deseja colocar a landing page da Libra Auto Socorro.
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Painel Inserir:</strong> No menu lateral direito, clique na aba <em>Inserir</em> e selecione a ferramenta <strong>Incorporar</strong> (ícone com código <code className="bg-slate-100 px-1">&lt;/&gt;</code>).
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Escolha "Incorporar código":</strong> Na janela que se abre, clique na segunda aba <strong>"Incorporar código"</strong> (não use "Por URL").
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Cole o código:</strong> Cole o código completo gerado na aba "Código HTML/CSS/JS" deste painel e clique no botão <strong>"Próxima"</strong> e depois em <strong>"Inserir"</strong>.
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Ajuste de Largura e Altura:</strong> No editor do Google Sites, clique no bloco incorporado e estique as alças laterais para a largura total da página. Em seguida, puxe a alça inferior para baixo para dar altura suficiente à página sem que apareça uma barra de rolagem interna indesejada.
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg">
                  <strong>Publicação e Teste:</strong> Clique em <em>Publicar</em> e teste em um celular real o clique para WhatsApp e ligação telefônica.
                </li>
              </ol>
            </div>
          )}

          {/* TAB 3: LIMITATIONS */}
          {activeTab === 'limitations' && (
            <div className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs">
                <strong>Documentação de Limitações Técnicas do Google Sites:</strong> O Google Sites isola blocos de código customizados dentro de um iframe sandboxed hospedado em domínio do Google. Abaixo estão as restrições e como o nosso código as resolve.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 p-4 rounded-xl bg-white">
                  <h4 className="font-bold text-sm text-[#14263B] mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    1. Sandbox de Iframe & Links Externos
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Desafio:</strong> Links comuns podem tentar carregar dentro do iframe ou sofrer restrição de política de segurança.
                    <br />
                    <strong>Nossa Solução:</strong> Todos os links do WhatsApp utilizam explicitamente <code className="bg-slate-100 px-1">target="_blank"</code> e <code className="bg-slate-100 px-1">rel="noopener noreferrer"</code>, garantindo a abertura correta do app WhatsApp ou WhatsApp Web em nova aba.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl bg-white">
                  <h4 className="font-bold text-sm text-[#14263B] mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    2. Links de Telefone (<code className="text-xs">tel:</code>)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Desafio:</strong> Alguns iframes em desktops bloqueiam o protocolo <code className="bg-slate-100 px-1">tel:</code>.
                    <br />
                    <strong>Nossa Solução:</strong> Sempre exibimos o número completo formatado em texto legível <code className="bg-slate-100 px-1 font-mono">(19) 99675-9605</code> nos botões e no rodapé, permitindo cópia manual imediata caso o condutor esteja em computador.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl bg-white">
                  <h4 className="font-bold text-sm text-[#14263B] mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    3. Altura Dinâmica do Iframe
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Desafio:</strong> O Google Sites não ajusta automaticamente a altura do iframe pelo conteúdo interno.
                    <br />
                    <strong>Nossa Solução:</strong> O código é estruturado de forma compacta e previsível. No editor do Google Sites, basta arrastar a alça inferior do componente para baixo até cobrir o rodapé.
                  </p>
                </div>

                <div className="border border-slate-200 p-4 rounded-xl bg-white">
                  <h4 className="font-bold text-sm text-[#14263B] mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    4. Isolamento Total de Estilos (CSS Scoping)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Desafio:</strong> Estilos genéricos como <code className="bg-slate-100 px-1">button</code> ou <code className="bg-slate-100 px-1">body</code> poderiam quebrar ou sofrer herança indesejada.
                    <br />
                    <strong>Nossa Solução:</strong> 100% dos seletores CSS estão protegidos sob o seletor <code className="bg-slate-100 px-1">#libra-embed-wrapper</code>, impedindo qualquer conflito.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <h3 className="font-bold text-base text-[#14263B] mb-2 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-amber-600" />
                Checklist de Validação Pré-Lançamento
              </h3>
              <p className="text-xs text-slate-600">
                Antes de divulgar ou rodar anúncios para a landing page da Libra Auto Socorro, confira cada item:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Teste do WhatsApp no Celular",
                    desc: "Clicar no botão 'Chamar no WhatsApp' em dispositivo Android e iOS e confirmar se abre o aplicativo do WhatsApp com o número correto (19 99675-9605).",
                  },
                  {
                    title: "Validação das Mensagens dos 3 Cartões de Atendimento",
                    desc: "Testar o clique no cartão 'Socorro Veicular', 'Guincho e Transporte' e 'Empresas e Frotas' para checar se o texto pré-preenchido identifica corretamente o serviço solicitado.",
                  },
                  {
                    title: "Teste da Ligação Telefônica",
                    desc: "Clicar no botão 'Ligar agora' em um smartphone e conferir se o discador nativo abre com o número (19) 99675-9605 sem erro de digitação.",
                  },
                  {
                    title: "Checagem de Responsividade e Barra Fixa",
                    desc: "Visualizar a página em tela mobile (360px a 430px) e verificar se a barra fixa inferior não encobre botões e cumpre o limite de 15% de altura da tela.",
                  },
                  {
                    title: "Ausência de Promessas Indevidas",
                    desc: "Conferir que não há promessas de chegada em 'X minutos' nem garantia de atendimento 24h sem a devida confirmação com o proprietário.",
                  },
                  {
                    title: "Ajuste de Altura no Google Sites",
                    desc: "Garantir que a caixa de incorporação no Google Sites foi esticada o suficiente para não gerar uma barra de rolagem vertical dupla desconfortável.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#14263B]">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TRACKING MONITOR */}
          {activeTab === 'tracking' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#14263B] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    Monitor de Disparos de Eventos em Tempo Real
                  </h3>
                  <p className="text-xs text-slate-500">
                    Registros capturados durante a sua sessão nesta página.
                  </p>
                </div>
                <div className="text-xs font-mono bg-slate-100 px-2.5 py-1 rounded text-slate-700">
                  Total de cliques: <strong>{trackedEvents.length}</strong>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900">
                <strong>Aviso de Conformidade de Métricas:</strong> O sistema registra a <em>intenção de contato</em> (clique no botão), e <strong>não</strong> afirma que o clique representa um atendimento concluído ou faturado.
              </div>

              {trackedEvents.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-xs text-slate-500">
                  Nenhum clique de contato registrado nesta sessão ainda.
                  <br />
                  Clique nos botões de WhatsApp ou Telefone na página para ver os eventos sendo capturados aqui.
                </div>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto font-mono text-xs">
                  {trackedEvents.map((evt, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-slate-900 text-slate-200 rounded-lg flex items-center justify-between border border-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          evt.type === 'whatsapp' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {evt.type}
                        </span>
                        <span className="text-slate-300">Origem: <strong>{evt.source}</strong></span>
                      </div>
                      <span className="text-slate-500 text-[11px]">{evt.timestamp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer do Modal */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Código pronto para Google Sites, WordPress ou hospedagem estática.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-bold hover:bg-slate-300 transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
