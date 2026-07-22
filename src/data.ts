// src/data.ts

import { EvenementAgenda, Activite, MediaItem, SiteInfos } from './types';

// Identifiant du Google Sheet (variable Vercel avec fallback)
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// Helper pour générer l'URL d'export CSV
const getCsvUrl = (gid: string) =>
  `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv&gid=${gid}`;

// Lecture du CSV sans cache (fetch dynamique)
async function fetchCSV(gid: string): Promise<string[][]> {
  try {
    const url = getCsvUrl(gid);
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
      console.error(`Erreur lors de la récupération du GID ${gid}: status ${res.status}`);
      return [];
    }

    const text = await res.text();
    return parseCSV(text);
  } catch (error) {
    console.error(`Erreur réseau (GID ${gid}):`, error);
    return [];
  }
}

// Parser CSV pour gérer les guillemets et virgules
function parseCSV(text: string): string[][] {
  const lines = text.split(/\r?\n/);
  return lines.map((line) => {
    const result: string[] = [];
    let cur = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  });
}

/* ============================================================================
 * 1. INFOS SITE (Colonnes : Cle | Valeur)
 * ============================================================================ */
export async function getSiteInfos(): Promise<SiteInfos> {
  const rows = await fetchCSV("0"); // GID de l'onglet Infos_Site
  
  const mapData: Record<string, string> = {};
  rows.forEach((row) => {
    if (row[0] && row[1]) {
      mapData[row[0].trim().toLowerCase()] = row[1].trim();
    }
  });

  return {
    nom: mapData['nom'] || "T-RAD",
    descriptionLongue: mapData['descriptionlongue'] || mapData['description'] || "Groupe de musique trad & bal folk.",
    presentationTitre: mapData['presentationtitre'] || "Qui sommes-nous ?",
    presentationTexte: mapData['presentationtexte'] || "",
    emailContact: mapData['emailcontact'] || "contact@trad.fr",
    telephone: mapData['telephone'] || "",
    reseauxSociaux: [
      { nom: 'Facebook', url: mapData['facebook'] || '', icone: '🌐' },
      { nom: 'Instagram', url: mapData['instagram'] || '', icone: '📷' },
      { nom: 'YouTube', url: mapData['youtube'] || '', icone: '▶️' },
    ].filter((res) => res.url && res.url !== ''),
  } as SiteInfos;
}

/* ============================================================================
 * 2. NEWS (Colonnes : id | afficherSurAccueil | titre | description | image | lien)
 * ============================================================================ */
export async function getNewsInfo(): Promise<any[]> {
  // Remplacer par le GID de l'onglet News
  const rows = await fetchCSV("0"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[2]).map((row, index) => ({
    id: row[0] || `news-${index}`,
    afficherSurAccueil: row[1]?.toLowerCase() === "true" || row[1]?.toLowerCase() === "oui",
    titre: row[2] || "",
    description: row[3] || "",
    image: row[4] || "",
    lien: row[5] || "",
  }));
}

/* ============================================================================
 * 3. ACTIVITÉS (Colonnes : id | titre | description | image)
 * ============================================================================ */
export async function getActivites(): Promise<Activite[]> {
  // Remplacer par le GID de l'onglet Activites
  const rows = await fetchCSV("0"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[1]).map((row, index) => ({
    id: row[0] || `act-${index}`,
    titre: row[1] || "",
    description: row[2] || "",
    image: row[3] || "",
  }));
}

/* ============================================================================
 * 4. AGENDA (Colonnes : id | date | title | location | lieuPrecise | description | estPublic | tarif | logoEvenement | lienInfo | lienResa | lienPlan)
 * ============================================================================ */
export async function getProchainesDates(): Promise<EvenementAgenda[]> {
  // Remplacer par le GID de l'onglet Agenda
  const rows = await fetchCSV("0"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[1] && r[2]).map((row, index) => {
    const boutons = [];
    if (row[9]) boutons.push({ label: "Infos", url: row[9] });
    if (row[10]) boutons.push({ label: "Réservation", url: row[10] });
    if (row[11]) boutons.push({ label: "Plan", url: row[11] });

    return {
      id: row[0] || `evt-${index}`,
      date: row[1] || "",
      title: row[2] || "",
      location: row[3] || "",
      lieuPrecise: row[4] || "",
      description: row[5] || "",
      estPublic: row[6]?.toLowerCase() === "true" || row[6]?.toLowerCase() === "oui",
      tarif: row[7] || "",
      logoEvenement: row[8] || "",
      boutons: boutons,
    };
  });
}

/* ============================================================================
 * 5. TROMBINOSCOPE (Colonnes : id | nom | role | description | photoUrl)
 * ============================================================================ */
export async function getTrombinoscope(): Promise<any[]> {
  // Remplacer par le GID de l'onglet Trombinoscope
  const rows = await fetchCSV("0"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[1]).map((row, index) => ({
    id: row[0] || `membre-${index}`,
    nom: row[1] || "",
    role: row[2] || "",
    description: row[3] || "",
    photoUrl: row[4] || "",
  }));
}

/* ============================================================================
 * 6. MEDIAS (Colonnes : id | titre | type | url | miniature)
 * ============================================================================ */
export async function getMedias(): Promise<MediaItem[]> {
  // Remplacer par le GID de l'onglet Medias
  const rows = await fetchCSV("0"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[1] && r[3]).map((row, index) => ({
    id: row[0] || `media-${index}`,
    titre: row[1] || "",
    type: (row[2]?.toLowerCase() as 'video' | 'audio' | 'photo') || 'video',
    url: row[3] || "",
    miniature: row[4] || "",
  }));
}
