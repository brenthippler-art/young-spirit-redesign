import { useState } from 'react';
import PhotoModal from './PhotoModal';
import './PhotoGallery.css';

export default function PhotoGallery({ photos, initialCount = 8 }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  if (!photos?.length) return null;

  // Show the first few photos until the visitor asks for the rest
  const visible = expanded ? photos : photos.slice(0, initialCount);

  return (
    <div className="photo-gallery">
      <ul className="photo-grid">
        {visible.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              className="photo-tile"
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger: ${photo.alt}`}
            >
              <img src={photo.src} alt="" loading="lazy" />
              <span className="wm" aria-hidden="true">© Young Spirit Kennel</span>
            </button>
          </li>
        ))}
      </ul>

      {photos.length > initialCount && (
        <div className="photo-gallery__more">
          <button
            type="button"
            className="text-link"
            aria-expanded={expanded}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? 'Show fewer' : `Show all ${photos.length} photos`}
          </button>
        </div>
      )}

      <PhotoModal
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}