// =============================================================================
// LIBRA AUTO SOCORRO — CONFIGURAÇÃO CENTRAL
// Edite este arquivo para atualizar textos, contatos e serviços em toda a página.
// =============================================================================

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface SegmentCard {
  id: string;
  title: string;
  description: string;
  highlight: boolean;
  whatsappMessage: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export const LIBRA_CONFIG = {
  // ── Dados de Contato ──────────────────────────────────────────────────────
  companyName: "Libra Auto Socorro",
  shortName: "Libra",
  phoneRaw: "5519996759605",
  phoneFormatted: "(19) 99675-9605",
  phoneTelLink: "tel:+5519996759605",
  whatsappBaseUrl: "https://wa.me/5519996759605",

  // ── Localização ───────────────────────────────────────────────────────────
  baseLocation: "Campinas — SP",
  baseAddress: "Campinas/SP",
  regionServed: "Campinas e região",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seoTitle: "Libra Auto Socorro | Mecânica, Elétrica e Borracharia Volante",
  seoDescription:
    "Auto socorro mecânico e elétrico para caminhões, ônibus, vans e automóveis. Diagnóstico, reparos emergenciais e borracharia no local da pane.",

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroTitle: "AUTO SOCORRO MECÂNICO E ELÉTRICO NO LOCAL DA PANE.",
  heroSubtitle:
    "Especialistas no atendimento de veículos médios e pesados, com assistência também para veículos leves.",
  heroDescription:
    "Seu caminhão, ônibus, van ou automóvel apresentou um problema? A Libra Auto Socorro oferece assistência volante para diagnosticar e solucionar panes mecânicas, elétricas e problemas com pneus diretamente onde o veículo está, sempre que o reparo puder ser realizado com segurança. Nosso objetivo é ajudar você a retomar suas atividades, evitando remoções desnecessárias quando o problema pode ser resolvido no próprio local.",
  heroDisclaimer:
    "A realização dos serviços depende de avaliação técnica, condições de segurança e disponibilidade de profissionais.",

  // ── Destaques do Hero ─────────────────────────────────────────────────────
  heroHighlights: [
    "Atendimento no local da pane",
    "Foco em veículos médios e pesados",
    "Suporte para automóveis e utilitários",
    "Rede de parceiros para serviços complementares",
  ],

  // ── 10 Serviços ───────────────────────────────────────────────────────────
  services: [
    {
      id: "carga-troca-bateria",
      icon: "Battery",
      title: "Carga e Troca de Bateria",
      subtitle: "Seu veículo ficou sem bateria? Podemos ajudar.",
      description:
        "Diagnóstico de bateria descarregada, auxílio à partida, verificação de terminais e conexões, carga emergencial e substituição de bateria conforme disponibilidade. Atendimento a sistemas de 12V e 24V, presentes em automóveis, caminhões e ônibus.",
      imageAlt: "Técnico verificando bateria de caminhão com multímetro",
      whatsappMessage:
        "Olá! Preciso de assistência para bateria do meu veículo. Veículo: [modelo]. Local: [onde está]. Podem verificar disponibilidade?",
    },
    {
      id: "pane-eletrica",
      icon: "Zap",
      title: "Pane Elétrica Rápida",
      subtitle: "Falhas elétricas podem interromper sua viagem.",
      description:
        "Diagnóstico e reparos emergenciais em fusíveis, relés, conexões, chicotes elétricos e componentes de alimentação. Atendimento a falhas de iluminação, painel, travas, vidros elétricos e sistemas relacionados, conforme viabilidade técnica.",
      imageAlt: "Eletricista automotivo trabalhando com scanner e multímetro",
      whatsappMessage:
        "Olá! Estou com pane elétrica no meu veículo em [local]. Veículo: [modelo]. Podem verificar disponibilidade de atendimento?",
    },
    {
      id: "motor-arranque",
      icon: "RotateCcw",
      title: "Motor de Arranque e Falhas na Partida",
      subtitle: "O motor não dá partida? Vamos identificar a causa.",
      description:
        "Verificação do motor de arranque, automático, terminais, cabos e conexões elétricas. Quando possível, são realizadas intervenções emergenciais para restabelecer o funcionamento do sistema de partida.",
      imageAlt: "Mecânico inspecionando motor de arranque de veículo pesado",
      whatsappMessage:
        "Olá! Meu veículo não dá partida e preciso de assistência em [local]. Veículo: [modelo]. Podem ajudar?",
    },
    {
      id: "alternador-carregamento",
      icon: "Gauge",
      title: "Alternador e Sistema de Carregamento",
      subtitle: "Problemas no alternador? Conte com apoio técnico.",
      description:
        "Testes de tensão e carregamento, avaliação do alternador, regulador de voltagem, escovas e conexões. Quando tecnicamente viável, poderão ser realizados ajustes ou substituições de componentes no próprio local.",
      imageAlt: "Mecânico examinando alternador de motor diesel",
      whatsappMessage:
        "Olá! Suspeito de problema no alternador do meu veículo. Estou em [local]. Veículo: [modelo]. Podem verificar?",
    },
    {
      id: "combustivel-diesel",
      icon: "Fuel",
      title: "Pane de Combustível e Sistema Diesel",
      subtitle: "Falhas na alimentação de combustível?",
      description:
        "Diagnóstico de panes relacionadas à falta ou alimentação inadequada de combustível, filtros obstruídos e entrada de ar no sistema diesel. Conforme avaliação, poderão ser realizados procedimentos de sangria, substituição de filtros e apoio emergencial em situações de pane seca.",
      imageAlt:
        "Profissional verificando filtros e sistema de alimentação diesel de caminhão",
      whatsappMessage:
        "Olá! Estou com problema no sistema de combustível/diesel do meu veículo em [local]. Veículo: [modelo]. Podem atender?",
    },
    {
      id: "correia-auxiliar",
      icon: "Settings",
      title: "Correia Auxiliar e Correia do Alternador",
      subtitle: "Uma correia danificada pode parar seu veículo.",
      description:
        "Diagnóstico de problemas nas correias auxiliares, tensionadores e componentes relacionados. Quando houver peça compatível e condições técnicas adequadas, a substituição poderá ser realizada no local da pane.",
      imageAlt: "Mecânico trabalhando no sistema de correias de caminhão",
      whatsappMessage:
        "Olá! Acredito que a correia do meu veículo rompeu ou está com problema. Estou em [local]. Veículo: [modelo]. Podem verificar?",
    },
    {
      id: "arrefecimento",
      icon: "Thermometer",
      title: "Sistema de Arrefecimento",
      subtitle: "Motor superaquecendo? Evite danos maiores.",
      description:
        "Diagnóstico de falhas no sistema de arrefecimento, vazamentos, mangueiras, conexões, abraçadeiras e componentes associados. Quando seguro e tecnicamente viável, poderão ser realizados reparos ou substituições emergenciais. Não dirija com superaquecimento ativo.",
      imageAlt: "Técnico avaliando sistema de arrefecimento de caminhão",
      whatsappMessage:
        "Olá! Meu veículo está superaquecendo e preciso de assistência emergencial em [local]. Veículo: [modelo]. Podem atender?",
    },
    {
      id: "freios-roda",
      icon: "CircleDot",
      title: "Freios e Componentes de Roda",
      subtitle: "Problemas no sistema de freios exigem atenção.",
      description:
        "Avaliação emergencial de falhas no sistema de freios, componentes de roda, regulagens e condições de funcionamento. Intervenções poderão ser realizadas quando houver condições técnicas e de segurança. Se a falha comprometer a segurança, o veículo não deve circular até o reparo.",
      imageAlt: "Mecânico inspecionando freios de veículo pesado",
      whatsappMessage:
        "Olá! Estou com problema no sistema de freios do meu veículo em [local]. Veículo: [modelo]. Precisando de avaliação urgente.",
    },
    {
      id: "borracharia-volante",
      icon: "Circle",
      title: "Borracharia Volante e Troca de Pneus",
      subtitle: "Pneu furado? Atendimento onde você estiver.",
      description:
        "Troca de rodas e pneus, avaliação de danos e serviços de borracharia emergencial compatíveis com os equipamentos disponíveis. Atendimento para veículos leves, médios e pesados, inclusive aplicações comerciais, conforme viabilidade técnica.",
      imageAlt:
        "Profissional utilizando equipamentos para troca de roda de caminhão",
      whatsappMessage:
        "Olá! Estou com pneu furado/problema na roda em [local]. Veículo: [modelo]. Podem atender?",
    },
    {
      id: "ignicao-travas",
      icon: "Key",
      title: "Chaves, Ignição e Travas",
      subtitle: "Problemas com chave, ignição ou travamento?",
      description:
        "Diagnóstico de falhas em componentes de ignição, comutadores, conexões elétricas e sistemas de travamento. Possibilidade de atendimento emergencial conforme o tipo de veículo, identificação do responsável e disponibilidade técnica.",
      imageAlt: "Técnico automotivo verificando sistema de ignição",
      whatsappMessage:
        "Olá! Estou com problema na ignição ou sistema de travas do meu veículo em [local]. Veículo: [modelo]. Podem verificar?",
    },
  ] as ServiceItem[],

  // ── Veículos Atendidos (5 segmentos) ──────────────────────────────────────
  segments: [
    {
      id: "caminhoes",
      title: "Caminhões",
      description:
        "Atendimento emergencial voltado ao transporte de cargas. Foco em diagnósticos e reparos mecânicos, elétricos e de borracharia no local.",
      highlight: true,
      whatsappMessage:
        "Olá! Preciso de assistência para meu caminhão em [local]. Podem verificar disponibilidade?",
    },
    {
      id: "onibus",
      title: "Ônibus",
      description:
        "Assistência compatível com as necessidades de veículos de transporte de passageiros, com atenção às exigências técnicas específicas.",
      highlight: true,
      whatsappMessage:
        "Olá! Preciso de assistência para meu ônibus em [local]. Podem verificar disponibilidade?",
    },
    {
      id: "vans",
      title: "Vans",
      description:
        "Suporte para vans comerciais, de carga e transporte de passageiros. Diagnóstico e reparos emergenciais no local.",
      highlight: false,
      whatsappMessage:
        "Olá! Preciso de assistência para minha van em [local]. Podem verificar disponibilidade?",
    },
    {
      id: "utilitarios",
      title: "Utilitários",
      description:
        "Diagnóstico e reparos emergenciais para veículos comerciais leves em atividade operacional.",
      highlight: false,
      whatsappMessage:
        "Olá! Preciso de assistência para meu utilitário em [local]. Podem verificar disponibilidade?",
    },
    {
      id: "automoveis",
      title: "Automóveis",
      description:
        "Assistência emergencial para carros de passeio com mecânica, elétrica e borracharia volante.",
      highlight: false,
      whatsappMessage:
        "Olá! Preciso de assistência para meu automóvel em [local]. Podem verificar disponibilidade?",
    },
  ] as SegmentCard[],

  // ── Diferenciais / Trust ──────────────────────────────────────────────────
  trustPillars: [
    {
      title: "Foco em Veículos Médios e Pesados",
      description:
        "Atendimento voltado às necessidades de caminhões, ônibus, vans e veículos comerciais.",
      icon: "Truck",
    },
    {
      title: "Assistência no Local",
      description:
        "Diagnóstico e reparos emergenciais diretamente no local da pane, sempre que tecnicamente possível e seguro.",
      icon: "MapPin",
    },
    {
      title: "Suporte para Veículos Leves",
      description:
        "Assistência mecânica, elétrica e de borracharia para automóveis e utilitários leves.",
      icon: "Car",
    },
    {
      title: "Rede de Parceiros",
      description:
        "Encaminhamento para serviços de oficina e remoção quando a situação exigir recursos adicionais.",
      icon: "Users",
    },
  ] as TrustPillar[],

  // ── Como Funciona (4 etapas) ──────────────────────────────────────────────
  steps: [
    {
      step: "01",
      title: "Você Chama",
      description:
        "Informe sua localização, tipo de veículo e o problema apresentado pelo WhatsApp ou por telefone.",
    },
    {
      step: "02",
      title: "A Libra Avalia",
      description:
        "Nossa equipe analisa as informações e orienta sobre a assistência mais adequada para o seu caso.",
    },
    {
      step: "03",
      title: "Atendimento no Local",
      description:
        "Quando possível, o diagnóstico e o reparo são realizados onde o veículo está, sem necessidade de remoção.",
    },
    {
      step: "04",
      title: "Suporte Complementar",
      description:
        "Quando necessário, a Libra poderá auxiliar no contato com parceiros para oficina ou remoção.",
    },
  ] as Step[],

  // ── Sobre a Empresa ───────────────────────────────────────────────────────
  aboutTitle: "LIBRA AUTO SOCORRO. ASSISTÊNCIA PARA QUEM PRECISA CONTINUAR EM MOVIMENTO.",
  aboutText: [
    "A Libra Auto Socorro oferece assistência emergencial para veículos, com atenção especial a motoristas e profissionais que dependem do transporte em suas atividades.",
    "Nossa proposta é levar o atendimento técnico até o local da ocorrência, realizando diagnósticos e reparos mecânicos, elétricos e de borracharia sempre que as condições permitirem.",
    "Atendemos prioritariamente veículos médios e pesados, além de automóveis e utilitários leves. Quando o problema exige equipamentos específicos, remoção ou serviços de oficina, contamos com parceiros que podem complementar o atendimento.",
  ],

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faqItems: [
    {
      question: "A Libra atende caminhões e ônibus?",
      answer:
        "Sim. Veículos médios e pesados estão entre as principais prioridades de atendimento da Libra Auto Socorro.",
    },
    {
      question: "A Libra também atende carros de passeio?",
      answer:
        "Sim. Também oferecemos assistência emergencial para automóveis e utilitários leves.",
    },
    {
      question: "O reparo pode ser realizado no local?",
      answer:
        "Sempre que tecnicamente possível e seguro. Algumas situações exigem equipamentos específicos, peças ou estrutura de oficina.",
    },
    {
      question: "A Libra oferece guincho?",
      answer:
        "A Libra não realiza guincho como serviço próprio. Quando necessário, poderá auxiliar no contato com parceiros especializados.",
    },
    {
      question: "Quais informações devo enviar para solicitar atendimento?",
      answer:
        "Informe o modelo do veículo, sua localização e os sintomas apresentados. Fotos ou vídeos também podem ajudar na avaliação inicial.",
    },
    {
      question: "Todos os problemas podem ser resolvidos na estrada?",
      answer:
        "Não. Algumas panes exigem serviços especializados ou recursos disponíveis somente em oficina. A equipe orientará sobre a melhor solução em cada caso.",
    },
  ],

  // ── CTA Final ─────────────────────────────────────────────────────────────
  ctaTitle: "SEU VEÍCULO APRESENTOU UMA PANE? FALE COM A LIBRA.",
  ctaText:
    "Seja no caminhão, ônibus, van ou automóvel, informe sua necessidade e receba orientação sobre as possibilidades de atendimento.",
  ctaButtonText: "SOLICITAR AUTO SOCORRO PELO WHATSAPP",
  ctaWhatsappMessage:
    "Olá! Preciso de auto socorro para meu veículo. Estou em [local]. Veículo: [modelo/tipo]. Podem verificar disponibilidade de atendimento?",

  // ── Disclaimer Legal ──────────────────────────────────────────────────────
  legalDisclaimer:
    "A Libra Auto Socorro atua como prestadora de serviços de assistência emergencial veicular. A realização dos serviços está sujeita à avaliação técnica, condições de segurança e disponibilidade de profissionais, ferramentas e peças. Para emergências médicas ou acidentes com vítimas, acione o Corpo de Bombeiros (193) ou Samu (192).",

  // Mantido para compatibilidade com generateGoogleSitesEmbed
  segmentations: [] as any[],
  coverage: {
    districtsCampinas: [] as string[],
    neighboringCities: [] as string[],
    mainHighways: [] as string[],
    notice: "",
  },
};
