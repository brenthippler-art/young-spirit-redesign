export default function DogTag({
  name,
  meta,
  description,
  photo,
  photoSrc,
  photoAlt,
  photoPosition = 'center',
  pedigreeSrc,
  pedigreeAlt,
  onPedigreeClick,
  noRivet = false,
  children,
}) {
  return (
    <div className={`dogtag${noRivet ? ' no-rivet' : ''}`}>
      {photoSrc ? (
        <div className="photo">
          <img src={photoSrc} alt={photoAlt || name || 'Dog photo'} style={{ objectPosition: photoPosition }} />
        </div>
      ) : (
        photo !== undefined && (
          <div className="photo placeholder-photo">{photo || 'Photo Coming Soon'}</div>
        )
      )}
      {name && <div className="tag-name">{name}</div>}
      {meta && <div className="tag-meta">{meta}</div>}

      {pedigreeSrc && (
        <button
          type="button"
          className="dogtag-pedigree"
          onClick={onPedigreeClick}
          aria-label={`View larger: ${pedigreeAlt || 'pedigree chart'}`}
        >
          <span className="dogtag-pedigree-frame">
            <img src={pedigreeSrc} alt={pedigreeAlt || 'Pedigree chart'} />
          </span>
          <span className="dogtag-pedigree-caption italic-accent">Click to Expand</span>
        </button>
      )}

      {description && <div className="tag-desc">{description}</div>}
      {children}
    </div>
  );
}