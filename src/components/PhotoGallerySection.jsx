import { useState } from 'react';
import Eyebrow from './Eyebrow';
import PhotoCarousel from './PhotoCarousel';
import PhotoModal from './PhotoModal';

export default function PhotoGallerySection({ eyebrow, title, description, photos, minTiles = 8 }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="photo-gallery-section">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontSize: 26, maxWidth: 560 }}>{title}</h2>
      {description && <p className="body-p" style={{ maxWidth: 600 }}>{description}</p>}
      <PhotoCarousel photos={photos} onPhotoClick={setOpenIndex} />
      <PhotoModal photos={photos} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </div>
  );
}