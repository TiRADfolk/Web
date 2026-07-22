// src/app/agenda/page.tsx

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getProchainesDates } from "../../data";
import { EvenementAgenda } from "../../types";

export default async function AgendaPage() {
  const PROCHAINES_DATES = (await getProchainesDates()) || [];

  const renderBadgeTarif = (tarif?: boolean | string) => {
    if (tarif === "non" || tarif === false) return "🎟️ Gratuit";
    if (tarif === "oui" || tarif === true) return "🎟️ Payant";
    if (!tarif || String(tarif).trim() === "") return "";
    return `🎟️ ${tarif}`;
  };

  const isImageUrl = (url?: string) => {
    const safeUrl = String(url || "").trim();
    return safeUrl.startsWith("http://") || safeUrl.startsWith("https://") || safeUrl.startsWith("/");
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6 text-sm font-medium">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">Agenda Complet</h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        {PROCHAINES_DATES.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500">
            Aucun événement prévu pour le moment. Revenez bientôt !
          </div>
        ) : (
          <div className="space-y-6">
            {PROCHAINES_DATES.map((evt: EvenementAgenda, index: number) => {
              const badgeTarif = renderBadgeTarif(evt.tarif);
              const lieu = evt.lieuPrecise || evt.location;

              return (
                <div
                  key={evt.id || `${evt.title}-${index}`}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex gap-4 items-start"
                >
                  {evt.logoEvenement && isImageUrl(evt.logoEvenement) && (
                    <img
                      src={evt.logoEvenement}
                      alt={evt.title}
                      className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                    />
                  )}

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-xs font-bold text-amber-600 uppercase">{evt.date}</p>
                      {evt.estPublic === false && (
                        <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                          Privé
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold font-serif text-stone-800">{evt.title}</h2>

                    {lieu && <p className="text-sm text-stone-500 mt-1">📍 {lieu}</p>}

                    {evt.description && (
                      <p className="text-stone-600 text-sm mt-2">{evt.description}</p>
                    )}

                    {badgeTarif && (
                      <span className="inline-block mt-3 text-xs font-bold text-red-800 bg-amber-100 px-3 py-1 rounded-full">
                        {badgeTarif}
                      </span>
                    )}

                    {Array.isArray(evt.boutons) && evt.boutons.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {evt.boutons.map((btn, i) => (
                          <a
                            key={i}
                            href={btn.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-white bg-red-900 hover:bg-red-800 px-4 py-2 rounded-lg transition-colors"
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
