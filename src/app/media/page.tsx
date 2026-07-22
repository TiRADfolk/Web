// src/app/media/page.tsx

import Link from 'next/link';
import { getMedias } from '../../data';
import MediaClientContent from './MediaClientContent';

export default async function MediaPage() {
  // Récupération des données côté Serveur
  const medias = await getMedias();

  return <MediaClientContent initialMedias={medias} />;
}
