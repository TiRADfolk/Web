import Link from 'next/link';
import { ACTIVITES } from '../../data';

export default function ActivitesPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/" 
          className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-6 inline-block"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          Nos Activités
        </h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTIVITES.map((act) => (
            <div 
              key={act.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between"
            >
              <div>
                {act.image && (
                  <img 
                    src={act.image} 
                    alt={act.titre} 
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                )}
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-3">
                  {act.titre}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
