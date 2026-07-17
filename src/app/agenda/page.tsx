'use client';
import { useState } from 'react';

// Données d'exemple structurées pour l'année en cours
const EVENEMENTS_DATA = [
  {
    id: '1',
    date: '2027-01-25',
    dateAffichee: 'Samedi 25 Janvier 2027',
    mois: 'Janvier',
    titre: 'Grand Fest-Noz des Rois',
    lieu: 'Salle des Fêtes, Rennes (35)',
    organisateur: 'Asso Diato Rennes',
    lienBilletterie: 'https://example.com/billetterie1',
    lienEvent: 'https://facebook.com/events/1',
    description: 'Venez fêter la nouvelle année sur un parquet de danse chauffé à blanc ! Crêpes et cidre sur place.'
  },
  {
    id: '2',
    date: '2027-02-12',
    dateAffichee: 'Vendredi 12 Février 2027',
    mois: 'Février',
    titre: 'Nuit du Folk d\'Hiver',
    lieu: 'Le Pannonica, Nantes (44)',
    organisateur: 'Folk de Loire',
    lienBilletterie: 'https://example.com/billetterie2',
    lienEvent: '',
    description: 'Une soirée intimiste et énergique pour réchauffer le cœur de l\'hiver au son de nos compositions.'
  },
  {
    id: '3',
    date: '2027-03-05',
    dateAffichee: 'Vendredi 5 Mars 2027',
    mois: 'Mars',
    titre: 'Bal Traditionnel Ti-RAD',
    lieu: 'Palais des Congrès, Lorient (56)',
    organisateur: 'Emglev Bro an Oriant',
    lienBilletterie: '',
    lienEvent: 'https://facebook.com/events/3',
    description: 'Un grand bal de printemps avec T-RAD en tête d\'affiche. Préparez vos plus belles chaussures !'
  }
];

export default function AgendaPage() {
  const [filtreMois, setFiltreMois] = useState('Tous');

 // Filtre des événements
  const moisDisponibles = ['Tous', 'Janvier', 'Février', 'Mars'];

  const evenementsFiltres = filtreMois === 'Tous'
    ? EVENEMENTS_DATA
    : EVENEMENTS_DATA.filter(evt => evt.mois === filtreMois);

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Sur la route</span>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-red-950 mt-2">L'Agenda des Bals</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Barre de filtrage moderne */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {moisDisponibles.map((mois) => (
            <button
              key={mois}
              onClick={() => setFiltreMois(mois)}
              className={`px-5 py-2 rounded-full font-medium transition text-sm ${
                filtreMois === mois
                  ? 'bg-red-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-100 border border-stone-200'
              }`}
            >
              {mois}
            </button>
          ))}
        </div>

        {/* Grille des événements */}
        <div className="grid gap-8 md:grid-cols-1">
          {evenementsFiltres.length > 0 ? (
            evenementsFiltres.map((evt) => (
              <div 
                key={evt.id} 
                className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                {/* Bloc Date Gauche */}
                <div className="bg-gradient-to-br from-red-950 to-red-900 text-white p-6 md:w-64 flex flex-col justify-center items-center text-center">
                  <span className="text-amber-400 font-serif font-bold text-lg">T-RAD Live</span>
                  <span className="text-sm opacity-90 mt-2 font-medium">{evt.dateAffichee}</span>
                </div>

                {/* Bloc Infos Droite */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      <span className="bg-amber-100 text-amber-950 text-xs px-2.5 py-1 rounded-md font-semibold">
                        {evt.lieu}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">{evt.titre}</h2>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{evt.description}</p>
                    <p className="text-xs text-stone-400">Organisé par : {evt.organisateur}</p>
                  </div>

                  {/* Liens d'action */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {evt.lienBilletterie && (
                      <a 
                        href={evt.lienBilletterie} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition"
                      >
                        🎟️ Réserver ma place
                      </a>
                    )}
                    {evt.lienEvent && (
                      <a 
                        href={evt.lienEvent} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-stone-100 text-stone-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-stone-200 transition border border-stone-200"
                      >
                        📅 Événement Facebook
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-stone-500">
              Aucun événement prévu pour cette période. Reviens très vite !
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
