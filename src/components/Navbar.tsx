'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/presentation', label: 'Présentation' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/media', label: 'Médias' },
    { href: '/contact', label: 'Contact' },
      ];

  return (
    <nav className="bg-amber-900 text-stone-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-amber-400">
          T-RAD
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-amber-300 transition">
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} class="md:hidden text-amber-400 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-amber-950 px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 hover:text-amber-300">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
