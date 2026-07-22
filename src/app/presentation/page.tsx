// src/app/presentation/page.tsx

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { getSiteInfos, getTrombinoscope } from '../../data';
import { MembreTrombinoscope } from '../../types';

export default async function PresentationPage() {
  const SITE_INFOS = (await getSiteInfos()) || {};
  const TROMBINOSCOPE = (await getTrombinoscope()) || [];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-6 inline-block">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          {SITE_INFOS.presentationTitre || "Qui sommes-nous ?"}
        </h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 mb-12">
          <p className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">
            {SITE_INFOS.presentationTexte || SITE_INFOS.descriptionLongue || "Présentation à venir."}
          </p>
        </div>

        {TROMBINOSCOPE.length > 0 && (
          <>
            <h2 className="text-2xl font-serif font-extrabold text-red-900 mb-6">Les membres du groupe</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {TROMBINOSCOPE.map((membre: MembreTrombinoscope) => (
                <div
                  key={membre.id}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-center"
                >
                  {membre.photoUrl ? (
                    <img
                      src={membre.photoUrl}
                      alt={membre.nom}
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-stone-100 flex items-center justify-center text-2xl">
                      👤
                    </div>
                  )}
                  <p className="font-bold text-stone-800">{membre.nom}</p>
                  <p className="text-sm text-amber-600 font-medium">{membre.role}</p>
                  {membre.description && (
                    <p className="text-xs text-stone-500 mt-2">{membre.description}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
