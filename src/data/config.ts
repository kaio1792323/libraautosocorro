export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  whatsappMessage: string;
}

export interface SegmentationCard {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const LIBRA_CONFIG = {
  // Dados de Contato Centrais (Facilmente editáveis)
  companyName: "Libra Auto Socorro",
  shortName: "Libra",
  phoneRaw: "5519996759605",
  phoneFormatted: "(19) 99675-9605",
  phoneTelLink: "tel:+5519996759605",
  whatsappBaseUrl: "https://wa.me/5519996759605",
  
  // Localização e Base
  baseLocation: "Barão Geraldo, Campinas — SP",
  baseAddress: "Distrito de Barão Geraldo, Campinas/SP",
  regionServed: "Região Metropolitana de Campinas (RMC) e Rodovias",

  // Mensagens e Chamadas Oficiais
  heroTitle: "Precisou de Auto Socorro? Conte com a Libra.",
  heroSubtitle: "Assistência veicular em Barão Geraldo e região de Campinas. Entre em contato para verificar o atendimento.",
  heroDisclaimer: "Atendimento sujeito a confirmação de rota, disponibilidade de guincho e condições operacionais no momento da chamada.",

  // Segmentações de Atendimento (Com mensagens personalizadas para cada perfil)
  segmentations: [
    {
      id: "socorro-veicular",
      title: "Socorro Veicular",
      targetAudience: "Motoristas particulares e passageiros",
      description: "Auxílio no local da pane para problemas elétricos, mecânicos rápidos, recarga de bateria e substituição de pneu furado.",
      bulletPoints: [
        "Auxílio de partida / recarga de bateria",
        "Diagnóstico elétrico e mecânico preliminar",
        "Troca de estepe e suporte emergencial",
      ],
      ctaText: "Pedir Socorro Veicular",
      whatsappMessage: "Olá! Preciso de socorro mecânico/elétrico no local em [informar local/bairro/rodovia]. Veículo: [marca/modelo]. Poderia verificar disponibilidade de atendimento?",
    },
    {
      id: "guincho-transporte",
      title: "Guincho e Transporte",
      targetAudience: "Carros de passeio, SUVs, picapes e vans",
      description: "Reboque em plataforma para transporte com fixação adequada de veículos avariados, sem tração ou em panes complexas.",
      bulletPoints: [
        "Plataforma para transporte seguro",
        "Remoção de vias públicas e rodovias",
        "Destino para oficinas, concessionárias ou residências",
      ],
      ctaText: "Cotar Guincho Plataforma",
      whatsappMessage: "Olá! Gostaria de cotar guincho/transporte para meu veículo. Saída: [origem] para [destino]. Veículo: [modelo]. Qual a disponibilidade e valor?",
    },
    {
      id: "empresas-frotas",
      title: "Empresas e Frotas",
      targetAudience: "Frotistas, transportadoras e frotas corporativas",
      description: "Atendimento prioritário para veículos comerciais leves, vans de entrega e frotas corporativas em Campinas e cidades vizinhas.",
      bulletPoints: [
        "Atendimento a vans e veículos comerciais",
        "Suporte para retorno rápido à operação",
        "Condições personalizadas para parceiros PJ",
      ],
      ctaText: "Falar sobre Atendimento PJ",
      whatsappMessage: "Olá! Tenho interesse em atendimento para empresa/frota de veículos na região de Campinas. Gostaria de entender as condições e serviços disponíveis.",
    },
  ] as SegmentationCard[],

  // Serviços Modulares Confirmáveis
  services: [
    {
      id: "guincho-plataforma",
      title: "Guincho Plataforma",
      subtitle: "Reboque com prancha hidráulica",
      description: "Transporte cuidadoso sobre plataforma para carros de passeio, utilitários leves e veículos baixos, evitando danos mecânicos na transmissão.",
      whatsappMessage: "Olá! Preciso de guincho plataforma para meu carro em [local]. Poderia verificar disponibilidade?",
    },
    {
      id: "auto-eletrica-bateria",
      title: "Autoelétrica & Bateria",
      subtitle: "Auxílio de partida e verificação",
      description: "Socorro para veículos que não dão partida. Teste de alternador, verificação de carga e conexão de booster profissional para partida assistida.",
      whatsappMessage: "Olá! Meu carro não liga / descarregou a bateria em [local]. Poderia me atender?",
    },
    {
      id: "socorro-mecanico",
      title: "Socorro Mecânico no Local",
      subtitle: "Diagnóstico inicial e desobstrução",
      description: "Avaliação rápida no local da pane para identificar se é possível liberar o veículo com segurança ou se é necessário reboque até oficina.",
      whatsappMessage: "Olá! Estou com uma pane mecânica em [local]. Gostaria de verificar se vocês atendem no local.",
    },
    {
      id: "troca-pneu",
      title: "Troca de Pneu & Estepe",
      subtitle: "Auxílio de rodagem segura",
      description: "Substituição do pneu furado pelo estepe com ferramentas adequadas, aperto com torquímetro e verificação de segurança na rodovia ou rua.",
      whatsappMessage: "Olá! Estou com pneu furado em [local] e preciso de ajuda para troca do estepe.",
    },
    {
      id: "utilitarios-vans",
      title: "Utilitários & Vans Leves",
      subtitle: "Suporte para trabalho e carga",
      description: "Capacidade técnica para remoção e suporte mecânico de vans, furgões e caminhonetes em rotas de entrega e operações comerciais.",
      whatsappMessage: "Olá! Preciso de atendimento para van/utilitário em [local]. Qual a disponibilidade?",
    },
    {
      id: "suporte-rodoviario",
      title: "Atendimento em Rodovias",
      subtitle: "Acessos e anéis viários da RMC",
      description: "Resgate em acostamentos seguros e saídas de rodovias monitoradas na região metropolitana de Campinas com sinalização preventiva.",
      whatsappMessage: "Olá! Estou parado no acostamento/rodovia [indicar rodovia e KM]. Preciso de guincho/socorro.",
    },
  ] as ServiceItem[],

  // Cobertura Geográfica
  coverage: {
    baseCity: "Barão Geraldo, Campinas - SP",
    districtsCampinas: [
      "Barão Geraldo (Base Local)",
      "Centro de Campinas",
      "Cambuí & Taquaral",
      "Mansões Santo Antônio",
      "Sousas & Joaquim Egídio",
      "Jardim Chapadão & Castelo",
      "Aparecidinha & Amarais",
      "Região do Ouro Verde & Campo Grande",
    ],
    neighboringCities: [
      "Paulínia",
      "Sumaré",
      "Hortolândia",
      "Valinhos",
      "Vinhedo",
      "Jaguariúna",
      "Indaiatuba (acessos)",
      "Monte Mor (consultar)",
    ],
    mainHighways: [
      "Rod. Dom Pedro I (SP-065)",
      "Rod. Prof. Zeferino Vaz / Tapera Grande (SP-332)",
      "Rod. Anhanguera (SP-330)",
      "Rod. dos Bandeirantes (SP-348)",
      "Rod. Gov. Adhemar Pereira de Barros / Campinas-Mogi (SP-340)",
      "Rod. Santos Dumont (SP-075)",
    ],
    notice: "A disponibilidade, tempo estimado de deslocamento e taxas variam de acordo com o tráfego, clima e distância da base em Barão Geraldo. Confirme sempre no contato inicial.",
  },

  // Transparência e Diretrizes de Atendimento
  trustPillars: [
    {
      title: "Transparência de Orçamento",
      description: "Valores e condições informados antes do envio da viatura. Sem cobranças surpresa ao final do serviço.",
    },
    {
      title: "Base Local em Barão Geraldo",
      description: "Localização estratégica facilitando acesso à Unicamp, Amarais, Tapera Grande e anel rodoviário de Campinas.",
    },
    {
      title: "Equipamentos Adequados",
      description: "Plataformas com cintas de amarração reforçadas e ferramentas de diagnóstico para preservação do seu automóvel.",
    },
    {
      title: "Atendimento Humanizado",
      description: "Comunicação direta com quem entende de veículos, orientando motoristas em momentos de estresse na via.",
    },
  ],

  // Como funciona
  steps: [
    {
      step: "01",
      title: "Envie sua localização",
      description: "Clique no WhatsApp ou ligue informando onde você está parado e qual o modelo do seu carro.",
    },
    {
      step: "02",
      title: "Confirmação e valores",
      description: "Nossa equipe verifica a viabilidade de atendimento, tempo estimado e informa o valor do serviço com clareza.",
    },
    {
      step: "03",
      title: "Socorro ou reboque",
      description: "Com a sua aprovação, nossa viatura é deslocada até você para efetuar o socorro ou transporte com segurança.",
    },
  ],

  // Disclaimer Legal e Técnico
  legalDisclaimer: "Nota de conformidade: A Libra Auto Socorro atua como prestadora de serviços de auxílio veicular e transporte. O atendimento está condicionado à disponibilidade operacional de frota e equipe no momento da solicitação. Não prometemos tempo fixo de chegada sem prévia verificação de trânsito e condições climáticas. Para emergências médicas ou acidentes com vítimas, acione sempre o Corpo de Bombeiros (193) ou Samu (192).",
};
