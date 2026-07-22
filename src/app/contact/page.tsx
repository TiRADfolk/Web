// src/app/contact/page.tsx

import Link from 'next/link';
import { getSiteInfos } from '../../data';

export default async function ContactPage() {
  const siteInfos = await getSiteInfos();

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-amber-600 hover:underline inline-block mb-6 text-sm font-medium">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-serif font-extrabold text-red-900 mb-6">Contact & Réservations</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4">
          <p><strong>Email :</strong> {siteInfos.emailContact}</p>
          <p><strong>Téléphone :</strong> {siteInfos.telephone || "Non renseigné"}</p>
        </div>
      </div>
    </div>
  );
}
