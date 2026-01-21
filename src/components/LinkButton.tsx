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
        block w-full px-6 py-4 rounded-lg
        border transition-all duration-200
        hover:scale-[1.02]
        ${link.highlight
          ? 'bg-blue-600 border-blue-500 hover:bg-blue-700'
          : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70 hover:border-gray-700'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">{link.icon}</span>
        <div className="flex-1 min-w-0">
          <div className={`font-semibold mb-0.5 truncate ${link.highlight ? 'text-white' : 'text-gray-100'}`}>
            {link.label}
          </div>
          <div className={`text-sm truncate ${link.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
            {link.description}
          </div>
        </div>
        <svg
          className={`w-5 h-5 flex-shrink-0 ${link.highlight ? 'text-blue-200' : 'text-gray-600'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
