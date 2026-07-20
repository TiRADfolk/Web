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
  lieuPrecise?: string;
  description: string;
  estPublic: boolean;
  tarif: boolean | string;
  logoEvenement?: string; // Peut être un Emoji OU une URL d'image
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
  url: string; // Lien YouTube, Soundcloud, Drive, etc.
  miniature?: string; // Image d'aperçu optionnelle
}
