// src/app/page.tsx

import Link from 'next/link';
import { getSiteInfos, getProchainesDates } from '../data';
import { EvenementAgenda } from '../types';

export default async function HomePage() {
  const SITE_INFOS = await getSiteInfos();
  const PROCHAINES_DATES = await getProchainesDates();

  // Utilisation sécurisée du slogan ou de la description longue
  const descriptionAffichee = 
    SITE_INFOS.slogan || 
    SITE_INFOS.descriptionLongue || 
    "Bienvenue sur notre site !";

  // On récupère uniquement les 3 prochains événements pour la page d'accueil
  const apercuDates = PROCHAINES_DATES.slice(0, 3);

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-950 text-amber-50 py-20 px-6 text-center border-b-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight mb-4">
            {SITE_INFOS.nom}
          </h1>
          <p className="text-xl md:text-2xl font-light text-amber-200 max-w-2xl mx-auto mb-8">
            {descriptionAffichee}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/agenda"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl transition shadow-md"
            >
              Voir l'agenda
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-transparent hover:bg-red-900 text-amber-100 font-semibold rounded-xl border border-amber-400/30 transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Presentation Aperçu */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100 text-center">
          <h2 className="text-3xl font-serif font-bold text-red-900 mb-4">
            {SITE_INFOS.presentationTitre || "Qui sommes-nous ?"}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded"></div>
          <p className="text-stone-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6 line-clamp-4 whitespace-pre-line">
            {SITE_INFOS.presentationTexte || SITE_INFOS.descriptionLongue}
          </p>
          <Link
            href="/presentation"
            className="text-amber-600 hover:text-amber-700 font-bold text-sm uppercase tracking-wider inline-block"
          >
            En savoir plus sur le groupe →
          </Link>
        </div>
      </section>

      {/* Aperçu Prochaines Dates */}
      {apercuDates.length > 0 && (
        <section className="max-w-4xl mx-auto pb-16 px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800">Prochains Bal / Concerts</h2>
              <div className="w-12 h-1 bg-amber-500 rounded mt-2"></div>
            </div>
            <Link href="/agenda" className="text-amber-600 hover:underline text-sm font-semibold hidden sm:inline-block">
              Voir tout l'agenda →
            </Link>
          </div>

          <div className="space-y-4">
            {apercuDates.map((evt: EvenementAgenda) => (
              <div
                key={evt.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{evt.date}</span>
                  <h3 className="text-xl font-bold font-serif text-stone-800">{evt.title}</h3>
                  {evt.location && <p className="text-stone-500 text-sm">📍 {evt.location}</p>}
                </div>
                <Link
                  href="/agenda"
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-medium rounded-xl text-center self-start sm:self-center transition"
                >
                  Détails
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/agenda" className="text-amber-600 hover:underline font-semibold text-sm">
              Voir tout l'agenda →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
