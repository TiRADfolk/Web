// src/app/presentation/page.tsx
import React from 'react';
import { SITE_INFOS, TROMBINOSCOPE } from '../../data';

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 text-stone-900">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* --- SECTION 1 : HISTOIRE DU GROUPE --- */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
          <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-8 border-b border-amber-200 pb-4 text-center">
            {SITE_INFOS.presentationTitre || "Présentation"}
          </h1>
          
          {/* Le texte respecte les sauts de ligne du data.ts grâce à whitespace-pre-line */}
          <p className="text-lg text-stone-700 leading-relaxed font-light whitespace-pre-line">
            {SITE_INFOS.presentationTexte}
          </p>
        </section>

        {/* --- SECTION 2 : LE TROMBINOSCOPE (LES MUSICIENS) --- */}
        {TROMBINOSCOPE && TROMBINOSCOPE.length > 0 && (
          <section className="space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-red-900 mb-2">Le Collectif</h2>
              <div className="w-16 h-1 bg-amber-500 rounded mx-auto"></div>
              <p className="mt-4 text-stone-500 italic">"La chaleur du Folk, le souffle de la danse"</p>
            </div>

            {/* Grille des membres : 1 colonne sur mobile, 2 sur tablette, 3 sur ordi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TROMBINOSCOPE.map((membre) => {
                const aUnePhoto = membre.photoUrl && membre.photoUrl.trim() !== "";
                
                return (
                  <div 
                    key={membre.id} 
                    className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-all group"
                  >
                    {/* Zone Image */}
                    <div className="w-full h-72 bg-stone-200 relative flex items-center justify-center overflow-hidden">
                      {aUnePhoto ? (
                        <img 
                          src={membre.photoUrl} 
                          alt={membre.nom}
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-center">
                          <span className="text-5xl block mb-2">🎻</span>
                          <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Photo à venir</span>
                        </div>
                      )}
                    </div>

                    {/* Infos Membre */}
                    <div className="p-6 flex-1 flex flex-col text-center">
                      <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
                        {membre.nom}
                      </h3>
                      <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">
                        {membre.role}
                      </p>
                      
                      {membre.description && (
                        <p className="text-stone-600 text-sm font-light leading-relaxed italic border-t border-stone-50 pt-4">
                          "{membre.description}"
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
