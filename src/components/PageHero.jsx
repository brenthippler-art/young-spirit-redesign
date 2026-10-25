import Reveal from './Reveal';
import './PageHero.css';

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  imagePosition = 'center',
  children,
}) {
  return (
    <section className={`page-hero ${image ? 'page-hero--split' : ''}`}>
      <div className="wrap page-hero__inner">
        <Reveal className="page-hero__text">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-hero__title">{title}</h1>
          {intro && <div className="lede page-hero__intro">{intro}</div>}
          {children && <div className="page-hero__extras">{children}</div>}
        </Reveal>

        {image && (
          <Reveal className="page-hero__media framed" delay={150}>
            <img src={image} alt={imageAlt} style={{ objectPosition: imagePosition }} />
          </Reveal>
        )}
      </div>
    </section>
  );
}