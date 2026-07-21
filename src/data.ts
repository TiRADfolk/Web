// src/data.ts

import { EvenementAgenda, Activite, MediaItem, MembreTrombinoscope, SiteInfos } from './types';

// Récupération de l'ID depuis les variables d'environnement Vercel
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// Helper pour construire les URLs d'export CSV pour chaque onglet
const getCsvUrl = (gid: string) =>
  `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv&gid=${gid}`;

// Fonction générique pour récupérer et analyser les CSV de Google Sheets sans cache
async function fetchCSV(gid: string): Promise<string[][]> {
  try {
    const url = getCsvUrl(gid);
    
    // { cache: 'no-store' } désactive le cache Next.js / Vercel pour garantir des données fraîches
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
      console.error(`Erreur HTTP lors de la récupération du GID ${gid}: status ${res.status}`);
      return [];
    }

    const text = await res.text();
    return parseCSV(text);
  } catch (error) {
    console.error(`Erreur lors du chargement du CSV (GID ${gid}):`, error);
    return [];
  }
}

// Analyseur simple de lignes CSV (gestion des guillemets et des virgules)
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
 * 1. INFORMATIONS DU SITE (ONGLET GID: 0 par exemple)
 * ============================================================================ */
export async function getSiteInfos(): Promise<SiteInfos> {
  const rows = await fetchCSV("0"); // Remplacez "0" par le GID exact de votre onglet 'Infos' si différent
  
  const defaultInfos: SiteInfos = {
    nom: "T-RAD",
    descriptionCourte: "Groupe de musique trad & bal folk.",
    descriptionLongue: "Bienvenue dans l'univers de T-RAD !",
    presentationTitre: "Qui sommes-nous ?",
    presentationTexte: "Présentation à venir.",
    emailContact: "contact@trad.fr",
    telephone: "",
    reseauxSociaux: [],
  };

  if (rows.length < 2) return defaultInfos;

  // On transforme un tableau clé/valeur ou des colonnes selon la structure de votre feuille
  const mapData: Record<string, string> = {};
  rows.forEach((row) => {
    if (row[0] && row[1]) {
      mapData[row[0].toLowerCase()] = row[1];
    }
  });

  return {
    nom: mapData['nom'] || defaultInfos.nom,
    descriptionCourte: mapData['descriptioncourte'] || defaultInfos.descriptionCourte,
    descriptionLongue: mapData['descriptionlongue'] || defaultInfos.descriptionLongue,
    presentationTitre: mapData['presentationtitre'] || defaultInfos.presentationTitre,
    presentationTexte: mapData['presentationtexte'] || defaultInfos.presentationTexte,
    emailContact: mapData['emailcontact'] || defaultInfos.emailContact,
    telephone: mapData['telephone'] || defaultInfos.telephone,
    reseauxSociaux: [
      { nom: 'Facebook', url: mapData['facebook'] || '#', icone: '🌐' },
      { nom: 'Instagram', url: mapData['instagram'] || '#', icone: '📷' },
      { nom: 'YouTube', url: mapData['youtube'] || '#', icone: '▶️' },
    ].filter((res) => res.url && res.url !== '#'),
  };
}

/* ============================================================================
 * 2. AGENDA / PROCHAINES DATES
 * ============================================================================ */
export async function getProchainesDates(): Promise<EvenementAgenda[]> {
  // Remplacez le GID par celui correspondant à votre onglet Agenda dans Google Sheets
  const rows = await fetchCSV("123456789"); 

  if (rows.length < 2) return [];

  // On ignore la première ligne (headers)
  return rows.slice(1).filter(r => r[0] && r[1]).map((row, index) => ({
    id: `evt-${index}-${Date.now()}`,
    date: row[0] || "",
    title: row[1] || "",
    location: row[2] || "",
    lieuPrecise: row[3] || "",
    description: row[4] || "",
    estPublic: row[5]?.toLowerCase() === "true" || row[5]?.toLowerCase() === "oui",
    tarif: row[6] || "",
    logoEvenement: row[7] || "",
    boutons: row[8] ? [{ label: "En savoir plus", url: row[8] }] : [],
  }));
}

/* ============================================================================
 * 3. ACTIVITÉS
 * ============================================================================ */
export async function getActivites(): Promise<Activite[]> {
  // Remplacez le GID par celui de votre onglet Activités
  const rows = await fetchCSV("987654321"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[0]).map((row, index) => ({
    id: `act-${index}`,
    titre: row[0] || "",
    description: row[1] || "",
    image: row[2] || "",
  }));
}

/* ============================================================================
 * 4. TROMBINOSCOPE / MEMBRES
 * ============================================================================ */
export async function getTrombinoscope(): Promise<MembreTrombinoscope[]> {
  // Remplacez le GID par celui de votre onglet Trombinoscope
  const rows = await fetchCSV("1122334455"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[0]).map((row, index) => ({
    id: `membre-${index}`,
    nom: row[0] || "",
    role: row[1] || "",
    description: row[2] || "",
    photoUrl: row[3] || "",
  }));
}

/* ============================================================================
 * 5. MÉDIAS (VIDÉOS, AUDIOS, PHOTOS)
 * ============================================================================ */
export async function getMedias(): Promise<MediaItem[]> {
  // Remplacez le GID par celui de votre onglet Médias
  const rows = await fetchCSV("5544332211"); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[0] && r[1]).map((row, index) => ({
    id: `media-${index}`,
    type: (row[0]?.toLowerCase() as 'video' | 'audio' | 'photo') || 'video',
    titre: row[1] || "",
    url: row[2] || "",
    miniature: row[3] || "",
  }));
}
