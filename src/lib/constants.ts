import { EcosystemCategory } from '@/types';

export const ECOSYSTEM_LINKS: EcosystemCategory[] = [
  {
    id: "money",
    title: "💸 Investidor",
    subtitle: "PARA INVESTIDORES",
    items: [
      { 
        id: "app_bitmacro",
        label: "BitMacro App", 
        url: "https://app.bitmacro.io", 
        description: "Gestão de Carteiras Crypto",
        icon: "/icons/crypto.png",
        highlight: true
      },
      { 
        id: "finance_bitmacro",
        label: "BitMacro Finance", 
        url: "https://finance.bitmacro.io", 
        description: "SaaS de Fluxo de Caixa",
        icon: "💵",
        highlight: true
      },
      {
        id: "hub_bitmacro",
        label: "BitMacro Hub",
        url: "https://bitmacro.io",
        description: "Centro Gravitacional",
        icon: "🌐",
        highlight: true
      },
    ]
  },
  {
    id: "builder",
    title: "👨‍💻 Builder",
    subtitle: "PARA ENGENHEIROS",
    items: [
      {
        id: "flow_education",
        label: "Bitflow Education",
        url: "https://flow.bitmacro.io",
        description: "Curso: Do Zero ao SaaS com IA",
        icon: "🎓",
        highlight: true
      },
      // {
      //   id: "consultoria_cto",
      //   label: "Consultoria CTO",
      //   url: "https://bitmacro.io/consultoria",
      //   description: "CTO as a Service",
      //   icon: "💼",
      //   highlight: true
      // },
      {
        id: "pay_bitmacro",
        label: "BitMacro Pay",
        url: "https://pay.bitmacro.io",
        description: "Lightning Service Provider",
        icon: "💳",
        highlight: true
      },
      {
        id: "infra_relay",
        label: "Lightning & Nostr",
        url: "https://relay.bitmacro.io",
        description: "Nostr Relay & Lightning Node",
        icon: "⚡",
        highlight: true
      },
      // {
      //   id: "status_bitmacro",
      //   label: "BitMacro Status",
      //   url: "https://status.bitmacro.io",
      //   description: "Monitoramento de Infraestrutura",
      //   icon: "🖥️",
      //   highlight: true
      // },
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
        highlight: true
      },
      { 
        id: "yt_bitmacrodev",
        label: "YouTube @BitMacroDev", 
        url: "https://youtube.com/@BitMacroDev", 
        description: "Canal para Developers",
        icon: "💻",
        highlight: true
      },
    ]
  }
];

export const SITE_CONFIG = {
  name: "BitMacro",
  tagline: "Bitcoin. Lightning. Business.",
  location: "",
  avatar: "/bitmacro.png",
};

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Substituir
export const CLARITY_PROJECT_ID = "XXXXXXXXXX"; // Substituir
