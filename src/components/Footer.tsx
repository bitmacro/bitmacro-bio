'use client';

import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-12 pb-8 text-center">
      <p className="text-xs text-zinc-600">
        © {new Date().getFullYear()} {SITE_CONFIG.name}
      </p>
    </footer>
  );
}
