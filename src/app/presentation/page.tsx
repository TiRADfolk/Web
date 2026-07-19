// src/app/presentation/page.tsx
import React from 'react';
import Link from 'next/link';
import { SITE_INFOS } from '../../data';

export default function PresentationPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-6 inline-block">
          ← Retour à l'accueil
        </Link>

        {/* Titre */}
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-2">
          {SITE_INFOS.presentationTitre || "Présentation"}
        </h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-8"></div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 mb-12">
          <p className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">
            {SITE_INFOS.presentationTexte || SITE_INFOS.descriptionLongue}
          </p>
        </div>
      </div>
    </div>
  );
}
