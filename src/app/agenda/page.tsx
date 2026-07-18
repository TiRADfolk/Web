// src/app/agenda/page.tsx
'use client'; 

import React, { useState } from 'react';
import { PROCHAINES_DATES } from '../../data';

export default function AgendaPage() {
  const [filtreMois, setFiltreMois] = useState('Tous');

  // Génère dynamiquement la liste des filtres de mois disponibles par rapport aux vraies dates du fichier data.ts
  const moisDisponibles = ['Tous', ...Array.from(new Set(PROCHAINES_DATES.map(evt => {
    // Si la date contient un espace (ex: "12 Fév. 2027"), on essaie d'extraire le mois
    const segments = evt.date.split(' ');
    return segments.length > 1 ? segments[1].replace('.', '') : evt.date;
  })))];

  // Filtre les événements selon le choix de l'utilisateur
  const listeAffiche = filtreMois === 'Tous'
    ? PROCHAINES_DATES
    : PROCHAINES_DATES.filter(evt => {
        const segments = evt.date.split(' ');
        const moisEvt = segments.length > 1 ? segments[1].replace('.', '') : evt.date;
        return moisEvt.toLowerCase() === filtreMois.toLowerCase();
      });

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 text-stone-900">
      <div className="max-w-5xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-extrabold text-red-900 sm:text-5xl">
            Notre Agenda Complet
          </h1>
          <p className="mt-3 text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Retrouvez le calendrier global des concerts, festivals et parquets animés par le collectif T-RAD.
          </p>
        </div>

        {/* Barre de Filtres par Mois */}
        {moisDisponibles.length > 2 && (
          <div className="flex justify-center space-x-2 mb-10 flex-wrap gap-y-2">
            {moisDisponibles.map((mois) => (
              <button
                key={mois}
                onClick={() => setFiltreMois(mois)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  filtreMois === mois
                    ? 'bg-amber-500 text-amber-950 scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {mois}
              </button>
            ))}
          </div>
        )}

        {/* Liste des événements */}
        <div className="space-y-6">
          {listeAffiche.length > 0 ? (
            listeAffiche.map((evt) => (
              <div 
                key={evt.id} 
                className="bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  
                  {/* Corps de l'événement (Gauche) */}
                  <div className="flex-1 space-y-3">
                    {/* Badges indicatifs */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        🗓️ {evt.date}
                      </span>
                      {evt.estPublic ? (
                        <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-100">
                          🌍 Public
                        </span>
                      ) : (
                        <span className="bg-purple-50 text-purple-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-purple-100">
                          🔒 Privé
                        </span>
                      )}
                      {evt.estGratuit && (
                        <span className="bg-amber-100 text-amber-950 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                          🎁 Gratuit / Entrée Libre
                        </span>
                      )}
                    </div>

                    {/* Titre */}
                    <h2 className="text-2xl font-serif font-bold text-stone-900">
                      {evt.title}
                    </h2>

                    {/* Descriptif */}
                    <p className="text-stone-600 font-light leading-relaxed text-base">
                      {evt.description}
                    </p>

                    {/* Boutons d'action personnalisés (ex: Billetterie, Facebook, etc.) */}
                    {evt.boutons && evt.boutons.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-3">
                        {evt.boutons.map((btn, index) => (
                          <a
                            key={index}
                            href={btn.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-900 text-stone-100 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-amber-500 hover:text-amber-950 transition-colors shadow-sm"
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Infos pratiques de localisation (Droite) */}
                  <div className="w-full md:w-auto min-w-[220px] md:text-right bg-stone-50 md:bg-transparent p-4 md:p-0 rounded-xl border border-stone-100 md:border-none flex flex-col justify-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Localisation</p>
                    <p className="text-stone-800 font-medium text-sm leading-tight">
                      📍 {evt.location}
                    </p>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-stone-500 bg-white rounded-2xl border border-dashed border-stone-300">
              Aucun événement programmé pour ce filtre.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
