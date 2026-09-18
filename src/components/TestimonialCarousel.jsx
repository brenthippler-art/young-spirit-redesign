import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Testimonial from './Testimonial';

// Same real Owl Carousel 2 integration as PhotoCarousel (see that file for
// the detailed why — jQuery/owl.carousel dynamically imported to guarantee
// load order, no React wrapper package since none support React 19).
// Simpler than PhotoCarousel since testimonial cards aren't clickable —
// no event delegation or lightbox needed here.
export default function TestimonialCarousel({ testimonials }) {
  const containerRef = useRef(null);
  const owlRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { default: $ } = await import('jquery');
      window.jQuery = $;
      window.$ = $;
      await import('owl.carousel');

      if (cancelled || !containerRef.current) return;

      const $owl = $(containerRef.current);
      $owl.owlCarousel({
        loop: testimonials.length > 1,
        margin: 20,
        nav: false,
        dots: false,
        autoWidth: true,
        smartSpeed: 450,
      });
      owlRef.current = $owl;
    })();

    return () => {
      cancelled = true;
      owlRef.current?.trigger('destroy.owl.carousel');
      owlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="testimonial-carousel-wrap">
      {testimonials.length > 1 && (
        <button
          type="button"
          className="carousel-arrow prev"
          aria-label="Previous review"
          onClick={() => owlRef.current?.trigger('prev.owl.carousel')}
        >
          ‹
        </button>
      )}

      <div className="owl-carousel testimonial-owl-carousel" ref={containerRef}>
        {testimonials.map((t, i) => (
          <div className="testimonial-carousel-item" key={i}>
            <Testimonial quote={t.quote} who={t.who} rating={t.rating} />
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <button
          type="button"
          className="carousel-arrow next"
          aria-label="Next review"
          onClick={() => owlRef.current?.trigger('next.owl.carousel')}
        >
          ›
        </button>
      )}

      <div className="center" style={{ marginTop: 28 }}>
        <Link to="/leavereview" className="btn btn-secondary">
          Leave a Review
        </Link>
      </div>
    </div>
  );
}