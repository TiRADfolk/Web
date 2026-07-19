// src/app/page.tsx

import Link from 'next/link';
import { SITE_INFOS, PROCHAINES_DATES, NEWS_INFO, EvenementAgenda } from '../data';

export default function HomePage() {
  const aUneImageDeFond =
    SITE_INFOS.design?.heroBackgroundImage &&
    SITE_INFOS.design.heroBackgroundImage.trim() !== "";

  const renderBadgeTarif = (tarif: boolean | string) => {
    if (tarif === "non" || tarif === false) {
      return <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">🎁 Gratuit</span>;
    }
    if (tarif === "oui" || tarif === true) {
      return <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full">🎟️ €</span>;
    }
    return <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full">🎟️ {tarif}</span>;
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900">
      {/* HERO BANDEAU */}
      <section
        className={`relative py-8 text-center px-4 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[25vh] ${
          !aUneImageDeFond ? 'bg-gradient-to-br from-amber-900 to-stone-900' : ''
        }`}
        style={aUneImageDeFond ? { backgroundImage: `url('${SITE_INFOS.design.heroBackgroundImage}')` } : {}}
      >
        {aUneImageDeFond && <div className={`absolute inset-0 ${SITE_INFOS.design.overlayOpacity}`} />}

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            {SITE_INFOS.logo && (
              <img
                src={SITE_INFOS.logo}
                alt={`Logo ${SITE_INFOS.nom}`}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-xl border-2 border-amber-400"
              />
            )}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-amber-400 tracking-wide drop-shadow-lg">{SITE_INFOS.nom}</h1>
              {SITE_INFOS.slogan && <p className="text-lg md:text-xl text-stone-100 italic mt-2 drop-shadow">{SITE_INFOS.slogan}</p>}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-3">
            <Link href="/presentation" className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition text-sm font-medium">Présentation</Link>
            <Link href="/activites" className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition text-sm font-medium">Activités</Link>
            <Link href="/agenda" className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition text-sm font-medium">Agenda</Link>
            {SITE_INFOS.lienMedia && (
              <a href={SITE_INFOS.lienMedia} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-amber-950 px-5 py-2 rounded-full hover:bg-amber-400 transition text-sm font-bold shadow-md">🎬 Médias</a>
            )}
          </nav>
        </div>
      </section>

      {/* SECTION NEWS */}
      {NEWS_INFO?.afficherSurAccueil && (
        <section className="max-w-4xl mx-auto mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {NEWS_INFO.image && <img src={NEWS_INFO.image} alt={NEWS_INFO.titre} className="w-full md:w-48 h-auto object-cover rounded-xl shadow-md" />}
            <div className="flex-1 text-center md:text-left">
              <span className="bg-red-700 text-white text-xs uppercase font-extrabold px-2.5 py-1 rounded-md">News</span>
              <h2 className="text-2xl font-serif font-bold text-red-900 mt-2 mb-2">{NEWS_INFO.titre}</h2>
              {/* CORRECTION ICI : Ajout de whitespace-pre-line pour le pavé de News */}
              <p className="text-stone-700 text-base mb-4 whitespace-pre-line">{NEWS_INFO.description}</p>
              {NEWS_INFO.lien && <a href={NEWS_INFO.lien} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-amber-700 hover:underline">En savoir plus →</a>}
            </div>
          </div>
        </section>
      )}

      {/* QUI SOMMES-NOUS */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-red-900 mb-4">Qui sommes-nous ?</h2>
        {/* CORRECTION ICI : Ajout de whitespace-pre-line pour le pavé de description d'accueil */}
        <p className="text-lg text-stone-700 leading-relaxed whitespace-pre-line">{SITE_INFOS.descriptionLongue}</p>
      </section>

      {/* AGENDA & CONTACT */}
      <section className="bg-amber-50/40 border-t border-stone-200 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-red-900">Prochaines dates</h2>
            <div className="space-y-6">
              {PROCHAINES_DATES?.slice(0, 3).map((evt: EvenementAgenda) => (
                <div key={evt.id} className="border-b border-amber-200 pb-5 last:border-none flex gap-4 items-start">
                  {evt.logoEvenement && <div className="text-2xl p-2 bg-white rounded-lg shadow-sm border border-amber-100 select-none">{evt.logoEvenement}</div>}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase text-amber-600">{evt.date}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${evt.estPublic ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}`}>
                        {evt.estPublic ? '🌍 Public' : '🔒 Privé'}
                      </span>
                      {renderBadgeTarif(evt.tarif)}
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 font-serif">{evt.title}</h3>
                    <p className="text-stone-500 text-xs mb-2">📍 {evt.location}</p>
                    {evt.description && <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{evt.description}</p>}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/agenda" className="inline-block text-amber-600 hover:text-amber-700 font-medium">Voir tout l'agenda complet →</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-2">Contact</h2>
            <a href={`mailto:${SITE_INFOS.emailContact}`} className="text-xl md:text-2xl font-bold text-red-950 hover:text-amber-600 transition-colors break-all">{SITE_INFOS.emailContact}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
