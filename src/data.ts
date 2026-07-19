export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  logo: "https://drive.google.com/thumbnail?id=1PBXFwOUp3Fn4dbYAlsimg_C_cUyFuBfZ&sz=w2000",
  
  // Description courte utilisée sur la page d'accueil (gère les sauts de ligne grâce aux `backticks`)
  descriptionLongue: `T-RAD (prononcez Ti RAD) inspirés des parquets de bal.
Préparez-vous à voyager entre mélodies envoûtantes et rythmiques énergiques !`,
  
  // Contacts et réseaux
  emailContact: "tiradfolk@gmail.com",
  telephone: "", // Laissez vide "" si vous ne voulez pas l'afficher
  reseauxSociaux: [
    { nom: "Bientôt Facebook", url: "https://facebook.com/tiradfolk", icone: "👥" },
    { nom: "Bientôt Instagram", url: "https://instagram.com/tiradfolk", icone: "📸" },
    { nom: "Bientôt YouTube", url: "https://youtube.com/c/tiradfolk", icone: "📺" }
  ],

  // Textes modifiables pour la page /presentation
  presentationTitre: "Qui sommes-nous ?",
  presentationTexte: `T-RAD (prononcez Ti RAD) c'est l'énergie brute des parquets de bal folk alliée à la douceur des musiques traditionnelles.

Inspiré par les collectifs de musiques à danser, le groupe propose un répertoire cadencé, oscillant entre folk récent et airs traditionnels revisités. 

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
    nom: "Naomi",
    role: "Flûte traversière, Toy-Piano et Chant",
    description: "Musicienne accomplie et bourrée de talent. Elle vous enchantera de ses mélodies.",
    photoUrl: "https://drive.google.com/thumbnail?id=1ag3fc_Xn0Gl2ESWCrbjP7xu0mCiaGDDP&sz=w2000"
  },
  {
    id: "m2", // <-- CORRIGÉ : Changé de "m3" à "m2" pour suivre la logique
    nom: "Florian",
    role: "Viole de Gambe et Percussions",
    description: "Un maitre dans le BaROCK, il navigue entre les styles.",
    photoUrl: "https://drive.google.com/thumbnail?id=1ms_sh0ozVc7u6syCXzW7MDSfTQ2UA81k&sz=w1000"
  },
  {
    id: "m3", // <-- CORRIGÉ : Remplacé "m1" par "m3" pour avoir un ID unique !
    nom: "Antoine",
    role: "Guitare / Bouzouki",
    description: "Surfeur troubadour de la rythmique, il vous portera sur les vagues harmoniques.",
    photoUrl: "https://drive.google.com/thumbnail?id=1lqwIb3a7Wr2xFjhOuz_PbOVZ2v7feEwy&sz=w2000"
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
      { label: "Gps", url: "https://www.bing.com/ck/a?!&&p=0842dffa8252bf1caf036e4dbbee0b425ef191a3aad2bb8df8a6c5196969320aJmltdHM9MTc4NDQxOTIwMA&ptn=3&ver=2&hsh=4&fclid=0232c838-8459-642e-2542-de25850365e7&u=a1L21hcHM_Jm1lcGk9MH5-RW1iZWRkZWR-QWRkcmVzc19MaW5rJnR5PTE4JnE9TGElMjBGZXJtZSUyMGQlMjdlbiUyMEhhdXQmc3M9eXBpZC5ZTjIxMTE4QkE1NDUyMzAzODUmcHBvaXM9NTAuNjM4NzYzNDI3NzM0Mzc1XzMuMTMwMTg2Nzk2MTg4MzU0NV9MYSUyMEZlcm1lJTIwZCUyN2VuJTIwSGF1dF9ZTjIxMTE4QkE1NDUyMzAzODV-JmNwPTUwLjYzODc2M34zLjEzMDE4NyZ2PTImc1Y9MSZGT1JNPU1QU1JQTA" },
      { label:
