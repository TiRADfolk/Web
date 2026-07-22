// src/types.ts

export interface SiteDesign {
  heroBackgroundImage?: string;
  overlayOpacity?: string;
}

export interface ReseauSocial {
  nom: string;
  url: string;
  icone: string;
}

export interface SiteInfos {
  nom: string;
  slogan?: string;
  logo?: string;
  descriptionLongue: string;
  emailContact: string;
  telephone: string;
  reseauxSociaux: ReseauSocial[];
  lienMedia?: string;
  presentationTitre: string;
  presentationTexte: string;
  design?: SiteDesign;
}

export interface NewsItem {
  id: string;
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
  lieuPrecise?: string;
  description: string;
  estPublic: boolean;
  tarif: boolean | string;
  logoEvenement?: string; // Emoji OU URL d'image
  boutons: BoutonAgenda[];
}

export interface MembreTrombi {
  id: string;
  nom: string;
  role: string;
  description: string;
  photoUrl: string;
}

export interface MediaItem {
  id: string;
  titre: string;
  type: 'video' | 'audio' | 'photo';
  url: string;
  miniature?: string;
}
