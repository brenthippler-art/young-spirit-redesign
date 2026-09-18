import { useEffect, useCallback } from 'react';

// Lightbox: shows the photo at `index` full-size over a dark backdrop.
// Closes on Escape, backdrop click, or the × button; arrow keys / on-screen
// arrows step through the same photo list the carousel is showing.
export default function PhotoModal({ photos, index, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined;
  const photo = isOpen ? photos[index] : null;

  const goPrev = useCallback(() => {
    if (!isOpen) return;
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [isOpen, index, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    if (!isOpen) return;
    onNavigate((index + 1) % photos.length);
  }, [isOpen, index, photos.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!photo) return null;

  return (
    <div className="photo-modal-backdrop" onClick={onClose}>
      <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="photo-modal-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        {photos.length > 1 && (
          <>
            <button type="button" className="photo-modal-nav prev" aria-label="Previous photo" onClick={goPrev}>
              ‹
            </button>
            <button type="button" className="photo-modal-nav next" aria-label="Next photo" onClick={goNext}>
              ›
            </button>
          </>
        )}

        <img src={photo.src} alt={photo.alt} />
        
      </div>
    </div>
  );
}