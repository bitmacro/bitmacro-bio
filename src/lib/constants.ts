import { EcosystemCategory } from '@/types';

export const ECOSYSTEM_LINKS: EcosystemCategory[] = [
  {
    id: "money",
    title: "💸 Investidor",
    subtitle: "PARA INVESTIDORES",
    items: [
      { 
        id: "app_bitmacro",
        label: "Bitmacro App", 
        url: "https://app.bitmacro.io", 
        description: "Gestão de Carteiras Bitcoin",
        icon: "🛠️",
        highlight: true
      },
      { 
        id: "finance_bitmacro",
        label: "Bitmacro Finance", 
        url: "https://finance.bitmacro.io", 
        description: "SaaS de Fluxo de Caixa",
        icon: "💰",
        highlight: false
      },
    ]
  },
  {
    id: "builder",
    title: "👨‍💻 Builder",
    subtitle: "PARA ENGENHEIROS",
    items: [
      {
        id: "hub_bitmacro",
        label: "BitMacro Hub",
        url: "https://bitmacro.io",
        description: "Centro Gravitacional do Ecossistema",
        icon: "🏠",
        highlight: true
      },
      {
        id: "flow_education",
        label: "Bitflow Education",
        url: "https://flow.bitmacro.io",
        description: "Curso: Do Zero ao SaaS com IA",
        icon: "🎓",
        highlight: true
      },
      {
        id: "consultoria_cto",
        label: "Consultoria CTO",
        url: "https://bitmacro.io/consultoria",
        description: "CTO as a Service",
        icon: "💼",
        highlight: false
      },
      {
        id: "pay_bitmacro",
        label: "BitMacro Pay",
        url: "https://pay.bitmacro.io",
        description: "Lightning Service Provider",
        icon: "💳",
        highlight: false
      },
      {
        id: "infra_relay",
        label: "Lightning & Nostr",
        url: "https://relay.bitmacro.io",
        description: "Nostr Relay & Lightning Node",
        icon: "⚡",
        highlight: false
      },
      {
        id: "status_bitmacro",
        label: "BitMacro Status",
        url: "https://status.bitmacro.io",
        description: "Monitoramento de Infraestrutura",
        icon: "📊",
        highlight: false
      },
    ]
  },
  {
    id: "media",
    title: "📺 Mídia",
    subtitle: "CONTEÚDO GRATUITO",
    items: [
      { 
        id: "yt_dobitaomacro",
        label: "YouTube @DoBitAoMacro", 
        url: "https://youtube.com/@DoBitAoMacro", 
        description: "Canal para Investidores",
        icon: "📈",
        highlight: false
      },
      { 
        id: "yt_bitmacrodev",
        label: "YouTube @BitMacroDev", 
        url: "https://youtube.com/@BitMacroDev", 
        description: "Canal para Developers",
        icon: "💻",
        highlight: false
      },
    ]
  }
];

export const SITE_CONFIG = {
  name: "Bitmacro",
  tagline: "Bitcoin. Lightning. Business.",
  location: "🇵🇹 Portugal",
  avatar: "/bitmacro.png",
};

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Substituir
export const CLARITY_PROJECT_ID = "XXXXXXXXXX"; // Substituir
