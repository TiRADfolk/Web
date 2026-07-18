// src/data.ts 

export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  
  // Description courte utilisée sur la page d'accueil (gère les sauts de ligne grâce aux `backticks`)
  descriptionLongue: `T-RAD (prononcez Ti RAD) inspirés des parquets de bal.
Préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,
  
  // Contacts et réseaux
  emailContact: "tiradfolk@gmail.com",
  telephone: "06 00 00 00 00", // Laissez vide "" si vous ne voulez pas l'afficher
  reseauxSociaux: [
    { nom: "Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],

  // Textes modifiables pour la page /presentation
  presentationTitre: "Qui sommes-nous ?",
  presentationTexte: `T-RAD (prononcez Ti RAD) c'est l'énergie brute des parquets de bal folk alliée à la douceur des musiques traditionnelles.

Inspiré par les collectifs de musiques à danser, le groupe propose un répertoire cadencé, oscillant entre compositions originales et airs traditionnels revisités. 

Que vous soyez danseur chevronné ou simple auditeur, préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,

  // Design & Visuels configurables
  design: {
    // 💡 "" = Fond uni dégradé (sécurisé & ultra-optimisé). 
    // 💡 "/images/votre-image.webp" = Affichera l'image de fond.
    heroBackgroundImage: "", 
    overlayOpacity: "bg-black/60", 
  }
};

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
  estPublic: boolean;  // true = Badge Public | false = Badge Privé
  estGratuit: boolean; // true = Badge Gratuit / Entrée Libre
  boutons: BoutonAgenda[];
}

// --- STRUCTURE DU TROMBINOSCOPE ---
export interface MembreTrombi {
  id: string;
  nom: string;
  role: string;
  description: string;
  photoUrl: string;
}

// --- DONNÉES DU TROMBINOSCOPE (LES MEMBRES) ---
export const TROMBINOSCOPE: MembreTrombi[] = [
  {
    id: "m1",
    nom: "Nom du Premier Membre",
    role: "Accordéon diatonique",
    description: "Passionné par les rythmiques de bourrées et les mélodies traditionnelles.",
    photoUrl: "/images/trombi-membre1.webp" // 💡 Mettez le fichier .webp dans public/images/
  },
  {
    id: "m2",
    nom: "Nom du Deuxième Membre",
    role: "Violon",
    description: "Fait vibrer les cordes pour guider les pas des danseurs sur le parquet.",
    photoUrl: "/images/trombi-membre2.webp"
  },
  {
    id: "m3",
    nom: "Nom du Troisième Membre",
    role: "Guitare / Bouzouki",
    description: "Apporte l'énergie et la couleur harmonique indispensable au collectif.",
    photoUrl: "/images/trombi-membre3.webp"
  }
];

// --- DONNÉES DE L'AGENDA (VOS PROCHAINES DATES) ---
export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "Octobre",
    title: "La première !!! Répétition Publique",
    location: "Villeneuve d'Ascq - Ferme d'en haut",
    description: "Venez découvrir nos morceaux en avant-première lors de cette répétition ouverte à tous ! L'occasion idéale pour se rencontrer et échanger.",
    estPublic: true,
    estGratuit: true,
    boutons: [
      { label: "Billetterie", url: "https://www.billetweb.fr/exemple1" },
      { label: "Événement Facebook", url: "https://facebook.com/events/123" },
      { label: "Site de l'organisateur", url: "https://cutt.ly/exemple" }
    ]
  },
  {
    id: "2",
    date: "Novembre",
    title: "Grand Bal Folk des Compagnons du Devoir",
    location: "Villeneuve d'Ascq (59)",
    description: "Grand bal folk annuel organisé par les compagnons. Initiation aux danses traditionnelles en début de soirée.",
    estPublic: true,
    estGratuit: false,
    boutons: [
      { label: "Réserver ma place", url: "https://www.billetweb.fr/exemple2" },
      { label: "Infos Pratiques", url: "https://www.google.com/maps" }
    ]
  },
  {
    id: "3",
    date: "Décembre",
    title: "MoederBal du dimanche",
    location: "Halluin (59)",
    description: "4 fois par an le MoederBal invite 3 groupes pour animer un dimanche après-midi de danse intensive.",
    estPublic: true,
    estGratuit: false,
    boutons: [
      { label: "Infos Événement", url: "https://facebook.com/moederbal.bal/" }
    ]
  }
];
