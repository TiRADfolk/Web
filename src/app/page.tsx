// src/app/page.tsx

import Link from 'next/link';
import { getSiteInfos, getNews } from '../data';
import { NewsItem } from '../types';

export default async function HomePage() {
  const siteInfos = await getSiteInfos();
  const allNews = await getNews();
  
  // Filtrer les news à afficher sur l'accueil si renseigné
  const newsAccueil = allNews.filter((n) => n.titre);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-red-950 text-amber-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-serif font-black mb-4">{siteInfos.nom}</h1>
        <p className="text-xl text-amber-200 max-w-2xl mx-auto">{siteInfos.slogan}</p>
      </section>

      {/* Navigation Principale Complète */}
      <nav className="max-w-5xl mx-auto my-12 grid grid-cols-2 md:grid-cols-5 gap-4 px-6 text-center">
        <Link href="/agenda" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold transition-all">
          📅 Agenda
        </Link>
        <Link href="/presentation" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold transition-all">
          📜 Présentation
        </Link>
        <Link href="/activites" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold transition-all">
          🎨 Activités
        </Link>
        <Link href="/media" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold transition-all">
          🎶 Médias
        </Link>
        <Link href="/contact" className="p-4 bg-white rounded-xl shadow-sm border hover:border-amber-500 font-bold transition-all">
          ✉️ Contact
        </Link>
      </nav>

      {/* Section Dernières Actualités (News) */}
      {newsAccueil.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-serif font-bold text-red-950 mb-6 text-center">Dernières Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsAccueil.map((item: NewsItem) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
                <div>
                  {item.image && (
                    <img src={item.image} alt={item.titre} className="w-full h-40 object-cover rounded-xl mb-4" />
                  )}
                  <h3 className="font-bold font-serif text-xl text-stone-800 mb-2">{item.titre}</h3>
                  {item.contenu && <p className="text-stone-600 text-sm mb-4">{item.contenu}</p>}
                </div>
                {item.lien && (
                  <a
                    href={item.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:underline font-bold text-sm inline-block mt-2"
                  >
                    En savoir plus →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
