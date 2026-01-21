import { GA_MEASUREMENT_ID } from './constants';

// Declaração global para gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackLinkClick = (linkId: string, category: string, label: string, url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'link_click', {
      event_category: category,
      event_label: label,
      link_id: linkId,
      link_url: url,
    });
  }
};

export const trackRefSource = (ref: string | null) => {
  if (typeof window !== 'undefined' && window.gtag && ref) {
    window.gtag('event', 'ref_source', {
      ref_param: ref,
    });
  }
};

