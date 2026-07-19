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
  descriptionLongue: `T-RAD (prononcez Ti RAD) 
  Né il y a à peine un semestre, T-RAD rassemble des musiciens venus d'horizons différents, de parcours variés et d'univers musicaux parfois éloignés. 
  Ce qui nous unit ? 
  L'envie de faire danser, de créer de belles rencontres et de partager l'énergie unique des bals folk.
  `,
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
  c'est tout nouveau !!! C'est la rencontre de 3 musiciens d'origine diverses voulant proposer de belles musiques à danser traditionnelles et folk.
  
Inspiré par les collectifs de musiques à danser, le groupe propose un répertoire cadencé, oscillant entre folk récent et airs traditionnels revisités.

Que vous soyez danseur chevronné ou simple auditeur, préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,
  design: {
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
  }
};

export const NEWS_INFO: NewsItem = {
  afficherSurAccueil: true,
  titre: "Un nouveau né !",
  description: `À peine six mois d'existence et déjà la tête pleine de projets !
  
T-RAD est une jeune formation née de la rencontre de musiciens issus de groupes, de styles et d'expériences variés. 

Chacun apporte sa couleur, son énergie et sa sensibilité pour construire un univers commun : une musique vivante, authentique et pensée pour la danse.
Notre ambition est simple : faire circuler l'émotion, l'énergie et le plaisir du bal, en proposant des arrangements soignés et une musique qui donne envie de rejoindre la ronde dès les premières notes.

La route est encore jeune, mais l'enthousiasme est immense. De nouveaux morceaux, de nouveaux bals et de nouvelles rencontres sont déjà en préparation.`,
  lien: "",
  image: "https://lh3.googleusercontent.com/d/1GhVjVGi1KHbEYaeXsH1qcBiDrG2HW6mG
"
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
  { id: "m1", nom: "Naomi", role: "Flûte traversière, Toy-Piano, Chant", description: "Musicienne accomplie et bourrée de talent, elle vous enchantera de ses melodies", photoUrl: "https://lh3.googleusercontent.com/d/1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP" },
  { id: "m2", nom: "Florian", role: "Viole de Gambe, Percussions", description: "Maitre du BaROCK, il navigue entre les styles ", photoUrl: "https://lh3.googleusercontent.com/d/1ms_sh0ozVc7u6syCXzW7MDSfTQ2UA81k" },
  { id: "m3", nom: "Antoine", role: "Guitare, Bouzouki, Chant", description: "Troubadour-Surfeur de la vague harmonique et rythmique.", photoUrl: "https://lh3.googleusercontent.com/d/1lqwIb3a7Wr2xFjhOuz_PbOVZ2v7feEwy" }
];
