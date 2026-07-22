// src/app/media/page.tsx

import { getMedias } from '../../data';
import MediaClientContent from './MediaClientContent';

export default async function MediaPage() {
  const medias = (await getMedias()) || [];
  return <MediaClientContent initialMedias={medias} />;
}
