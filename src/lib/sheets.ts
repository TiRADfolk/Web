// src/lib/sheets.ts

const SHEET_ID = "1zpJNcWwLhaYSJTvQg5lYlpd_TdehGykxjLG85r74oGk";

// Fonction générique pour récupérer un onglet au format JSON via l'API publique de Google Sheets
async function fetchSheetTab(tabName: string) {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
    const res = await fetch(url, { next: { revalidate: 60 } }); // Rafraîchit les données toutes les 60 secondes
    
    if (!res.ok) return [];

    const text = await res.text();
    // Inscription du JSON nettoyé depuis la réponse Google
    const jsonString = text.substring(47, text.length - 2);
    const data = JSON.parse(jsonString);

    if (!data.table || !data.table.rows) return [];

    const headers = data.table.cols.map((col: any) => col.label || col.id);
    
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
export async function getSiteInfos() {
  const rows = await fetchSheetTab("Infos_Site");
  const infos: Record<string, any> = {};
  
  rows.forEach((row) => {
    if (row.Cle) {
      infos[row.Cle] = row.Valeur || "";
    }
  });

  return {
    nom: infos.nom || "T-RAD",
    slogan: infos.slogan || "",
    logo: infos.logo || "",
    descriptionLongue: infos.descriptionLongue || "",
    emailContact: infos.emailContact || "",
    telephone: infos.telephone || "",
    lienMedia: infos.lienMedia || "",
    presentationTitre: infos.presentationTitre || "Qui sommes-nous ?",
    presentationTexte: infos.presentationTexte || "",
    design: {
      heroBackgroundImage: infos.heroBackgroundImage || "",
      overlayOpacity: infos.overlayOpacity || "bg-black/60",
    }
  };
}

// 2. News
export async function getNewsInfo() {
  const rows = await fetchSheetTab("News");
  if (rows.length === 0) return null;
  const first = rows[0];

  return {
    afficherSurAccueil: String(first.afficherSurAccueil).toUpperCase() === "TRUE",
    titre: first.titre || "",
    description: first.description || "",
    image: first.image || "",
    lien: first.lien || "",
  };
}

// 3. Activités
export async function getActivites() {
  const rows = await fetchSheetTab("Activites");
  return rows
    .filter((r) => r.titre && r.titre.trim() !== "")
    .map((r) => ({
      id: String(r.id || Math.random()),
      titre: r.titre,
      description: r.description || "",
      image: r.image || "",
    }));
}

// 4. Agenda
export async function getProchainesDates() {
  const rows = await fetchSheetTab("Agenda");
  return rows.map((r) => ({
    id: String(r.id || Math.random()),
    date: r.date || "",
    title: r.title || "",
    location: r.location || "",
    lieuPrecise: r.lieuPrecise || "",
    description: r.description || "",
    estPublic: String(r.estPublic).toUpperCase() === "TRUE",
    tarif: r.tarif || "non",
    logoEvenement: r.logoEvenement || "",
    boutons: [
      r.lienInfo ? { label: "Informations", url: r.lienInfo } : null,
      r.lienResa ? { label: "Réserver", url: r.lienResa } : null,
      r.lienPlan ? { label: "Plan d'accès", url: r.lienPlan } : null,
    ].filter(Boolean),
  }));
}

// 5. Trombinoscope
export async function getTrombinoscope() {
  const rows = await fetchSheetTab("Trombinoscope");
  return rows.map((r) => ({
    id: String(r.id || Math.random()),
    nom: r.nom || "",
    role: r.role || "",
    description: r.description || "",
    photoUrl: r.photoUrl || "",
  }));
}

// 6. Médias
export async function getMedias() {
  const rows = await fetchSheetTab("Medias");
  return rows.map((r) => ({
    id: String(r.id || Math.random()),
    titre: r.titre || "",
    type: r.type || "video",
    url: r.url || "",
    miniature: r.miniature || "",
  }));
}
