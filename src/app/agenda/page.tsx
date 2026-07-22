// src/app/agenda/page.tsx

import Link from "next/link";
import { getProchainesDates } from "../../data";
import { EvenementAgenda } from "../../types";

export default async function AgendaPage() {
  const PROCHAINES_DATES = await getProchainesDates();

  // Acceptation explicite de undefined
  const renderBadgeTarif = (tarif?: boolean | string) => {
    if (tarif === "non" || tarif === false) return "🎁 Gratuit";
    if (tarif === "oui" || tarif === true) return "🎟️ Payant";
    if (!tarif || String(tarif).trim() === "") return "";
    return `🎟️ ${tarif}`;
  };

  // Fonction sécurisée acceptant undefined
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

        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          Agenda Complet
        </h1>

        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        {PROCHAINES_DATES.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500">
            Aucun événement prévu pour le moment. Revenez bientôt !
          </div>
        ) : (
          <div className="space-y-6">
            {PROCHAINES_DATES.map((evt: EvenementAgenda) => {
              const boutonsVisibles = (evt.boutons ?? []).filter(
                (bouton) =>
                  bouton.label &&
                  bouton.label.trim() !== "" &&
                  bouton.url &&
                  bouton.url.trim() !== ""
              );

              const badgeTarif = renderBadgeTarif(evt.tarif);

              return (
                <div
                  key={evt.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex gap-4 items-start"
                >
                  {/* Logo : Image ou Emoji */}
                  {evt.logoEvenement && (
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-stone-50 rounded-xl overflow-hidden select-none">
                      {isImageUrl(evt.logoEvenement) ? (
                        <img 
                          src={evt.logoEvenement} 
                          alt="Logo événement" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl">{evt.logoEvenement}</span>
                      )}
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-600 uppercase mb-1">
                      <span>{evt.date}</span>
                      <span>•</span>
                      <span>{evt.estPublic ? "Public" : "Privé"}</span>

                      {badgeTarif && (
                        <>
                          <span>•</span>
                          <span className="text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full">
                            {badgeTarif}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-xl font-bold font-serif text-stone-800">
                      {evt.title}
                    </h2>

                    {((evt.location && evt.location.trim() !== "") || (evt.lieuPrecise && evt.lieuPrecise.trim() !== "")) && (
                      <p className="text-stone-500 text-sm mb-2 flex flex-wrap gap-1 items-center">
                        <span>📍</span>
                        {evt.lieuPrecise && (
                          <span className="font-semibold text-stone-700">{evt.lieuPrecise}</span>
                        )}
                        {evt.lieuPrecise && evt.location && <span className="text-stone-400">—</span>}
                        {evt.location && <span>{evt.location}</span>}
                      </p>
                    )}

                    {evt.description && evt.description.trim() !== "" && (
                      <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                        {evt.description}
                      </p>
                    )}

                    {boutonsVisibles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {boutonsVisibles.map((bouton, index) => (
                          <a
                            key={index}
                            href={bouton.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-amber-500 text-stone-950 font-bold text-sm rounded-xl hover:bg-amber-600 transition"
                          >
                            {bouton.label}
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
