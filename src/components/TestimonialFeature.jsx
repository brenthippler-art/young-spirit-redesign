import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './TestimonialFeature.css';

export default function TestimonialFeature({
  testimonials,
  eyebrow = 'From Our Families',
  showReviewLink = false,
}) {
  const [t, setT] = useState(0);

  if (!testimonials?.length) return null;

  const quote = testimonials[t];
  const total = testimonials.length;
  const step = (dir) => setT((i) => (i + dir + total) % total);

  return (
    <Reveal className="wrap testimonial">
      <p className="eyebrow">{eyebrow}</p>

      <blockquote aria-live="polite">
        <div className="testimonial__stars" aria-label={`${quote.rating} out of 5 stars`}>
          {'★'.repeat(Number(quote.rating))}
        </div>
        <p>“{quote.quote}”</p>
        <footer>— {quote.who}</footer>
      </blockquote>

      {total > 1 && (
        <div className="testimonial__controls">
          <button type="button" onClick={() => step(-1)} aria-label="Previous review">←</button>
          <span>
            {String(t + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => step(1)} aria-label="Next review">→</button>
        </div>
      )}

      {showReviewLink && (
        <div className="testimonial__review">
          <Link to="/leavereview" className="text-link">Leave a review</Link>
        </div>
      )}
    </Reveal>
  );
}