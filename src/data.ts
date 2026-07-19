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
  presentationTexte: `T-RAD (prononcez Ti RAD) 
  c'est tout nouveau !!! C'est la rencontre de 3 musiciens d'origine diverses voulant proposer de belles musiques à danser traditionnelles et folk.`,
  design: {
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
  }
};

export const NEWS_INFO: NewsItem = {
  afficherSurAccueil: true,
  titre: "Un nouveau né !",
  description: "",
  lien: "",
  image: "https://drive.google.com/thumbnail?id=1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP&sz=w2000"
};

export const ACTIVITES: Activite[] = [
  {
    id: "act-1",
    titre: "Les Bals Folk",
    description: "3 prestations en préparation d'ici la fin de l'année.",
    image: ""
  },
  {
    id: "act-2",
    titre: "",
    description: "",
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
    tarif: "€", 
    logoEvenement: "💃",
    boutons: []
  },
    {
    id: "3",
    date: "Décembre",
    title: "Le MoederBal du dimanche",
    location: "Halluin (59)",
    description: "4 fois par an le MoederBal propose de découvrir sur scène et sur la piste 3 groupes.",
    estPublic: true,
    tarif: "6€", 
    logoEvenement: "💃",
    boutons: []
  }
  // Tu peux rajouter tes autres dates ici au même format...
];

// On remet le Trombinoscope que tu avais au début !
export const TROMBINOSCOPE: MembreTrombi[] = [
  { id: "m1", nom: "Naomi", role: "Flûte traversière, Toy-Piano, Chant", description: "Musicienne de talent, elle vous enchantera de ses melodies", photoUrl: "https://drive.google.com/uc?export=view&id=1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP" },
  { id: "m2", nom: "Florian", role: "Viole de Gambe, Percussions", description: "Maitre du BaROCK, il navigue entre les styles ", photoUrl: "https://drive.google.com/uc?export=view&id=1ms_sh0ozVc7u6syCXzW7MDSfTQ2UA81k" },
  { id: "m3", nom: "Antoine", role: "Guitare, Bouzouki, Chant", description: "Surfeur de la vague harmonique et rythmique.", photoUrl: "https://drive.google.com/uc?export=view&id=1lqwIb3a7Wr2xFjhOuz_PbOVZ2v7feEwy" }
];
