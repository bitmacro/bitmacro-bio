import { EcosystemCategory, RefParam } from '@/types';

export function getRefParam(ref: string | undefined): RefParam {
  if (ref === "money" || ref === "dev" || ref === "media") {
    return ref;
  }
  return null;
}

export function sortByRef(categories: EcosystemCategory[], ref: RefParam): EcosystemCategory[] {
  if (!ref) return categories;
  
  const priorityMap: Record<string, string> = {
    'money': 'money',
    'dev': 'builder',
    'media': 'media'
  };
  
  const priorityId = priorityMap[ref];
  if (!priorityId) return categories;
  
  return [...categories].sort((a, b) => {
    if (a.id === priorityId) return -1;
    if (b.id === priorityId) return 1;
    return 0;
  });
}

export function appendUtmParams(url: string, ref: RefParam): string {
  if (!ref) return url;
  
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('utm_source', 'bio');
    urlObj.searchParams.set('utm_medium', 'link');
    urlObj.searchParams.set('utm_campaign', ref);
    
    return urlObj.toString();
  } catch {
    return url;
  }
}
