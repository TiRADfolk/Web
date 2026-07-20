// src/app/contact/page.tsx
import Link from 'next/link';
import { SITE_INFOS } from '../../data';

export default function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Lien de retour à l'accueil ajouté pour la cohérence */}
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6">
          ← Retour à l'accueil
        </Link>

        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-red-900 mb-4">
            Contact & Réservations
          </h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded"></div>
          
          <p className="text-lg text-stone-600 max-w-xl mx-auto mb-12">
            Vous souhaitez programmer le groupe **{SITE_INFOS.nom}** pour un bal ou un événement privé ? 
            Discutons ensemble de votre projet.
          </p>
          
          {/* Encadré de contact direct */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-stone-100 max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-3">
              Nous écrire par Courriel
            </p>
            <a 
              href={`mailto:${SITE_INFOS.emailContact}`}
              className="text-2xl md:text-3xl font-bold text-red-950 hover:text-amber-600 transition-colors break-all inline-block mb-6"
            >
              {SITE_INFOS.emailContact}
            </a>

            {SITE_INFOS.telephone && (
              <div className="border-t border-stone-100 pt-6 mt-2">
                <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
                  Nous contacter par téléphone
                </p>
                <p className="text-xl font-semibold text-stone-800">
                  {SITE_INFOS.telephone}
                </p>
              </div>
            )}
          </div>

          {/* Réseaux Sociaux */}
          <div className="max-w-md mx-auto">
            <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-4">
              Retrouvez-nous sur les réseaux
            </p>
            <div className="flex justify-center items-center gap-8">
              {SITE_INFOS.reseauxSociaux.map((res, idx) => (
                <a 
                  key={idx} 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-stone-600 hover:text-amber-600 font-medium transition-colors"
                >
                  <span className="text-2xl bg-stone-100 p-3 rounded-full hover:bg-amber-50 transition-colors">
                    {res.icone}
                  </span>
                  <span className="text-sm">{res.nom}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
