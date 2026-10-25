import Reveal from './Reveal';
import './DogProfile.css';

const PREFIX = "Young Spirit's ";

export default function DogProfile({ dog, reverse = false, onPedigreeClick }) {
  const { name, breed, color, role, photo, photoPosition = 'center', pedigree, description } = dog;

  // "Young Spirit's Kena Nell" → small prefix + big call name
  const callName = name.startsWith(PREFIX) ? name.slice(PREFIX.length) : name;
  const hasPrefix = callName !== name;

  const details = [
    { label: 'Role', value: role },
    { label: 'Color', value: color },
    { label: 'Registry', value: 'AKC' },
  ].filter((d) => d.value);

  return (
    <Reveal as="article" className={`dog-profile ${reverse ? 'dog-profile--reverse' : ''}`}>
      <div className="dog-profile__media framed">
        <img src={photo} alt={name} style={{ objectPosition: photoPosition }} loading="lazy" />
      </div>

      <div className="dog-profile__body">
        <p className="eyebrow">{breed}</p>
        <h3 className="dog-profile__name">
          {hasPrefix && <span className="dog-profile__prefix">Young Spirit's</span>}
          {callName}
        </h3>

        <dl className="dog-profile__details">
          {details.map((d) => (
            <div key={d.label}>
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>

        {description && <p className="dog-profile__desc">{description}</p>}

        {pedigree && (
          <button
            type="button"
            className="dog-profile__pedigree"
            onClick={onPedigreeClick}
            aria-label={`View ${name}'s pedigree chart`}
          >
            <img src={pedigree} alt="" />
            <span>
              <span className="dog-profile__pedigree-label">Pedigree</span>
              View full chart →
            </span>
          </button>
        )}
      </div>
    </Reveal>
  );
}