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
      style={{
        display: 'block',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: link.highlight ? '#f0f9ff' : 'white',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = link.highlight ? '#e0f2fe' : '#f9fafb';
        e.currentTarget.style.borderColor = '#999';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = link.highlight ? '#f0f9ff' : 'white';
        e.currentTarget.style.borderColor = '#ddd';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>{link.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '600', marginBottom: '4px' }}>
            {link.label}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {link.description}
          </div>
        </div>
      </div>
    </a>
  );
}
