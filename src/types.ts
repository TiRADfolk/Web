// src/types.ts

// 1. Agenda / Événements
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

// 2. Activités
export interface Activite {
  id: string;
  titre: string;
  description: string;
  image?: string;
}

// 3. Médias
export interface MediaItem {
  id: string;
  titre: string;
  type: 'video' | 'audio' | 'photo';
  url: string;
  miniature?: string;
}

// 4. Actualités / News
export interface NewsItem {
  id: string;
  titre: string;
  date?: string;
  contenu?: string;
  image?: string;
  lien?: string;
}

// 5. Trombinoscope / Membres
export interface MembreTrombinoscope {
  id: string;
  nom: string;
  role: string;
  description?: string;
  photoUrl?: string;
}

// Alias de compatibilité
export type MembreTrombi = MembreTrombinoscope;

// 6. Informations Générales du Site
export interface SiteInfos {
  nom: string;
  slogan?: string;
  logo?: string;
  lienMedia?: string; // ← Ajouté spécifiquement
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
  
  // 🛡️ SÉCURITÉ ANTI-ERREUR : Permet d'accepter toute autre propriété provenant de mapData
  [key: string]: any; 
}
