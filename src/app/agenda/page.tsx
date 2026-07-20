{PROCHAINES_DATES.map((evt: EvenementAgenda) => {
  const boutonsVisibles = evt.boutons.filter(
    (bouton) =>
      bouton.label &&
      bouton.label.trim() !== "" &&
      bouton.url &&
      bouton.url.trim() !== ""
  );

  return (
    <div
      key={evt.id}
      className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex gap-4 items-start"
    >
      {evt.logoEvenement && (
        <div className="text-3xl p-3 bg-stone-50 rounded-xl select-none">
          {evt.logoEvenement}
        </div>
      )}

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-600 uppercase mb-1">
          <span>{evt.date}</span>
          <span>•</span>
          <span>{evt.estPublic ? "Public" : "Privé"}</span>
          <span>•</span>
          <span className="text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full">
            {renderBadgeTarif(evt.tarif)}
          </span>
        </div>

        <h2 className="text-xl font-bold font-serif text-stone-800">
          {evt.title}
        </h2>

        <p className="text-stone-500 text-sm mb-2">
          📍 {evt.location}
        </p>

        <p className="text-stone-600 text-sm leading-relaxed">
          {evt.description}
        </p>

        {/* Boutons événement */}
        {boutonsVisibles.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {boutonsVisibles.map((bouton, index) => (
              <a
                key={index}
                href={bouton.url}
          ))}
          </div>
        )}
      </div>
    </div>
  );
})}
