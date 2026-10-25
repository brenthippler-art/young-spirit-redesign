import { useId } from 'react';
import './StarRating.css';

const STARS = [1, 2, 3, 4, 5];

export default function StarRating({ value, onChange, name = 'rating' }) {
  const id = useId();

  return (
    <div className="star-rating">
      {STARS.map((n) => (
        <span key={n} className={`star${n <= value ? ' is-filled' : ''}`}>
          <input
            type="radio"
            className="star__input"
            id={`${id}-${n}`}
            name={name}
            value={n}
            checked={value === n}
            onChange={() => onChange(n)}
          />
          <label htmlFor={`${id}-${n}`} className="star__label">
            <span aria-hidden="true">★</span>
            <span className="visually-hidden">
              {n} star{n > 1 ? 's' : ''}
            </span>
          </label>
        </span>
      ))}
      <span className="star-rating__value" aria-hidden="true">
        {value} / 5
      </span>
    </div>
  );
}