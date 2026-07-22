// src/app/activites/page.tsx

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getActivites } from '../../data';
import { Activite } from '../../types';

export default async function ActivitesPage() {
  const activites = (await getActivites()) || [];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6 text-sm font-medium">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">Nos Activités</h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        {activites.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500">
            Aucune activité renseignée pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activites.map((act: Activite) => (
              <div
                key={act.id}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col"
              >
                {act.image && (
                  <img
                    src={act.image}
                    alt={act.titre}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-stone-800 mb-2">{act.titre}</h2>
                    <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                      {act.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
