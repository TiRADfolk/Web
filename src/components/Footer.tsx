// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 mt-12 border-t-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-stone-200 font-serif font-bold">
          T-RAD © {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Musique traditionnelle vivante & bals folks endiablés.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/presentation" className="hover:underline hover:text-stone-200 transition">
            Le Groupe
          </Link>
          <Link href="/activites" className="hover:underline hover:text-stone-200 transition">
            Activités
          </Link>
          <Link href="/agenda" className="hover:underline hover:text-stone-200 transition">
            Agenda
          </Link>
          <Link href="/media" className="hover:underline hover:text-stone-200 transition">
            Médias
          </Link>
          <Link href="/contact" className="hover:underline hover:text-stone-200 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
