import Link from 'next/link';

export default function HomePage() {
  // Dates d'exemples en attendant la liaison complète avec la base de données
  const datesProchaines = [
    { id: '1', date: '25 Janv. 2027', title: 'Grand Fest-Noz', location: 'Rennes (35)' },
    { id: '2', date: '12 Fév. 2027', title: 'Bal Folk des Étoiles', location: 'Nantes (44)' },
  ];

  return (
    <div>
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-red-900 to-amber-900 text-stone-100 py-24 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-amber-400 mb-4 drop-shadow-md">
          T-RAD
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light italic">
          L'énergie brute du bal traditionnel, entre rythmes effrénés et mélodies envoûtantes.
        </p>
        <div className="mt-8">
          <Link href="/agenda" className="bg-amber-500 text-amber-950 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-amber-400 transition">
            Voir l'agenda des bals
          </Link>
        </div>
      </section>

      {/* Section Présentation Express */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Qui sommes-nous ?</h2>
        <p className="text-lg text-stone-700 leading-relaxed">
          T-RAD est un collectif de musiciens passionnés qui fait vibrer les parquets de danse au son des accordéons, violons et flûtes. Notre répertoire mêle compositions originales et airs traditionnels revisités pour une transe collective assurée !
        </p>
      </section>

      {/* Section Prochaines Dates */}
      <section className="bg-amber-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-red-900 mb-10">Prochaines dates</h2>
          <div className="space-y-4">
            {datesProchaines.map((evt) => (
              <div key={evt.id} className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <span className="text-sm font-bold uppercase text-amber-600 block">{evt.date}</span>
                  <h3 className="text-xl font-bold text-stone-800">{evt.title}</h3>
                  <p className="text-stone-600">{evt.location}</p>
                </div>
                <Link href="/agenda" className="border-2 border-red-950 text-red-950 px-4 py-2 rounded hover:bg-red-950 hover:text-white transition text-sm font-medium">
                  Plus d'infos
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
