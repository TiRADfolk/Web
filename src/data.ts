// src/data.ts

import { SiteInfos, NewsItem, Activite, EvenementAgenda, MembreTrombi } from "./types";

// --- INFOS SITE ---
export const SITE_INFOS: SiteInfos = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  logo: "https://drive.google.com/thumbnail?id=1PBXFwOUp3Fn4dbYAlsimg_C_cUyFuBfZ&sz=w3000",

  descriptionLongue: `T-RAD (prononcez Ti RAD) 
Né il y a à peine un semestre, T-RAD rassemble des musiciens venus d'horizons différents, de parcours variés et d'univers musicaux parfois éloignés.

                                        Ce qui nous unit ?
L'envie de faire danser, de créer de belles rencontres et de partager l'énergie unique des bals folk.`,

  emailContact: "tiradfolk@gmail.com",
  telephone: "",

  reseauxSociaux: [
    {
      nom: "Bientôt Facebook",
      url: "https://facebook.com/tiradfolk",
      icone: "👥"
    },
    {
      nom: "Bientôt Instagram",
      url: "https://instagram.com/tiradfolk",
      icone: "📸"
    },
    {
      nom: "Bientôt YouTube",
      url: "https://youtube.com/c/tiradfolk",
      icone: "📺"
    }
  ],

  lienMedia: "https://youtube.com/c/tiradfolk",

  presentationTitre: "Qui sommes-nous ?",

  presentationTexte: `T-RAD (prononcez Ti RAD)
c'est tout nouveau !!! C'est la rencontre de 3 musiciens d'origine diverses voulant proposer de belles musiques à danser traditionnelles et folk.

Inspiré par les collectifs de musiques à danser, le groupe propose un répertoire cadencé, oscillant entre folk récent et airs traditionnels revisités.
Notre ambition est simple : faire circuler l'émotion, l'énergie et le plaisir du bal, en proposant des reprises choisies et des arrangements soignés avec des musiques qui donnent envie de rejoindre la danse dès les premières notes.

Que vous soyez danseur chevronné ou simple auditeur, préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,

  design: {
    heroBackgroundImage: "",
    overlayOpacity: "bg-black/60"
  }
};

// --- NEWS ---
export const NEWS_INFO: NewsItem = {
  afficherSurAccueil: true,
  titre: "Un nouveau né !",
  description: `À peine six mois d'existence et déjà la tête pleine de projets !

T-RAD is une jeune formation née de la rencontre de musiciens issus de groupes, de styles et d'expériences variés.
Chacun apporte sa couleur, son énergie et sa sensibilité pour construire un univers commun : une musique vivante, authentique et pensée pour la danse.
C'est le début de la route, mais l'enthousiasme est immense. De nouveaux morceaux, de nouveaux bals et de nouvelles rencontres sont déjà en préparation.`,
  lien: "",
  image: "https://lh3.googleusercontent.com/d/1GhVjVGi1KHbEYaeXsH1qcBiDrG2HW6mG"
};

// --- ACTIVITÉS ---
export const ACTIVITES: Activite[] = [
  {
    id: "act-1",
    titre: "Les Bals Folk",
    description: "3 prestations en préparation d'ici la fin de l'année.",
    image: ""
  }
];

// --- AGENDA ---
export const PROCHAINES_DATES: EvenementAgenda[] = [
  {
    id: "1",
    date: "Octobre",
    title: "La première !!! Répétition Publique",
    location: "Villeneuve d'Ascq",
    lieuPrecise: "La Ferme d'en Haut - 268 rue Jules Guesde, 59650 Villeneuve d'Ascq",
    description: "Venez découvrir nos morceaux en avant-première lors de cette répétition ouverte à tous !",
    estPublic: true,
    tarif: "non",
    logoEvenement: "https://lh3.googleusercontent.com/d/1NiX6g-e1Zq2KeqgMl2vbYEQPVNJ-Gr7u", // Géré comme une URL image
    boutons: [
      { label: "Informations", url: "https://lafermedenhaut.villeneuvedascq.fr/agenda/831/evenement/77287074/le-bar-associatif-carre-rond" },
      { label: "Réserver", url: "" },
      { label: "Plan d'accès", url: "" }
    ]
  },
  {
    id: "2",
    date: "Novembre",
    title: "Grand Bal Folk des Compagnons du Devoir",
    location: "Villeneuve d'Ascq (59)",
    lieuPrecise: "Maison des Compagnons - 118 Rue de Babylone, 59491 Villeneuve-d'Ascq",
    description: "Grand bal folk annuel organisé par les compagnons.",
    estPublic: true,
    tarif: "€",
    logoEvenement: "https://lh3.googleusercontent.com/d/1IjL1ZKiyo1xl-_9LhsQrc8437TcZiKiv", // Géré comme une URL image
    boutons: [
      { label: "Billetterie", url: "" },
      { label: "Événement Facebook", url: "" },
      { label: "Site organisateur", url: "" }
    ]
  },
  {
    id: "3",
    date: "Décembre",
    title: "Le MoederBal du dimanche",
    location: "Halluin (59)",
    lieuPrecise: "À définir",
    description: "4 fois par an le MoederBal propose de découvrir sur scène et sur la piste 3 groupes.",
    estPublic: true,
    tarif: "6€",
    logoEvenement: "💃", // Géré comme un Emoji standard
    boutons: [
      { label: "Infos événement", url: "https://facebook.com/moederbal.bal/" },
      { label: "Réserver", url: "" },
      { label: "Plan d'accès", url: "" }
    ]
  }
];

// --- TROMBINOSCOPE ---
export const TROMBINOSCOPE: MembreTrombi[] = [
  {
    id: "m1",
    nom: "Naomi",
    role: "Flûte traversière, Toy-Piano, Chant",
    description: "Musicienne accomplie et bourrée de talent, elle vous enchantera de ses melodies",
    photoUrl: "https://lh3.googleusercontent.com/d/1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP"
  },
  {
    id: "m2",
    nom: "Florian",
    role: "Viole de Gambe, Percussions",
    description: "Maitre du BaROCK, il navigue entre les styles",
    photoUrl: "https://lh3.googleusercontent.com/d/1ms_sh0ozVc7u6syCXzW7MDSfTQ2UA81k"
  },
  {
    id: "m3",
    nom: "Antoine",
    role: "Guitare, Bouzouki, Chant",
    description: "Troubadour-Surfeur de la vague harmonique et rythmique.",
    photoUrl: "https://lh3.googleusercontent.com/d/1lqwIb3a7Wr2xFjhOuz_PbOVZ2v7feEwy"
  }
];
