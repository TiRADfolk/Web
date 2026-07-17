// src/data.ts

export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "L'énergie brute du bal traditionnel",
  descriptionLongue: "T-RAD est un collectif de musiciens passionnés qui fait vibrer les parquets de danse au son des accordéons, violons et flûtes. Notre répertoire mêle compositions originales et airs traditionnels revisités pour une transe collective assurée !",
  
  // Contacts et réseaux
  emailContact: "tiradfolk@gmail.com",
  telephone: "06 00 00 00 00", // Optionnel, laissez vide "" si vous ne voulez pas l'afficher
  reseauxSociaux: [
    { nom: "Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],

  // Design & Visuels configurables
  design: {
    // Si vous uploadez une image dans le dossier public, mettez son chemin ici (ex: "/images/fond-hero.jpg")
    heroBackgroundImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop", 
    overlayOpacity: "bg-black/60", // Assombrit l'image pour que le texte reste très lisible
  }
};

export interface BoutonAgenda {
  label: string;
  url: string;
}

export interface EvenementAgenda {
  id: string;
  date: string;
  title: string;
  location: string;
  // Tableau contenant jusqu'à 3 boutons personnalisés
  boutons: BoutonAgenda[];
}

export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "25 Janv. 2027",
    title: "Grand Fest-Noz",
    location: "Rennes (35) — Salle de la Cité",
    boutons: [
      { label: "Billetterie", url: "https://www.billetweb.fr/exemple1" },
      { label: "Événement Facebook", url: "https://facebook.com/events/123" },
      { label: "Site de l'organisateur", url: "https://cutt.ly/exemple" }
    ]
  },
  {
    id: "2",
    date: "12 Fév. 2027",
    title: "Bal Folk des Étoiles",
    location: "Nantes (44) — Le Pannonica",
    boutons: [
      { label: "Réserver ma place", url: "https://www.billetweb.fr/exemple2" },
      { label: "Infos Pratiques", url: "https://www.google.com/maps" }
      // Le 3ème bouton est absent, seul 2 boutons s'afficheront pour cette date
    ]
  },
  {
    id: "3",
    date: "20 Mai 2027",
    title: "Printemps des Parquets",
    location: "Brest (29) — Quartz",
    boutons: [
      { label: "Entrée Libre (Infos)", url: "https://agenda传统.fr" }
      // Un seul bouton s'affichera ici
    ]
  }
];
