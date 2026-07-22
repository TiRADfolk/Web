// src/app/activites/page.tsx

import Link from 'next/link';
import { getActivites } from '../../data';
import { Activite } from '../../types';

export default async function ActivitesPage() {
  // Récupération dynamique depuis Google Sheets
  const ACTIVITES = await getActivites();

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6 text-sm font-medium">
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          Nos Activités
        </h1>

        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        {ACTIVITES.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500">
            Aucune activité répertoriée pour le moment.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {ACTIVITES.map((act: Activite) => (
              <div 
                key={act.id} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between"
              >
                <div>
                  {act.image && act.image.trim() !== "" && (
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-stone-100">
                      <img 
                        src={act.image} 
                        alt={act.titre} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-bold font-serif text-stone-800 mb-2">
                    {act.titre}
                  </h2>
                  <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
