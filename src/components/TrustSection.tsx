import React from 'react';
import { ShieldCheck, FileText, Check, PhoneCall, Sparkles } from 'lucide-react';
import { LIBRA_CONFIG } from '../data/config';

interface TrustSectionProps {
  pillars: typeof LIBRA_CONFIG.trustPillars;
  phoneFormatted: string;
  baseAddress: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  pillars,
  phoneFormatted,
  baseAddress,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#14263B] mb-2">
            Transparência e Diferenciais
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14263B] tracking-tight mb-4">
            Compromisso com o que é verdadeiro
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Não fazemos promessas irreais de chegada em minutos sem verificar o trânsito da região. Trabalhamos com seriedade, preço justo informado previamente e cuidado com o seu automóvel.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-[#14263B] font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#14263B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Critério verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dados Comerciais e Espaço Reservado para Fotos Reais */}
        <div className="bg-[#14263B] text-white rounded-xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F5C400] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Dados Comerciais & Atendimento</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Atendimento direto com quem opera em Campinas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Você fala diretamente com a equipe operacional. Fornecemos orientação prévia de segurança para condutores parados na pista ou acostamento enquanto a viatura se desloca.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#0F1E2E] p-3.5 rounded-lg border border-slate-700">
                  <span className="block text-slate-400 font-medium">Canal Telefônico / WhatsApp:</span>
                  <span className="text-white font-mono font-bold text-sm mt-0.5 block">{phoneFormatted}</span>
                </div>
                <div className="bg-[#0F1E2E] p-3.5 rounded-lg border border-slate-700">
                  <span className="block text-slate-400 font-medium">Ponto de Partida:</span>
                  <span className="text-white font-semibold mt-0.5 block">{baseAddress}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F1E2E] p-6 rounded-lg border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                <FileText className="w-4 h-4 text-[#F5C400]" />
                <span>Política de Confirmação</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] mt-1.5 shrink-0" />
                  <span>Valores combinados previamente com base na distância de ida e retorno.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] mt-1.5 shrink-0" />
                  <span>Sem cláusulas ocultas ou custos abusivos de permanência não informados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] mt-1.5 shrink-0" />
                  <span>Espaço dedicado para inserção das fotos reais da equipe e veículos do proprietário.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
