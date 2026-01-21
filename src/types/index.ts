export interface LinkItem {
  id: string;
  label: string;
  url: string;
  description: string;
  icon: string;
  highlight: boolean;
}

export interface EcosystemCategory {
  id: string;
  title: string;
  subtitle: string;
  items: LinkItem[];
}

export type RefParam = "money" | "dev" | "media" | null;
