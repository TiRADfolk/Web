// src/data.ts

export interface SiteDesign {
  heroBackgroundImage: string;
  overlayOpacity: string;
}

export interface ReseauSocial {
  nom: string;
  url: string;
  icone: string;
}

export interface SiteInfos {
  nom: string;
  slogan: string;
  logo: string;
  descriptionLongue: string;
  emailContact: string;
  telephone: string;
  reseauxSociaux: ReseauSocial[];
  lienMedia: string;
  presentationTitre: string;
  presentationTexte: string;
  design: SiteDesign;
}

export interface NewsItem {
  afficherSurAccueil: boolean;
  titre: string;
  description: string;
  lien?: string;
  image?: string;
}

export interface Activite {
  id: string;
  titre: string;
  description: string;
  image?: string;
}

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
  tarif: boolean | string; 
  logoEvenement?: string;
  boutons: BoutonAgenda[];
}

// Interface pour le Trombinoscope
export interface MembreTrombi {
  id: string;
  nom: string;
  role: string;
  description: string;
  photoUrl: string;
}

// --- DONNÉES ---
export const SITE_INFOS: SiteInfos = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  logo: "https://drive.google.com/thumbnail?id=1PBXFwOUp3Fn4dbYAlsimg_C_cUyFuBfZ&sz=w2000",
  descriptionLongue: `T-RAD (prononcez Ti RAD) inspirés des parquets de bal.\nPréparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,
  emailContact: "tiradfolk@gmail.com",
  telephone: "",
  reseauxSociaux: [
    { nom: "Bientôt Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Bientôt Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "Bientôt YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],
  lienMedia: "https://youtube.com/c/tiradfolk",
  presentationTitre: "Qui sommes-nous ?",
  presentationTexte: `T-RAD (prononcez Ti RAD) c'est l'énergie brute des parquets de bal folk alliée à la douceur des musiques traditionnelles.\n\nNotre répertoire mélange compositions originales et morceaux traditionnels réarrangés, portés par le souffle de la danse et la complicité des musiciens.`,
  design: {
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
  }
};

export const NEWS_INFO: NewsItem = {
  afficherSurAccueil: true,
  titre: "Sortie de notre premier EP !",
  description: "Découvrez nos tout premiers morceaux enregistrés en studio disponibles dès maintenant.",
  lien: "https://youtube.com/c/tiradfolk",
  image: "https://drive.google.com/thumbnail?id=1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP&sz=w2000"
};

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

export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "Octobre",
    title: "La première !!! Répétition Publique",
    location: "Villeneuve d'Ascq - Ferme d'en haut",
    description: "Venez découvrir nos morceaux en avant-première lors de cette répétition ouverte à tous !",
    estPublic: true,
    tarif: "non", 
    logoEvenement: "🎻",
    boutons: []
  },
  {
    id: "2",
    date: "Novembre",
    title: "Grand Bal Folk des Compagnons du Devoir",
    location: "Villeneuve d'Ascq (59)",
    description: "Grand bal folk annuel organisé par les compagnons.",
    estPublic: true,
    tarif: "6-8€", 
    logoEvenement: "💃",
    boutons: []
  }
  // Tu peux rajouter tes autres dates ici au même format...
];

// On remet le Trombinoscope que tu avais au début !
export const TROMBINOSCOPE: MembreTrombi[] = [
  { id: "m1", nom: "Naomi", role: "Flûte...", description: "Des mélodies virevoltantes aux flûtes.", photoUrl: "" },
  { id: "m2", nom: "Florian", role: "Viole...", description: "La rondeur et la profondeur des cordes frottées.", photoUrl: "" },
  { id: "m3", nom: "Antoine", role: "Guitare...", description: "Une rythmique solide et entraînante.", photoUrl: "" }
];
