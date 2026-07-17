'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulation d'envoi (sera lié à votre API de messagerie)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Booking & Questions</span>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-red-950 mt-2">Contactez T-RAD</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Informations de contact (Gauche) */}
          <div className="bg-gradient-to-br from-red-950 to-red-900 text-white p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-amber-400 mb-4">Le Collectif</h2>
              <p className="text-stone-200 text-sm leading-relaxed">
                Vous souhaitez programmer T-RAD pour un festival, un bal folk, un mariage ou une initiation à la danse ? Écrivez-nous !
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <span>📧</span>
                <span className="text-stone-100">contact@t-rad-music.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📞</span>
                <span className="text-stone-100">06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span className="text-stone-100">Bretagne / Grand Ouest</span>
              </div>
            </div>

            <div className="pt-4 border-t border-red-800 text-xs text-amber-300">
              Suivez nos aventures sur les réseaux sociaux !
            </div>
          </div>

          {/* Formulaire de contact (Droite) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Nom / Structure</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
                  placeholder="Ex: Association Folklorique"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Adresse Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
                  placeholder="exemple@domaine.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Objet</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
                  placeholder="Ex: Demande de devis concert"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Votre message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50 resize-none"
                  placeholder="Détaillez votre projet ou votre question ici..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-amber-600 text-white font-bold py-3 rounded-lg hover:bg-amber-700 transition shadow-md disabled:bg-stone-300"
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 text-sm rounded-lg text-center font-medium border border-green-200">
                  ✨ Message envoyé avec succès ! Le collectif vous répondra rapidement.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
