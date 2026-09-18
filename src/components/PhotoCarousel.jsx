import { useRef, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';

// Wraps the real Owl Carousel 2 jQuery plugin for the photo strip.
// There's no React 19-compatible maintained wrapper for Owl Carousel, so
// this loads jQuery + owl.carousel dynamically (guaranteeing load order),
// initializes it on mount, and tears it down on unmount.
//
// Owl clones DOM nodes internally to build its infinite loop, so clicks
// are handled via native event delegation on data-photo-index (a data
// attribute survives cloneNode; a React onClick handler would not).
export default function PhotoCarousel({ photos, onPhotoClick }) {
  const containerRef = useRef(null);
  const owlRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function handleActivate(e) {
      const item = e.target.closest('[data-photo-index]');
      if (item) onPhotoClick(Number(item.dataset.photoIndex));
    }

    function handleKeyDown(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const item = e.target.closest('[data-photo-index]');
      if (item) {
        e.preventDefault();
        onPhotoClick(Number(item.dataset.photoIndex));
      }
    }

    (async () => {
      const { default: $ } = await import('jquery');
      window.jQuery = $;
      window.$ = $;
      await import('owl.carousel');

      if (cancelled || !containerRef.current) return;

      const $owl = $(containerRef.current);
      $owl.owlCarousel({
        loop: true,
        margin: 14,
        nav: false,
        dots: false,
        autoWidth: true,
        smartSpeed: 450,
      });
      owlRef.current = $owl;

      containerRef.current.addEventListener('click', handleActivate);
      containerRef.current.addEventListener('keydown', handleKeyDown);
    })();

    return () => {
      cancelled = true;
      const node = containerRef.current;
      node?.removeEventListener('click', handleActivate);
      node?.removeEventListener('keydown', handleKeyDown);
      owlRef.current?.trigger('destroy.owl.carousel');
      owlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="photo-owl-wrap">
      <button
        type="button"
        className="carousel-arrow prev"
        aria-label="Previous photo"
        onClick={() => owlRef.current?.trigger('prev.owl.carousel')}
      >
        ‹
      </button>

      <div className="owl-carousel photo-owl-carousel" ref={containerRef}>
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="photo-carousel-item"
            data-photo-index={i}
            role="button"
            tabIndex={0}
            aria-label={`View larger: ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-arrow next"
        aria-label="Next photo"
        onClick={() => owlRef.current?.trigger('next.owl.carousel')}
      >
        ›
      </button>
    </div>
  );
}