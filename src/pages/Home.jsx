import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { TESTIMONIALS } from '../data/testimonials';
import heroImg from "../assets/home/hero.png";
import dobermanImg from "../assets/home/doberman.jpeg";
import rottweilerImg from "../assets/home/rottweiler.jpeg";
import "./Home.css";

const BREEDS = [
  {
    name: "Dobermans",
    to: "/our-dogs#doberman",
    img: dobermanImg,
    note: "Elegant. Alert. Devoted.",
  },
  {
    name: "Rottweilers",
    to: "/our-dogs#rottweiler",
    img: rottweilerImg,
    note: "Steady. Powerful. Loyal.",
  },
];

export default function Home() {
  const [t, setT] = useState(0);
  const list = TESTIMONIALS;
  const quote = list[t];
  const step = (dir) => setT((i) => (i + dir + list.length) % list.length);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <img src={heroImg} alt="" className="hero__img" />
        <div className="hero__shade" />
        <div className="wrap hero__content">
          <p className="eyebrow">Bowling Green, Kentucky</p>
          <h1 className="display">
            Dobermans &amp; Rottweilers,
            <br />
            <em>bred with purpose.</em>
          </h1>
          <p className="lede hero__lede">
            AKC-registered dogs raised in our home, with health, temperament and
            lineage at the heart of every litter.
          </p>
          <div className="hero__actions">
            <Link to="/litters" className="btn btn--solid">
              View Litters
            </Link>
            <Link to="/our-dogs" className="btn btn--ghost">
              Meet Our Dogs
            </Link>
          </div>
        </div>
        <span className="hero__scroll" aria-hidden="true" />
      </section>

      {/* ---------- INTRO STATEMENT ---------- */}
      <section className="section">
        <Reveal className="wrap intro">
          <p className="eyebrow">Young Spirit Kennel</p>
          <h2 className="title">
            Small by choice. Every puppy is raised underfoot, socialized daily,
            and placed only with families we'd trust with our own.
          </h2>
        </Reveal>
      </section>

      {/* ---------- BREEDS ---------- */}
      <section className="section section--surface">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Our Breeds</p>
            <h2 className="title">
              Two breeds. <em>One standard.</em>
            </h2>
          </Reveal>
          <div className="breeds">
            {BREEDS.map((b, i) => (
              <Reveal key={b.name} delay={i * 150}>
                <Link to={b.to} className="breed-card">
                  <div className="breed-card__media">
                    <img
                      src={b.img}
                      alt={`Young Spirit Kennel ${b.name.slice(0, -1)}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="breed-card__body">
                    <h3>{b.name}</h3>
                    <p>{b.note}</p>
                    <span className="breed-card__more">Explore →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section">
        <div className="wrap services">
          <Reveal className="service">
            <span className="service__num">01</span>
            <h3>Litters</h3>
            <p>
              Planned pairings, vet-confirmed pregnancies, and a waitlist that
              hears first.
            </p>
            <button
              className="text-link"
              onClick={() => window.ml?.("show", "8QT94N", true)}
            >
              Get litter alerts
            </button>
          </Reveal>
          <Reveal className="service" delay={120}>
            <span className="service__num">02</span>
            <h3>Boarding</h3>
            <p>
              Your dog stays with people who understand large working breeds.
            </p>
            <Link to="/boarding" className="text-link">
              Boarding details
            </Link>
          </Reveal>
          <Reveal className="service" delay={240}>
            <span className="service__num">03</span>
            <h3>Verified Buyers</h3>
            <p>
              AKC registration numbers and pedigrees are shared directly with
              verified buyers.
            </p>
            <Link to="/faq" className="text-link">
              Read the FAQ
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      {quote && (
        <section className="section section--surface">
          <Reveal className="wrap testimonial">
            <p className="eyebrow">From Our Families</p>
            <blockquote aria-live="polite">
              <div
                className="testimonial__stars"
                aria-label={`${quote.rating} out of 5 stars`}
              >
                {"★".repeat(Number(quote.rating))}
              </div>
              <p>“{quote.quote}”</p>
              <footer>— {quote.who}</footer>
            </blockquote>
            {list.length > 1 && (
              <div className="testimonial__controls">
                <button onClick={() => step(-1)} aria-label="Previous review">
                  ←
                </button>
                <span>
                  {String(t + 1).padStart(2, "0")} /{" "}
                  {String(list.length).padStart(2, "0")}
                </span>
                <button onClick={() => step(1)} aria-label="Next review">
                  →
                </button>
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* ---------- CLOSING CTA ---------- */}
      <section className="section cta">
        <Reveal className="wrap cta__inner">
          <h2 className="display">
            Find your <em>next companion.</em>
          </h2>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--solid">
              Start an Inquiry
            </Link>
            <a href="tel:2706054128" className="btn btn--ghost">
              (270) 605-4128
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
