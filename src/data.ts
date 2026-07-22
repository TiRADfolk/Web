// src/data.ts

import { EvenementAgenda, Activite, MediaItem, SiteInfos } from './types';

// Identifiant du Google Sheet (variable Vercel avec fallback)
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// --- CONFIGURATION DES GID DES ONGLETS ---
const GID_INFOS_SITE = "2031827731";
const GID_NEWS = "1224279643";
const GID_ACTIVITES = "89403836";
const GID_AGENDA = "1112528283";
const GID_TROMBINOSCOPE = "1303650509";
const GID_MEDIAS = "513021021";

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
 * 1. INFOS SITE 
 * Structure Sheet : [Infos_Site] | Cle (row[1]) | Valeur (row[2])
 * ============================================================================ */
export async function getSiteInfos(): Promise<SiteInfos> {
  const rows = await fetchCSV(GID_INFOS_SITE);
  
  const mapData: Record<string, string> = {};
  rows.forEach((row) => {
    // row[1] = Cle, row[2] = Valeur (car row[0] est 'Infos_Site')
    const key = row[1] || row[0];
    const val = row[2] || row[1];
    if (key && val) {
      mapData[key.trim().toLowerCase()] = val.trim();
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
 * 2. NEWS 
 * Structure Sheet : [News] | id(row[1]) | afficherSurAccueil(row[2]) | titre(row[3]) | description(row[4]) | image(row[5]) | lien(row[6])
 * ============================================================================ */
export async function getNewsInfo(): Promise<any[]> {
  const rows = await fetchCSV(GID_NEWS); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[3] || r[2]).map((row, index) => ({
    id: row[1] || `news-${index}`,
    afficherSurAccueil: row[2]?.toLowerCase() === "true" || row[2]?.toLowerCase() === "oui",
    titre: row[3] || "",
    description: row[4] || "",
    image: row[5] || "",
    lien: row[6] || "",
  }));
}

/* ============================================================================
 * 3. ACTIVITÉS 
 * Structure Sheet : [Activites] | id(row[1]) | titre(row[2]) | description(row[3]) | image(row[4])
 * ============================================================================ */
export async function getActivites(): Promise<Activite[]> {
  const rows = await fetchCSV(GID_ACTIVITES); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[2] || r[1]).map((row, index) => ({
    id: row[1] || `act-${index}`,
    titre: row[2] || "",
    description: row[3] || "",
    image: row[4] || "",
  }));
}

/* ============================================================================
 * 4. AGENDA 
 * Structure Sheet : [Agenda] | id(1) | date(2) | title(3) | location(4) | lieuPrecise(5) | description(6) | estPublic(7) | tarif(8) | logoEvenement(9) | lienInfo(10) | lienResa(11) | lienPlan(12)
 * ============================================================================ */
export async function getProchainesDates(): Promise<EvenementAgenda[]> {
  const rows = await fetchCSV(GID_AGENDA); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => (r[2] && r[3]) || (r[1] && r[2])).map((row, index) => {
    const boutons = [];
    if (row[10]) boutons.push({ label: "Infos", url: row[10] });
    if (row[11]) boutons.push({ label: "Réservation", url: row[11] });
    if (row[12]) boutons.push({ label: "Plan", url: row[12] });

    return {
      id: row[1] || `evt-${index}`,
      date: row[2] || "",
      title: row[3] || "",
      location: row[4] || "",
      lieuPrecise: row[5] || "",
      description: row[6] || "",
      estPublic: row[7]?.toLowerCase() === "true" || row[7]?.toLowerCase() === "oui",
      tarif: row[8] || "",
      logoEvenement: row[9] || "",
      boutons: boutons,
    };
  });
}

/* ============================================================================
 * 5. TROMBINOSCOPE 
 * Structure Sheet : [Trombinoscope] | id(row[1]) | nom(row[2]) | role(row[3]) | description(row[4]) | photoUrl(row[5])
 * ============================================================================ */
export async function getTrombinoscope(): Promise<any[]> {
  const rows = await fetchCSV(GID_TROMBINOSCOPE); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => r[2] || r[1]).map((row, index) => ({
    id: row[1] || `membre-${index}`,
    nom: row[2] || "",
    role: row[3] || "",
    description: row[4] || "",
    photoUrl: row[5] || "",
  }));
}

/* ============================================================================
 * 6. MEDIAS 
 * Structure Sheet : [Medias] | id(row[1]) | titre(row[2]) | type(row[3]) | url(row[4]) | miniature(row[5])
 * ============================================================================ */
export async function getMedias(): Promise<MediaItem[]> {
  const rows = await fetchCSV(GID_MEDIAS); 

  if (rows.length < 2) return [];

  return rows.slice(1).filter(r => (r[2] && r[4]) || (r[1] && r[3])).map((row, index) => ({
    id: row[1] || `media-${index}`,
    titre: row[2] || "",
    type: (row[3]?.toLowerCase() as 'video' | 'audio' | 'photo') || 'video',
    url: row[4] || "",
    miniature: row[5] || "",
  }));
}
