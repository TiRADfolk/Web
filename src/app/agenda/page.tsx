'use client';

import React, { useState } from 'react';

const EVENEMENTS_DATA = [
  { id: 1, titre: 'Concert Traditionnel de Printemps', date: '15 Mars 2026', lieu: 'Salle des Fêtes, Lille', mois: 'Mars', description: 'Un voyage musical à travers les répertoires folkloriques.' },
  { id: 2, titre: 'Rencontre Inter-Asso & Musique', date: '22 Janvier 2026', lieu: 'Maison des Associations, Roubaix', mois: 'Janvier', description: 'Partage, discussions et session acoustique ouverte.' },
  { id: 3, titre: 'Festival Folk & Racines', date: '08 Février 2026', lieu: 'Théâtre de Verre, Tourcoing', mois: 'Février', description: 'Le grand rendez-vous annuel des passionnés de musiques traditionnelles.' },
];

export default function AgendaPage() {
  const [filtreMois, setFiltreMois] = useState('Tous');
  const moisDisponibles = ['Tous', 'Janvier', 'Février', 'Mars'];

  // Nouveau nom de variable pour forcer la mise à jour
  const listeAffiche = filtreMois === 'Tous'
    ? EVENEMENTS_DATA
    : EVENEMENTS_DATA.filter(evt => evt.mois === filtreMois);

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Notre Agenda
          </h1>
          <p className="mt-3 text-xl text-slate-500 sm:mt-4">
            Retrouvez tous les prochains événements, concerts et ateliers de l'association TiRAD.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center space-x-2 mb-8 flex-wrap gap-y-2">
          {moisDisponibles.map((mois) => (
            <button
              key={mois}
              onClick={() => setFiltreMois(mois)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filtreMois === mois
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {mois}
            </button>
          ))}
        </div>

        {/* Liste */}
        <div className="grid gap-8 md:grid-cols-1">
          {listeAffiche.length > 0 ? (
            listeAffiche.map((evt) => (
              <div 
                key={evt.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                      {evt.mois}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      {evt.titre}
                    </h2>
                    <p className="text-slate-600 mb-4">
                      {evt.description}
                    </p>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 min-w-[200px] md:text-right bg-slate-50 p-3 rounded-lg md:bg-transparent md:p-0">
                    <div className="font-semibold text-slate-700">{evt.date}</div>
                    <div>{evt.lieu}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-slate-300">
              Aucun événement de prévu pour ce mois-ci.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
