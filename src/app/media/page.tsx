'use client';
import { useState } from 'react';

export default function MediaPage() {
  const [tab, setTab] = useState<'video' | 'audio' | 'photo'>('video');

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-red-950">Espace Médias</h1>
          <p className="text-stone-600 mt-4">Plongez dans l'univers sonore et visuel de T-RAD</p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center space-x-4 mb-12">
          {['video', 'audio', 'photo'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`px-6 py-2 rounded-full font-bold transition uppercase text-xs tracking-widest ${
                tab === t ? 'bg-red-900 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              {t}s
            </button>
          ))}
        </div>

        {/* Contenu Vidéo */}
        {tab === 'video' && (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video bg-stone-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center group relative">
               <span className="text-stone-500 font-medium italic">Vidéo Live au Festival</span>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
            </div>
            <div className="aspect-video bg-stone-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center group relative">
               <span className="text-stone-500 font-medium italic">Session Studio</span>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
            </div>
          </div>
        )}

        {/* Contenu Audio */}
        {tab === 'audio' && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6V4z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-stone-800">Extrait Musical n°{i}</p>
                    <p className="text-xs text-stone-500">Compo originale - T-RAD</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-700">03:45</span>
              </div>
            ))}
          </div>
        )}

        {/* Contenu Photo */}
        {tab === 'photo' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-stone-200 rounded-lg overflow-hidden hover:opacity-80 transition cursor-pointer border-2 border-white shadow-sm">
                 <div className="w-full h-full bg-gradient-to-tr from-stone-300 to-stone-100"></div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
