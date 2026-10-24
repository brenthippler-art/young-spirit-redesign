import { useState } from 'react';
import PhotoModal from './PhotoModal';
import { KENA_AXEL_PUPPIES } from '../data/kenaxaxel26';

// Load every .jpeg in the litter folder at build time, the same technique
// as the Photos page, so we can look images up by filename instead of
// writing 24 import lines.
const imageModules = import.meta.glob('../assets/gallery/kenaxaxel26/*.jpeg', { eager: true });

function imageSrc(name) {
  const mod = imageModules[`../assets/gallery/kenaxaxel26/${name}.jpeg`];
  return mod ? mod.default : null;
}

function puppyAlt(p) {
  return `${p.sex} puppy, ${p.collar.toLowerCase()} collar, ${p.coat.toLowerCase()} coat`;
}

// Status sorts in a meaningful order, not alphabetically.
const STATUS_ORDER = { Available: 0, Pending: 1, Reserved: 2, Sold: 3 };

// Each sort option is a "comparator": a function that takes two puppies
// and returns a negative number (a first), positive (b first), or 0 (tie).
const SORTS = {
  sex: (a, b) => a.sex.localeCompare(b.sex),
  coat: (a, b) => a.coat.localeCompare(b.coat),
  status: (a, b) => (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99),
};

const SORT_LABELS = { sex: 'Sex', coat: 'Coat Color', status: 'Status' };

// Swatch colors for the little collar dot next to each collar name.
const COLLAR_SWATCH = {
  Black: '#111', Blue: '#1e56c8', Brown: '#6b4226', Green: '#2e8b3e',
  Grey: '#8a8a8a', 'Light Blue': '#8ecbf0', Orange: '#f08a24', Pink: '#f28bb5',
  Purple: '#7b3fa0', Red: '#d22b2b', White: '#fff', Yellow: '#f2d024',
};

export default function PuppyTable({ puppies = KENA_AXEL_PUPPIES }) {
  const [sortKey, setSortKey] = useState(null);     // null = original collar order
  const [direction, setDirection] = useState('asc');
  const [openIndex, setOpenIndex] = useState(null);  // null = lightbox closed

  function handleSort(key) {
    if (key === sortKey) {
      setDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setDirection('asc');
    }
  }

  function resetSort() {
    setSortKey(null);
    setDirection('asc');
  }

  const sorted = sortKey
    ? [...puppies].sort((a, b) => {
        const result = SORTS[sortKey](a, b);
        return direction === 'asc' ? result : -result;
      })
    : puppies;

  // One flat list of every photo, in the order the puppies are currently
  // displayed. This is what the lightbox steps through with its arrows.
  const photoList = sorted.flatMap((p) =>
    p.images
      .map((name) => ({ name, src: imageSrc(name), alt: puppyAlt(p) }))
      .filter((photo) => photo.src)
  );

  return (
    <div className="puppy-table-block">
      <div className="puppy-sort-bar" role="group" aria-label="Sort puppies">
        <span className="sort-label">Sort by:</span>
        {Object.keys(SORTS).map((key) => {
          const active = key === sortKey;
          return (
            <button
              key={key}
              type="button"
              className={`sort-btn${active ? ' active' : ''}`}
              aria-pressed={active}
              onClick={() => handleSort(key)}
            >
              {SORT_LABELS[key]}
              {active && <span aria-hidden="true"> {direction === 'asc' ? '▲' : '▼'}</span>}
            </button>
          );
        })}
        {sortKey && (
          <button type="button" className="sort-btn sort-reset" onClick={resetSort}>
            Reset
          </button>
        )}
      </div>

      <table className="puppy-table">
        <thead>
          <tr>
            <th>Collar</th>
            <th>Photos</th>
            <th>Sex</th>
            <th>Coat Color</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p) => (
            <tr key={p.collar}>
              <td data-label="Collar">
                <span className="collar-dot" style={{ background: COLLAR_SWATCH[p.collar] }} />
                {p.collar}
              </td>
              <td data-label="Photos">
                <div className="puppy-photos">
                  {p.images.map((name) => {
                    // Find where this photo sits in the flat list so the
                    // lightbox opens on the right one.
                    const i = photoList.findIndex((photo) => photo.name === name);
                    if (i === -1) return null;
                    const photo = photoList[i];
                    return (
                      <button
                        type="button"
                        className="puppy-photo"
                        key={name}
                        aria-label={`View larger: ${photo.alt}`}
                        onClick={() => setOpenIndex(i)}
                      >
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                        <span className="wm">© Young Spirit Kennel</span>
                      </button>
                    );
                  })}
                </div>
              </td>
              <td data-label="Sex">{p.sex}</td>
              <td data-label="Coat Color">{p.coat}</td>
              <td data-label="Status">
                <span className={`status-badge status-${p.status.toLowerCase()}`}>{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PhotoModal
        photos={photoList}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}