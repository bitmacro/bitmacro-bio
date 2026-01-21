'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-gray-600 px-4">
      <section className="flex h-14 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          {SITE_CONFIG.name}
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <a href="#about" className="text-gray-300 hover:text-white">
            Sobre
          </a>
          <a href="#money" className="text-gray-300 hover:text-white">
            Investidores
          </a>
          <a href="#builder" className="text-gray-300 hover:text-white">
            Developers
          </a>
          <a href="#media" className="text-gray-300 hover:text-white">
            Mídia
          </a>
        </nav>
        <button
          onClick={toggleMenu}
          className="flex text-gray-300 hover:text-white md:hidden"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {openMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </section>
      {openMenu && (
        <nav className="flex flex-col space-y-2 pb-4 md:hidden">
          <a href="#about" className="text-gray-300 hover:text-white">
            Sobre
          </a>
          <a href="#money" className="text-gray-300 hover:text-white">
            Investidores
          </a>
          <a href="#builder" className="text-gray-300 hover:text-white">
            Developers
          </a>
          <a href="#media" className="text-gray-300 hover:text-white">
            Mídia
          </a>
        </nav>
      )}
    </header>
  );
}
