// src/app/page.tsx 

import Link from 'next/link';
import { SITE_INFOS, PROCHAINES_DATES } from '../data';

export default function HomePage() {
  const aUneImageDeFond =
    SITE_INFOS.design.heroBackgroundImage &&
    SITE_INFOS.design.heroBackgroundImage.trim() !== "";

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">

      {/* HERO */}
      <section
        classNam*={`relative py-12 text-center px-4*bg-cover bg-center bg-no-repeat fl*x items-center justify-center min-*-[35vh] ${
          !aUneImageDeF*nd
            ? 'bg-gradient-to-br from-amber-900 to-stone-900'
            : ''
        }`}
        style={
          aUneImageDeFond
            ? {
                backgroundImage: `url('${SITE_INFOS.design.heroBackgroundImage}')`,
              }
            : {}
        }
      >
        {aUneImageDeFond && (
          <div
            className={`absolute inset-0 ${SITE_INFOS.design.overlayOpacity}`}
          />
        )}

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* LOGO + NOM */}
          <div className="flex *lex-col md:flex-row items-center j*stify-center gap-6 mb-6">

       *    {SITE_INFOS.logo}SITE_INFOS.no*}
              className="w-28 h-*8 md:w-32 md:h-32 object-cover rou*ded-xl shadow-*xl border-2 border-amber-400"
    *       />

            <div>
     *        <h1 className="text-4xl md*text-6xl font-serif font-extrabold*text-amber-400 tracking-wide drop-*hadow-lg">
                {SITE_INFOS.nom}
              </h1>

              <p className="text-lg md:text-xl text-stone-100 italic mt-3 drop-shadow">
                {SITE_INFOS.slogan}
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="flex *lex-wrap justify-center gap-3 mb-8*>

            <Link
             *href="/presentation"
             *className="bg-white/20 backdrop-bl*    href="/agenda"
              className="bg-white/20 backdrop-blur-sm text-white px-5sm text-white px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition"
            >
              Contact
            </Link>
          </nav>

          {/* BOUTON PRINCIPAL */}
          agenda"
            className="bg-amber-500 text-amber-950 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-amber-400 transition-all hover:scale-105 inline-block"
          >
            Voir les prochaines dates
          </Link>

        </div>
      </section>

      {/* PRESENTATION */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">
          Qui sommes-nous ?
        </h2>

        <p className="text-lg text-stone-700 leading-relaxed">
          {SITE_INFOS.descriptionLongue}
        </p>
      </section>

      {/* AGENDA + CONTACT */}
      <section
        id="split-section"
        className="bg-amber-50/40 border-t border-stone-200 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Agenda */}
          <div className="space-y-8">

            <div>
              <h2 className="text-3xl font-serif font-bold text-red-900 mb-2">
                Prochaines dates
              </h2>

              <div className="w-12 h-1 bg-amber-500 rounded mb-6"></div>
            </div>

            <div className="space-y-6">
              {PROCHAINES_DATES.slice(0, 3).map((evt) => (
                <div
                  key={evt.id}
                  className="border-b border-amber-200 pb-5 last:border-none"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">

                    <span className="text-xs font-bold uppercase text-amber-600">
                      {evt.date}
                    </span>

                    {evt.estPublic ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🌍 Public
                      </span>
                    ) : (
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🔒 Privé
                      </span>
                    )}

                    {evt.estGratuit && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🎁 Gratuit
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-stone-800 font-serif">
                    {evt.title}
                  </h3>

                  <p className="text-stone-500 text-xs mb-2">
                    📍 {evt.location}
                  </p>

                  {evt.description && (
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {evt.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            /agenda
              Voir tout l'agenda complet →
            </Link>

          </div>

          {/* Contact */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100">

            <h2 className="text-3xl font-serif font-bold text-red-900 mb-2">
              Contact
            </h2>

            <p className="text-stone-600 text-sm mb-8 italic">
              Organisateurs, programmateurs, public...
            </p>

            <div className="space-y-8">

              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
                  Email direct
                </p>

                {`mailto:${SITE_INFOS.emailContact}`} className="text-xl md:text-2xl font-bold text-red-950 hover:text-amber-600 transition-colors break-all"
                >
                  {SITE_INFOS.emailContact}
                </a>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-4">
                  Suivez le collectif
                </p>

                <div className="flex flex-wrap gap-5">
                  {SITE_INFOS.reseauxSociaux.map((res, idx) => (
                    {res.url}
                      <span className="text-xl">{res.icone}</span>
                      <span className="text-sm font-medium">{res.nom}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
