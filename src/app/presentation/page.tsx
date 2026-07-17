import Image from 'next/image';

export default function PresentationPage() {
  const musiciens = [
    { name: 'Loïc', instrument: 'Accordéon Diatonique', bio: 'Maître du soufflet et des rythmes impairs.' },
    { name: 'Enora', instrument: 'Violon & Chant', bio: 'Apporte la douceur des mélodies et l\'énergie du phrasé.' },
    { name: 'Yann', instrument: 'Flûtes & Bombarde', bio: 'Le souffle sauvage qui fait vibrer le parquet.' },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section Présentation */}
      <section className="bg-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">L'Histoire de T-RAD</h1>
          <p className="text-xl text-amber-200 italic">"Une transe acoustique née au cœur des fest-noz."</p>
        </div>
      </section>

      {/* Texte Histoire */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-stone lg:prose-xl">
          <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">D'où venons-nous ?</h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            T-RAD (prononcé "Ti-RAD") est né de la rencontre de trois musiciens passionnés par les musiques à danser. 
            Ancré dans la tradition bretonne, le groupe explore des sonorités modernes pour créer une musique 
            puissante, hypnotique et résolument festive.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Notre répertoire est un voyage entre compositions originales et airs traditionnels revisités, 
            toujours avec un seul objectif : faire vibrer la terre sous les pas des danseurs.
          </p>
        </div>
      </section>

      {/* Section Musiciens */}
      <section className="bg-amber-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-red-900 mb-12">Le Collectif</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {musiciens.map((m) => (
              <div key={m.name} className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 text-center hover:scale-105 transition duration-300">
                <div className="w-24 h-24 bg-red-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {m.name[0]}
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">{m.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{m.instrument}</p>
                <p className="text-stone-600 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
