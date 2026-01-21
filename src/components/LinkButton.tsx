'use client';

import { LinkItem, RefParam } from '@/types';
import { trackLinkClick } from '@/lib/analytics';
import { appendUtmParams } from '@/lib/utils';

interface LinkButtonProps {
  link: LinkItem;
  category: string;
  refParam: RefParam;
}

export default function LinkButton({ link, category, refParam }: LinkButtonProps) {
  const handleClick = () => {
    trackLinkClick(link.id, category, link.label, link.url);
    const finalUrl = appendUtmParams(link.url, refParam);
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={link.url}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block w-full py-4 px-5 rounded-xl
        text-center font-medium
        transition-all duration-200
        hover:scale-[1.02] hover:-translate-y-0.5
        ${link.highlight 
          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20' 
          : 'bg-zinc-800/50 text-white border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-600'
        }
      `}
    >
      <span className="mr-2">{link.icon}</span>
      {link.label}
    </a>
  );
}

