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

  const cardClass = link.highlight ? 'link-card link-card-highlight' : 'link-card';

  return (
    <a
      href={link.url}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      <div className="link-content">
        <div className="link-icon">
          {link.icon.startsWith('/') ? (
            <img 
              src={link.icon} 
              alt={link.label} 
              style={{ 
                width: link.id === 'app_bitmacro' ? '48px' : '36px', 
                height: link.id === 'app_bitmacro' ? '48px' : '36px', 
                objectFit: 'contain' 
              }} 
            />
          ) : (
            link.icon
          )}
        </div>
        <div className="link-text">
          <div className="link-title">{link.label}</div>
          <div className="link-description">{link.description}</div>
        </div>
      </div>
    </a>
  );
}
