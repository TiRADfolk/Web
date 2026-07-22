// src/app/media/MediaClientContent.tsx

/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MediaItem } from '../../types';

interface MediaClientContentProps {
  initialMedias: MediaItem[];
}

const ONGLETS: Array<{ key: 'video' | 'audio' | 'photo'; label: string }> = [
  { key: 'video', label: '🎬 Vidéos' },
  { key: 'audio', label: '🎵 Audios' },
  { key: 'photo', label: '🖼️ Photos' },
];

export default function MediaClientContent({ initialMedias = [] }: MediaClientContentProps) {
  const [tab, setTab] = useState<'video' | 'audio' | 'photo'>('video');
  const safeMedias = Array.isArray(initialMedias) ? initialMedias : [];
  const mediasFiltres = safeMedias.filter((item) => item && item.type === tab);

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4 text-stone-900">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6 text-sm font-medium">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-serif font-black text-red-950 text-center mb-8">Espace Médias</h1>

        <div className="flex justify-center gap-3 mb-10">
          {ONGLETS.map((o) => (
            <button
              key={o.key}
              onClick={() => setTab(o.key)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                tab === o.key
                  ? 'bg-red-900 text-white border-red-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-amber-500'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        {mediasFiltres.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500">
            Aucun média disponible dans cette catégorie pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediasFiltres.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                {item.miniature && (
                  <img src={item.miniature} alt={item.titre} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <p className="font-bold text-stone-800">{item.titre}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:underline font-medium"
                  >
                    Voir / écouter →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
