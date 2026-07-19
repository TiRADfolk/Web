import Link from 'next/link';
import { PROCHAINES_DATES, EvenementAgenda } from '../../data';

export default function AgendaPage() {
  const renderBadgeTarif = (tarif: boolean | string) => {
    if (tarif === "non" || tarif === false) return "🎁 Gratuit";
    if (tarif === "oui" || tarif === true) return "🎟️ Payant";
    return `🎟️ ${tarif}`;
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-6 inline-block">← Retour à l'accueil</Link>
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">Agenda Complet</h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>
        
        <div className="space-y-6">
          {PROCHAINES_DATES.map((evt: EvenementAgenda) => (
            <div key={evt.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex gap-4 items-start">
              {evt.logoEvenement && <div className="text-3xl p-3 bg-stone-50 rounded-xl select-none">{evt.logoEvenement}</div>}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-600 uppercase mb-1">
                  <span>{evt.date}</span>
                  <span>•</span>
                  <span>{evt.estPublic ? 'Public' : 'Privé'}</span>
                  <span>•</span>
                  <span className="text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full">{renderBadgeTarif(evt.tarif)}</span>
                </div>
                <h2 className="text-xl font-bold font-serif text-stone-800">{evt.title}</h2>
                <p className="text-stone-500 text-sm mb-2">📍 {evt.location}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{evt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  
