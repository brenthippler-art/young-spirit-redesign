import { useEffect, useCallback, useRef } from 'react';
import './PhotoModal.css';

// Lightbox: shows the photo at `index` full-size over a dark backdrop.
// Closes on Escape, backdrop click, or the × button; arrow keys / on-screen
// arrows step through the same photo list.
export default function PhotoModal({ photos, index, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined;
  const photo = isOpen ? photos[index] : null;
  const closeRef = useRef(null);

  const goPrev = useCallback(() => {
    if (!isOpen) return;
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [isOpen, index, photos.length, onNavigate]);

  const goNext = useCallback(() => {
    if (!isOpen) return;
    onNavigate((index + 1) % photos.length);
  }, [isOpen, index, photos.length, onNavigate]);

  // Runs once when the modal opens, and cleans up once when it closes
  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  // Keyboard controls (re-bound as the index changes)
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!photo) return null;

  return (
    <div
      className="photo-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.name || photo.alt || 'Photo viewer'}
    >
      <button ref={closeRef} type="button" className="photo-modal-close" aria-label="Close" onClick={onClose}>
        ✕
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="photo-modal-nav prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ←
          </button>
          <button
            type="button"
            className="photo-modal-nav next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            →
          </button>
        </>
      )}

      <figure className="photo-modal" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <figcaption className="photo-modal-caption">
          {photo.name && <span>{photo.name}</span>}
          {photos.length > 1 && (
            <span className="photo-modal-counter">
              {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}