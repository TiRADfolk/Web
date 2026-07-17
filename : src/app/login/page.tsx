'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Logique de connexion Supabase à brancher ici
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="bg-stone-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-black text-red-950">Espace Intime</h1>
          <p className="text-stone-500 text-sm mt-2">Réservé aux membres du collectif T-RAD</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1">Identifiant / Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
              placeholder="nom@t-rad-music.fr"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 bg-stone-50"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-900 text-white font-bold py-3 rounded-lg hover:bg-red-950 transition shadow-md disabled:bg-stone-300"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
