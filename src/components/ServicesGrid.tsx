import React from 'react';
import { ServiceItem } from '../data/config';
import { ArrowUpRight, BatteryCharging, Wrench, Shield, Truck, Compass, Building } from 'lucide-react';
import mechanicImg from '../assets/images/service_mecanico_socorro_1792676428043.jpg';
import fleetImg from '../assets/images/service_frotas_utilitarios_1792676428289.jpg';

interface ServicesGridProps {
  services: ServiceItem[];
  whatsappBaseUrl: string;
  onTrack: (type: 'whatsapp' | 'phone', source: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  whatsappBaseUrl,
  onTrack,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'guincho-plataforma':
        return <Truck className="w-5 h-5 text-[#14263B]" />;
      case 'auto-eletrica-bateria':
        return <BatteryCharging className="w-5 h-5 text-[#14263B]" />;
      case 'socorro-mecanico':
        return <Wrench className="w-5 h-5 text-[#14263B]" />;
      case 'troca-pneu':
        return <Shield className="w-5 h-5 text-[#14263B]" />;
      case 'utilitarios-vans':
        return <Building className="w-5 h-5 text-[#14263B]" />;
      default:
        return <Compass className="w-5 h-5 text-[#14263B]" />;
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#14263B] mb-2">
            Catálogo de Serviços Modulares
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14263B] tracking-tight mb-4">
            Assistência veicular e transporte sob consulta
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            A disponibilidade de cada modalidade deve ser consultada previamente com o operador no momento do contato, informando modelo e local da ocorrência.
          </p>
        </div>

        {/* 2 Visual Feature Cards with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Socorro Mecânico & Diagnóstico com Foto Real */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-1/2 relative bg-slate-900 aspect-video sm:aspect-auto">
              <img
                src={mechanicImg}
                alt="Técnico realizando teste de bateria e socorro mecânico"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Atendimento no Local</span>
                <h3 className="text-lg font-bold text-[#14263B] mt-1 mb-2">
                  Autoelétrica & Bateria
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Verificação de carga, auxílio de partida com booster profissional e suporte para veículos que não ligam na rua ou garagem.
                </p>
              </div>
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Preciso de socorro para bateria/elétrica em meu veículo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTrack('whatsapp', 'service_highlight_battery')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14263B] hover:text-amber-600 transition-colors"
              >
                <span>Consultar disponibilidade</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Frotas e Utilitários com Foto Real */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-1/2 relative bg-slate-900 aspect-video sm:aspect-auto">
              <img
                src={fleetImg}
                alt="Pátio de utilitários e vans comerciais"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Operações Comerciais</span>
                <h3 className="text-lg font-bold text-[#14263B] mt-1 mb-2">
                  Vans & Utilitários Leves
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Suporte especializado para motoristas de entrega e transporte de carga que precisam de rápida liberação na RMC.
                </p>
              </div>
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Preciso de suporte para van/utilitário em Campinas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTrack('whatsapp', 'service_highlight_fleet')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14263B] hover:text-amber-600 transition-colors"
              >
                <span>Consultar condições PJ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Modular Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const serviceWaUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(service.whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-base font-bold text-[#14263B] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <a
                  href={serviceWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onTrack('whatsapp', `service_grid_${service.id}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14263B] hover:text-amber-600 transition-colors pt-3 border-t border-slate-100"
                >
                  <span>Verificar atendimento</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
