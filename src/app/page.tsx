// src/app/page.tsx
import Link from 'next/link';
import { SITE_INFOS, PROCHAINES_DATES } from '../data';

export default function HomePage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">
      
      {/* 1. SECTION HERO AVEC IMAGE DE FOND CONFIGURABLE */}
      <section 
        className="relative py-32 text-center px-4 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[60vh]"
        style={{ backgroundImage: `url('${SITE_INFOS.design.heroBackgroundImage}')` }}
      >
        {/* Filtre sombre pour garantir le contraste du texte */}
        <div className={`absolute inset-0 ${SITE_INFOS.design.overlayOpacity}`}></div>
        
        {/* Contenu textuel */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-amber-400 mb-4 drop-shadow-lg tracking-wide">
            {SITE_INFOS.nom}
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 max-w-2xl mx-auto font-light italic drop-shadow">
            {SITE_INFOS.slogan}
          </p>
          <div className="mt-10">
            <Link 
              href="#agenda" 
              className="bg-amber-500 text-amber-950 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-amber-400 transition-all hover:scale-105 inline-block"
            >
              Voir l'agenda des bals
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION PRÉSENTATION EXPRESS */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-900 mb-6">
          Qui sommes-nous ?
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded"></div>
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto font-normal">
          {SITE_INFOS.descriptionLongue}
        </p>
      </section>

      {/* 3. SECTION AGENDA (DYNAMIQUE AVEC JUSQU'À 3 BOUTONS) */}
      <section id="agenda" className="bg-amber-50/60 border-t border-b border-amber-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-red-900 mb-2">
            Prochaines dates
          </h2>
          <p className="text-center text-stone-600 italic mb-12">Venez vibrer sur le parquet avec nous</p>
          
          <div className="space-y-6">
            {PROCHAINES_DATES.map((evt) => (
              <div 
                key={evt.id} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-stone-100 flex flex-col lg:flex-row justify-between items-center gap-6 hover:shadow-lg transition-shadow"
              >
                {/* Infos Événement */}
                <div className="text-center lg:text-left flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    {evt.date}
                  </span>
                  <h3 className="text-2xl font-bold text-stone-800 font-serif mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-stone-600 flex items-center justify-center lg:justify-start gap-1">
                    📍 {evt.location}
                  </p>
                </div>
                
                {/* Zone Boutons (Filtre automatique des liens valides, max 3) */}
                <div className="flex flex-wrap justify-center items-center gap-3 w-full lg:w-auto">
                  {evt.boutons && evt.boutons
                    .filter(btn => btn.url && btn.url !== "#" && btn.url.trim() !== "") // Sécurité anti-liens morts
                    .slice(0, 3) // Limite stricte à 3 boutons
                    .map((btn, index) => (
                      <a
                        key={index}
                        href={btn.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm text-center min-w-[130px] ${
                          index === 0 
                            ? "bg-red-900 text-white hover:bg-red-800" // Premier bouton mis en avant
                            : "bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200" // Les autres plus discrets
                        }`}
                      >
                        {btn.label}
                      </a>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION CONTACT & RÉSERVATIONS (PROPRE ET FIABLE SUR VERCEL) */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-red-900 mb-4">
          Contact & Réservations
        </h2>
        <p className="text-stone-600 max-w-md mx-auto mb-10">
          Vous organisez un festival, un fest-noz ou un événement privé ? Contactez-nous directement par email.
        </p>
        
        {/* Bouton Email Direct */}
        <div className="mb-12">
          <a 
            href={`mailto:${SITE_INFOS.emailContact}`}
            className="bg-red-950 text-stone-100 px-8 py-4 rounded-xl font-bold shadow-lg text-xl hover:bg-red-900 transition-all inline-block border border-red-900"
          >
            ✉️ {SITE_INFOS.emailContact}
          </a>
          {SITE_INFOS.telephone && (
            <p className="text-stone-600 mt-4 text-sm font-medium">
              Téléphone : {SITE_INFOS.telephone}
            </p>
          )}
        </div>

        {/* Réseaux Sociaux Dynamiques */}
        <div className="border-t border-stone-200 pt-8">
          <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-4">Suivez le collectif</p>
          <div className="flex justify-center items-center gap-6">
            {SITE_INFOS.reseauxSociaux.map((res, idx) => (
              <a 
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-amber-600 font-medium transition-colors"
              >
                <span className="text-xl">{res.icone}</span>
                <span>{res.nom}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
