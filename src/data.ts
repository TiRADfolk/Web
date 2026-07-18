// src/data.ts 

export const SITE_INFOS = {
  nom: "T-RAD",
  slogan: "La chaleur du Folk, le souffle de la danse",
  descriptionLongue: "T-RAD (prononcez Ti RAD) inspirés des parquets de bal.préparez vous à voyager entre mélodies envoutantes et rythmiques énergiques!",
  
  // Contacts et réseaux
  emailContact: "tiradfolk@gmail.com",
  telephone: "", // Optionnel, laissez vide "" si vous ne voulez pas l'afficher
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
    date: "Novembre",
    title: "Grand Bal Folk des Compagnons du Devoir",
    location: "Villeneuve d'Ascq (59)",
    description: "Grand bal folk annuel organisé par les compagnons. ",
    estPublic: true,
    estGratuit: false, // false = Ne pas afficher le badge Gratuit
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
    description: "4 fois par an le MoederBal invite 3 groupes pour animer un dimanche après-midi de danse.",
    estPublic: true,
    estGratuit: false,
    boutons: [
      { label: "(Infos)", url: "https://r.search.yahoo.com/_ylt=Awr.rH3xDFtqRQIAgG0k24lQ;_ylu=Y29sbwNpcjIEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1785561585/RO=10/RU=https%3a%2f%2fwww.facebook.com%2fmoederbal.bal%2f/RK=2/RS=N2oV54aXhu7k9EDC6uV8v_08BxA-" }
    ]
  }
];
