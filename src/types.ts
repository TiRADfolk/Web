// src/types.ts

export interface EvenementAgenda {
  id: string;
  title: string;
  date: string;
  location?: string;
  lieuPrecise?: string;
  description?: string;
  estPublic?: boolean;
  tarif?: boolean | string;
  logoEvenement?: string;
  boutons?: Array<{
    label: string;
    url: string;
  }>;
}

export interface Activite {
  id: string;
  titre: string;
  description: string;
  image?: string;
}

export interface MediaItem {
  id: string;
  titre: string;
  type: 'video' | 'audio' | 'photo';
  url: string;
  miniature?: string;
}

export interface NewsItem {
  id: string;
  titre: string;
  date?: string;
  contenu?: string;
  image?: string;
  lien?: string;
}

export interface MembreTrombinoscope {
  id: string;
  nom: string;
  role: string;
  description?: string;
  photoUrl?: string;
}

export type MembreTrombi = MembreTrombinoscope;

export interface SiteInfos {
  nom: string;
  slogan?: string;
  logo?: string;
  lienMedia?: string;
  descriptionLongue?: string;
  emailContact?: string;
  telephone?: string;
  presentationTitre?: string;
  presentationTexte?: string;
  reseauxSociaux?: Array<{
    nom: string;
    url: string;
    icone: string;
  }>;
  [key: string]: any;
}
