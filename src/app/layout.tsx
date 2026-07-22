import React from 'react';
import './globals.css';

export const metadata = {
  title: 'T-RAD | Groupe Trad & Bal Folk',
  description: 'Musique traditionnelle vivante et bals folks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
