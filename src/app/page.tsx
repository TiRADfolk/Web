// src/app/page.tsx

import Link from 'next/link';
import { getSiteInfos } from '../data';

export default async function HomePage() {
  const siteInfos = await getSiteInfos();

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-red-950 text-amber-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-serif font-black mb-4">{siteInfos.nom}</h1>
        <p className="text-xl text-amber-200 max-w-2xl mx-auto">{siteInfos.slogan}</p>
      </section>

      <nav className="max-w-4xl mx-auto my-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 text-center">
        <Link href="/agenda" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold">📅 Agenda</Link>
        <Link href="/presentation" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold">📜 Présentation</Link>
        <Link href="/activites" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold">
  🎨 Activités
</Link>
        <Link href="/media" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold">🎶 Médias</Link>
        <Link href="/contact" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold">✉️ Contact</Link>
      </nav>
    </main>
  );
}
