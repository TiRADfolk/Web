// src/data.ts

import { 
  EvenementAgenda, 
  Activite, 
  MediaItem, 
  SiteInfos, 
  NewsItem, 
  MembreTrombinoscope 
} from './types';

// ID de votre Google Sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// GIDs correspondant à vos différents onglets sur Google Drive
const GIDS = {
  INFOS_SITE: "2031827731",
  NEWS: "1224279643",
  ACTIVITES: "89403836",
  AGENDA: "1112528283",
  TROMBINOSCOPE: "1303650509",
  MEDIAS: "513021021",
};

/**
 * Récupère dynamiquement les données d'un onglet Google Sheets via l'API publique de requête
 */
async function fetchSheetData(gid: string): Promise<any[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // Revalidation automatique toutes les 60 secondes sur Vercel
    if (!res.ok) return [];

    const text = await res.text();
    const jsonString = text.substring(47, text.length - 2);
    const data = JSON.parse(jsonString);

    const cols = data.table.cols.map((c: any) => c ? c.label : '');
    const rows = data.table.rows || [];

    return rows.map((row: any) => {
      const rowData: Record<string, any> = {};
      row.c.forEach((cell: any, i: number) => {
        const colName = cols[i];
        if (colName) {
          rowData[colName] = cell ? (cell.v ?? '') : '';
        }
      });
      return rowData;
    });
  } catch (err) {
    console.error(`Erreur lors du chargement des données (GID ${gid}):`, err);
    return [];
  }
}

export async function getSiteInfos(): Promise<SiteInfos> {
  const rows = await fetchSheetData(GIDS.INFOS_SITE);
  const infos = rows[0] || {};
  return {
    nom: infos.nom || "T-RAD",
    slogan: infos.slogan || "Musique traditionnelle vivante & bals folks endiablés",
    descriptionLongue: infos.descriptionLongue || "Bienvenue sur le site officiel du groupe T-RAD.",
    emailContact: infos.emailContact || "contact@t-rad.fr",
    telephone: infos.telephone || "06 00 00 00 00",
    presentationTitre: infos.presentationTitre || "Qui sommes-nous ?",
    presentationTexte: infos.presentationTexte || "T-RAD est un groupe de musique traditionnelle...",
  };
}

export async function getProchainesDates(): Promise<EvenementAgenda[]> {
  const rows = await fetchSheetData(GIDS.AGENDA);
  return rows.map((r, index) => ({
    id: String(r.id || index),
    title: String(r.title || r.titre || ''),
    date: String(r.date || ''),
    location: String(r.location || ''),
    lieuPrecise: String(r.lieuPrecise || ''),
    description: String(r.description || ''),
    estPublic: String(r.estPublic).toLowerCase() !== 'false' && String(r.estPublic) !== '0',
    tarif: r.tarif,
    logoEvenement: String(r.logoEvenement || ''),
    boutons: [
      r.lienInfo ? { label: 'Plus d’infos', url: r.lienInfo } : null,
      r.lienResa ? { label: 'Réservation', url: r.lienResa } : null,
      r.lienPlan ? { label: 'Plan', url: r.lienPlan } : null,
    ].filter(Boolean) as Array<{ label: string; url: string }>,
  }));
}

export async function getActivites(): Promise<Activite[]> {
  const rows = await fetchSheetData(GIDS.ACTIVITES);
  return rows.map((r, i) => ({
    id: String(i),
    titre: String(r.titre || ''),
    description: String(r.description || ''),
    image: String(r.image || ''),
  }));
}

export async function getMedias(): Promise<MediaItem[]> {
  const rows = await fetchSheetData(GIDS.MEDIAS);
  return rows.map((r, i) => ({
    id: String(i),
    titre: String(r.titre || ''),
    type: r.type as 'video' | 'audio' | 'photo',
    url: String(r.url || ''),
    miniature: String(r.miniature || ''),
  }));
}

export async function getTrombinoscope(): Promise<MembreTrombinoscope[]> {
  const rows = await fetchSheetData(GIDS.TROMBINOSCOPE);
  return rows.map((r, i) => ({
    id: String(i),
    nom: String(r.nom || ''),
    role: String(r.role || ''),
    description: String(r.description || ''),
    photoUrl: String(r.photoUrl || ''),
  }));
}

export async function getNews(): Promise<NewsItem[]> {
  const rows = await fetchSheetData(GIDS.NEWS);
  return rows.map((r, i) => ({
    id: String(i),
    titre: String(r.titre || ''),
    description: String(r.description || ''),
    image: String(r.image || ''),
    lien: String(r.lien || ''),
  }));
}
