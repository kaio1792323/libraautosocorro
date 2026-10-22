import React from 'react';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';
import { LIBRA_CONFIG } from '../data/config';

interface CoverageSectionProps {
  coverage: typeof LIBRA_CONFIG.coverage;
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({
  coverage,
  whatsappBaseUrl,
  onTrack,
}) => {
  return (
    <section id="regiao" className="py-16 sm:py-20 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#14263B] mb-2">
            Base & Região Atendida
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14263B] tracking-tight mb-4">
            Barão Geraldo, Campinas e Rodovias da RMC
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Com base estratégica em Barão Geraldo, a Libra informa atendimento e rotas de deslocamento para bairros de Campinas, cidades vizinhas e rodovias metropolitanas.
          </p>
        </div>

        {/* 2-Column Coverage Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Campinas & Cidades da RMC */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#14263B]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14263B]">
                  Campinas & Bairros de Referência
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Base operacional: Distrito de Barão Geraldo
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Localidades informadas em Campinas:
              </span>
              <div className="flex flex-wrap gap-2">
                {coverage.districtsCampinas.map((district, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-md border ${
                      district.includes('Barão Geraldo')
                        ? 'bg-amber-50 text-slate-900 border-amber-300 font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Cidades vizinhas sob consulta de viabilidade:
              </span>
              <div className="flex flex-wrap gap-2">
                {coverage.neighboringCities.map((city, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Rodovias e Acessos Metropolitanos */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-[#14263B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14263B]">
                    Rodovias e Anéis Viários
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    Acessos prioritários da Região Metropolitana
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Principais rodovias com rota informada:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {coverage.mainHighways.map((highway, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-semibold p-2.5 rounded-md bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#F5C400]" />
                    <span>{highway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aviso de Transparência */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Aviso de Cobertura:</strong> {coverage.notice}
              </div>
            </div>

          </div>

        </div>

        {/* CTA rápido para consultar localização */}
        <div className="text-center">
          <a
            href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de consultar se vocês atendem no local: [informar endereço ou rodovia e KM].')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onTrack('whatsapp', 'coverage_check_location')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14263B] hover:text-amber-600 transition-colors py-2"
          >
            <span>Dúvida sobre a sua localização? Envie uma mensagem com seu ponto para checar</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
