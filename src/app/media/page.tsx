// app/media/page.tsx

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MEDIAS } from '../../data';
import { MediaItem } from '../../types';

export default function MediaPage() {
  const [tab, setTab] = useState<'video' | 'audio' | 'photo'>('video');

  const mediasFiltres = MEDIAS.filter((item) => item.type === tab);

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4 text-stone-900">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6">
          ← Retour à l'accueil
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-red-950">Espace Médias</h1>
          <p className="text-stone-600 mt-4">Plongez dans l'univers sonore et visuel de T-RAD</p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center space-x-4 mb-12">
          {(['video', 'audio', 'photo'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full font-bold transition uppercase text-xs tracking-widest ${
                tab === t ? 'bg-red-900 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              {t}s
            </button>
          ))}
        </div>

        {mediasFiltres.length === 0 && (
          <p className="text-center text-stone-500 italic py-8">Aucun contenu disponible pour le moment.</p>
        )}

        {/* Contenu Vidéo */}
        {tab === 'video' && (
          <div className="grid gap-8 md:grid-cols-2">
            {mediasFiltres.map((item: MediaItem) => (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="aspect-video bg-stone-900 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center relative border border-stone-200">
                  {item.miniature ? (
                    <img src={item.miniature} alt={item.titre} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition" />
                  ) : null}
                  <span className="text-white font-medium font-serif group-hover:text-amber-400 transition z-10 text-center px-4">
                    {item.titre}
                  </span>
                  <span className="text-xs text-stone-300 mt-2 z-10 opacity-0 group-hover:opacity-100 transition">
                    ▶ Lire sur YouTube
                  </span>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Contenu Audio */}
        {tab === 'audio' && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 space-y-4">
            {mediasFiltres.map((item: MediaItem) => (
              <a key={item.id} href={item.url} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition block">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6V4z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-stone-800">{item.titre}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Contenu Photo */}
        {tab === 'photo' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediasFiltres.map((item: MediaItem) => (
              <div key={item.id} className="aspect-square bg-stone-200 rounded-lg overflow-hidden border-2 border-white shadow-sm group relative">
                <img src={item.url} alt={item.titre} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute bottom-0 inset-x-0 bg-black/60 p-2 text-white text-xs opacity-0 group-hover:opacity-100 transition text-center truncate">
                  {item.titre}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
