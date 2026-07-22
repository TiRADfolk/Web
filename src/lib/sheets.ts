// src/lib/sheets.ts

import { 
  SiteInfos, 
  NewsItem, 
  Activite, 
  EvenementAgenda, 
  MembreTrombi, 
  MediaItem 
} from '../types';

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// Fonction générique pour récupérer un onglet au format JSON via l'API publique de Google Sheets
async function fetchSheetTab(tabName: string): Promise<Record<string, any>[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // Rafraîchit les données toutes les 60 secondes
    
    if (!res.ok) return [];

    const text = await res.text();
    // Extraction du JSON nettoyé depuis la réponse Google
    const jsonString = text.substring(47, text.length - 2);
    const data = JSON.parse(jsonString);

    if (!data.table || !data.table.rows) return [];

    const headers = data.table.cols.map((col: any) => col ? (col.label || col.id) : "");
    
    return data.table.rows.map((row: any) => {
      const rowObject: Record<string, any> = {};
      row.c?.forEach((cell: any, index: number) => {
        const key = headers[index] || `col_${index}`;
        rowObject[key] = cell ? cell.v : "";
      });
      return rowObject;
    });
  } catch (error) {
    console.error(`Erreur de chargement pour l'onglet ${tabName}:`, error);
    return [];
  }
}

// 1. Infos du Site
export async function getSiteInfos(): Promise<SiteInfos> {
  const rows = await fetchSheetTab("Infos_Site");
  const infos: Record<string, any> = {};
  
  rows.forEach((row) => {
    if (row.Cle) {
      infos[row.Cle.toString().trim().toLowerCase()] = row.Valeur || "";
    }
  });

  return {
    nom: infos.nom || "T-RAD",
    slogan: infos.slogan || "",
    logo: infos.logo || "",
    descriptionLongue: infos.descriptionlongue || infos.description || "Groupe de musique trad & bal folk.",
    emailContact: infos.emailcontact || "contact@trad.fr",
    telephone: infos.telephone || "",
    reseauxSociaux: [
      { nom: 'Facebook', url: infos.facebook || '', icone: '🌐' },
      { nom: 'Instagram', url: infos.instagram || '', icone: '📷' },
      { nom: 'YouTube', url: infos.youtube || '', icone: '▶️' },
    ].filter((res) => res.url !== ''),
    lienMedia: infos.lienmedia || "",
    presentationTitre: infos.presentationtitre || "Qui sommes-nous ?",
    presentationTexte: infos.presentationtexte || "",
    design: {
      heroBackgroundImage: infos.herobackgroundimage || "",
      overlayOpacity: infos.overlayopacity || "bg-black/60",
    }
  };
}

// 2. News
export async function getNewsInfo(): Promise<NewsItem[]> {
  const rows = await fetchSheetTab("News");
  return rows.map((r, index) => ({
    id: String(r.id || `news-${index}`),
    afficherSurAccueil: String(r.afficherSurAccueil).toUpperCase() === "TRUE" || String(r.afficherSurAccueil).toUpperCase() === "OUI",
    titre: String(r.titre || ""),
    description: String(r.description || ""),
    image: String(r.image || ""),
    lien: String(r.lien || ""),
  }));
}

// 3. Activités
export async function getActivites(): Promise<Activite[]> {
  const rows = await fetchSheetTab("Activites");
  return rows
    .filter((r) => r.titre && String(r.titre).trim() !== "")
    .map((r, index) => ({
      id: String(r.id || `act-${index}`),
      titre: String(r.titre || ""),
      description: String(r.description || ""),
      image: String(r.image || ""),
    }));
}

// 4. Agenda
export async function getProchainesDates(): Promise<EvenementAgenda[]> {
  const rows = await fetchSheetTab("Agenda");
  return rows.map((r, index) => ({
    id: String(r.id || `evt-${index}`),
    date: String(r.date || ""),
    title: String(r.title || ""),
    location: String(r.location || ""),
    lieuPrecise: String(r.lieuPrecise || ""),
    description: String(r.description || ""),
    estPublic: String(r.estPublic).toUpperCase() === "TRUE" || String(r.estPublic).toUpperCase() === "OUI",
    tarif: r.tarif || "non",
    logoEvenement: String(r.logoEvenement || ""),
    boutons: [
      r.lienInfo ? { label: "Informations", url: String(r.lienInfo) } : null,
      r.lienResa ? { label: "Réserver", url: String(r.lienResa) } : null,
      r.lienPlan ? { label: "Plan d'accès", url: String(r.lienPlan) } : null,
    ].filter((b): b is { label: string; url: string } => b !== null),
  }));
}

// 5. Trombinoscope
export async function getTrombinoscope(): Promise<MembreTrombi[]> {
  const rows = await fetchSheetTab("Trombinoscope");
  return rows.map((r, index) => ({
    id: String(r.id || `membre-${index}`),
    nom: String(r.nom || ""),
    role: String(r.role || ""),
    description: String(r.description || ""),
    photoUrl: String(r.photoUrl || ""),
  }));
}

// 6. Médias
export async function getMedias(): Promise<MediaItem[]> {
  const rows = await fetchSheetTab("Medias");
  return rows.map((r, index) => ({
    id: String(r.id || `media-${index}`),
    titre: String(r.titre || ""),
    type: (String(r.type).toLowerCase() as 'video' | 'audio' | 'photo') || 'video',
    url: String(r.url || ""),
    miniature: String(r.miniature || ""),
  }));
}
