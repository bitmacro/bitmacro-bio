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

  if (link.highlight) {
    // Highlighted links with gradient border and glow
    return (
      <a
        href={link.url}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden"
      >
        {/* Gradient Border Container */}
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-[1px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]">

          {/* Inner Content */}
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-950/80 to-blue-900/60 backdrop-blur-xl overflow-hidden">

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-bold text-white mb-0.5 truncate group-hover:text-blue-100 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm text-blue-200/70 truncate">
                    {link.description}
                  </div>
                </div>
              </div>

              {/* Arrow Icon */}
              <svg
                className="w-5 h-5 text-blue-300/60 flex-shrink-0 ml-3 transform group-hover:translate-x-1 group-hover:text-blue-200 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    );
  }

  // Regular links with glassmorphism
  return (
    <a
      href={link.url}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full"
    >
      {/* Glass Card */}
      <div className="relative rounded-2xl glass border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/5">

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-2xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-base font-semibold text-white mb-0.5 truncate group-hover:text-blue-100 transition-colors">
                {link.label}
              </div>
              <div className="text-sm text-gray-400/80 truncate group-hover:text-gray-300/80 transition-colors">
                {link.description}
              </div>
            </div>
          </div>

          {/* Arrow Icon */}
          <svg
            className="w-4 h-4 text-gray-600 flex-shrink-0 ml-3 transform group-hover:translate-x-1 group-hover:text-gray-400 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Subtle Shimmer on Hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </a>
  );
}
