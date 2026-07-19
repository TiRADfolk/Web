// src/app/presentation/page.tsx
import React from 'react';
import Link from 'next/link';
import { SITE_INFOS, TROMBINOSCOPE } from '../../data';

export default function PresentationPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-6 inline-block">
          ← Retour à l'accueil
        </Link>

        {/* Titre */}
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          {SITE_INFOS.presentationTitre || "Qui sommes-nous ?"}
        </h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        {/* Texte de présentation complet */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 mb-12">
          <p className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">
            {SITE_INFOS.presentationTexte || SITE_INFOS.descriptionLongue}
          </p>
        </div>

        {/* Section Trombinoscope */}
        {TROMBINOSCOPE && TROMBINOSCOPE.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Les membres du groupe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {TROMBINOSCOPE.map((membre) => (
                <div key={membre.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 text-center">
                  {membre.photoUrl && membre.photoUrl.trim() !== "" && membre.photoUrl !== "..." ? (
                    <img src={membre.photoUrl} alt={membre.nom} className="w-24 h-24 rounded-full mx-auto object-cover mb-4 shadow" />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-stone-100 border border-stone-200 flex items-center justify-center text-2xl select-none mb-4 text-stone-400">🎵</div>
                  )}
                  <h3 className="font-bold text-lg text-stone-800">{membre.nom}</h3>
                  <p className="text-amber-600 text-xs font-semibold uppercase tracking-wider mb-2">{membre.role}</p>
                  {membre.description && membre.description !== "..." && (
                    <p className="text-stone-600 text-sm">{membre.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
