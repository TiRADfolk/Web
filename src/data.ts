export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  logo: "https://drive.google.com/thumbnail?id=1PBXFwOUp3Fn4dbYAlsimg_C_cUyFuBfZ&sz=w2000",
  
  descriptionLongue: `T-RAD (prononcez Ti RAD) inspirés des parquets de bal.
Préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,
  
  emailContact: "tiradfolk@gmail.com",
  telephone: "",
  reseauxSociaux: [
    { nom: "Bientôt Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Bientôt Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "Bientôt YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],

  // 🎵 Lien pour le nouveau bouton média du bandeau
  lienMedia: "https://youtube.com/c/tiradfolk",

  presentationTitre: "Qui sommes-nous ?",
  presentationTexte: `T-RAD (prononcez Ti RAD) c'est l'énergie brute des parquets de bal folk...`,

  design: {
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
  }
};

// --- SECTION NEWS (NOUVEAU) ---
export interface NewsItem {
  afficherSurAccueil: boolean;
  titre: string;
  description: string;
  lien?: string;
  image?: string;
}

export const NEWS_INFO: NewsItem = {
  afficherSurAccueil: true, // 💡 Mettre à "false" pour masquer la section sur l'accueil
  titre: "Sortie de notre premier EP !",
  description: "Découvrez nos tout premiers morceaux enregistrés en studio disponibles dès maintenant.",
  lien: "https://youtube.com/c/tiradfolk",
  image: "https://drive.google.com/thumbnail?id=1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP&sz=w2000" // Image d'illustration
};

// --- PAGE ACTIVITÉS (NOUVEAU) ---
export interface Activite {
  id: string;
  titre: string;
  description: string;
  image?: string;
}

export const ACTIVITES: Activite[] = [
  {
    id: "act-1",
    titre: "Les Bals Folk",
    description: "Des soirées endiablées rythmées par les mazurkas, chapelloises et cercles circassiens.",
    image: ""
  },
  {
    id: "act-2",
    titre: "Ateliers d'initiation",
    description: "Idéal pour apprendre les pas de base avant d'entrer sur le parquet de bal.",
    image: ""
  }
];

// --- TYPES & INTERFACES DE L'AGENDA ---
export interface BoutonAgenda {
  label: string;
  url: string;
}

export interface EvenementAgenda {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
  estPublic: boolean;  
  // 💡 Modulable : 
  // - "non" ou false -> badge Gratuit
  // - "oui" ou true -> badge €
  // - "6-8€" (ou autre texte) -> affichera directement ce texte
  tarif: boolean | string; 
  logoEvenement?: string; // 💡 Optionnel : petit logo/image par événement
  boutons: BoutonAgenda[];
}

// --- DONNÉES DE L'AGENDA ---
export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "Octobre",
    title: "La première !!! Répétition Publique",
    location: "Villeneuve d'Ascq - Ferme d'en haut",
    description: "Venez découvrir nos morceaux en avant-première !",
    estPublic: true,
    tarif: "non", 
    logoEvenement: "🎻", // Peut être un émoji ou une URL d'image complète
    boutons: [
      { label: "Gps", url: "https://..." }
    ]
  },
  {
    id: "2",
    date: "Novembre",
    title: "Grand Bal Folk des Compagnons du Devoir",
    location: "Villeneuve d'Ascq (59)",
    description: "Grand bal folk annuel organisé par les compagnons.",
    estPublic: true,
    tarif: "6-8€", // 💡 Affiche directement le texte personnalisé
    logoEvenement: "💃",
    boutons: [
      { label: "Réserver", url: "https://..." }
    ]
  },
  {
    id: "3",
    date: "Décembre",
    title: "MoederBal du dimanche",
    location: "Halluin (59)",
    description: "4 fois par an le MoederBal invite 3 groupes.",
    estPublic: true,
    tarif: "oui", // 💡 Affiche juste "€"
    boutons: []
  }
];

// --- DONNÉES DU TROMBINOSCOPE ---
export interface MembreTrombi { id: string; nom: string; role: string; description: string; photoUrl: string; }
export const TROMBINOSCOPE: MembreTrombi[] = [
  { id: "m1", nom: "Naomi", role: "Flûte...", description: "...", photoUrl: "..." },
  { id: "m2", nom: "Florian", role: "Viole...", description: "...", photoUrl: "..." },
  { id: "m3", nom: "Antoine", role: "Guitare...", description: "...", photoUrl: "..." }
];
