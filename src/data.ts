// src/data.ts 

export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  descriptionLongue: "T-RAD inspirés des parquets de bal.préparez vous à voyager entre mélodies envoutantes et rythmiques énergiques!",
  
  // Contacts et réseaux
  emailContact: "tiradfolk@gmail.com",
  telephone: "06 00 00 00 00", // Optionnel, laissez vide "" si vous ne voulez pas l'afficher
  reseauxSociaux: [
    { nom: "Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],

  // Design & Visuels configurables convertir les images en format WEBP dans squoosh
  design: {
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
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
  description: string; // <-- Ajouté pour le descriptif
  estPublic: boolean;  // <-- Ajouté pour le badge Public / Privé
  estGratuit: boolean; // <-- Ajouté pour le badge Gratuit
  boutons: BoutonAgenda[];
}

export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "Octobre",
    title: "La première !!! Répétition Publique",
    location: "Villeneuve d'Ascq - Ferme d'en haut",
    description: "Venez découvrir nos morceaux en avant-première lors de cette répétition ouverte à tous ! L'occasion idéale pour se rencontrer et échanger.", // Vous pouvez modifier ce texte
    estPublic: true,  // true = Affichera "🌍 Public"
    estGratuit: true, // true = Affichera "🎁 Gratuit"
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
    description: "Grand bal folk annuel organisé par l'association des Étoiles. Initiation aux danses traditionnelles dès 19h30.",
    estPublic: true,
    estGratuit: false, // false = Ne pas afficher le badge Gratuit
    boutons: [
      { label: "Réserver ma place", url: "https://www.billetweb.fr/exemple2" },
      { label: "Infos Pratiques", url: "https://www.google.com/maps" }
    ]
  },
  {
    id: "3",
    date: "20 Mai 2027",
    title: "Printemps des Parquets",
    location: "Brest (29) — Quartz",
    description: "Festival de musiques traditionnelles sur grand parquet. T-RAD montera sur scène en deuxième partie de soirée.",
    estPublic: true,
    estGratuit: false,
    boutons: [
      { label: "Entrée Libre (Infos)", url: "https://agenda传统.fr" }
    ]
  }
];
