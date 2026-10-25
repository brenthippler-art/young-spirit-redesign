import { TESTIMONIALS } from "../data/testimonials";
import TestimonialFeature from "../components/TestimonialFeature";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import logo from "../assets/logo.png";
import saintPhoto from "../assets/saint.jpeg";
import "./About.css";

const PILLARS = [
  {
    title: "Health",
    text: "Health is a priority in every breeding decision. We carefully consider the health, genetics, structure, temperament, and pedigree of both parents when planning a litter.",
  },
  {
    title: "Temperament",
    text: "Temperament matters just as much. We strive for dogs that are confident, devoted, intelligent, trainable, and naturally protective, with a stable, dependable nature.",
  },
  {
    title: "Purpose",
    text: "Above all, we breed with purpose — every litter is planned to improve on the last, producing exceptional family companions who keep the intelligence and loyalty the breed is known for.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Our Kennel in Bowling Green, KY"
        description="Get to know the family behind Young Spirit Kennel and how we raise AKC Dobermans and Rottweilers in Bowling Green, Kentucky."
        path="/about"
      />

      <PageHero
        eyebrow="About Our Kennel"
        title="Welcome to Young Spirit Kennel"
        intro="Young Spirit Kennel represents our deep appreciation for family connections and the remarkable spirit of dogs, whose unwavering love, joy, and devotion enrich our lives daily."
        image={saintPhoto}
        imageAlt="Young Spirit's Saint"
      >
        <nav className="jump-links" aria-label="Jump to section">
          <a href="#story">Our Story</a>
          <a href="#philosophy">Breeding Philosophy</a>
          <a href="#visit">Visit or Call</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </PageHero>

      {/* ---------- STORY ---------- */}
      <section className="section" id="story">
        <div className="wrap split about-story">
          <Reveal className="prose">
            <p className="eyebrow">Two words, one name</p>
            <h2 className="title about-story__title">
              Young <em>Spirit.</em>
            </h2>
            <p>
              "Young" comes from a family maiden name, and it also reflects the
              lively, youthful spark dogs carry throughout their lives — their
              curiosity, their eagerness, and the bright energy that makes them
              such joyful companions.
            </p>
            <p>
              "Spirit" speaks to the deeper side of a dog's nature. Their spirit
              is loyal, intuitive, and full of heart. Dogs form connections with
              people that are honest and meaningful, and those relationships
              guide the way we care for every dog here.
            </p>
            <p>
              Together, Young Spirit honors both parts: the lively, joyful
              nature of dogs, and the special bond they create with their
              people.
            </p>
          </Reveal>

          <Reveal className="about-crest framed" delay={150}>
            <img src={logo} alt="Young Spirit Kennel crest" />
          </Reveal>
        </div>
      </section>

      {/* ---------- PHILOSOPHY ---------- */}
      <section className="section section--surface" id="philosophy">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Our Breeding Philosophy</p>
            <h2 className="title">
              More than beautiful — <em>confident, capable, and stable.</em>
            </h2>
            <p className="lede about-philosophy__lede">
              At Young Spirit Kennel, our goal is to produce healthy,
              well-rounded companions that represent their breeds in both
              appearance and temperament. A great Doberman or Rottweiler should
              be more than beautiful — confident, intelligent, loyal, stable, and
              capable.
            </p>
          </Reveal>

          <div className="services">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} className="service" delay={i * 120}>
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section className="section" id="visit">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Visit or Call</p>
            <h2 className="title">
              Bowling Green, <em>Kentucky.</em>
            </h2>
          </Reveal>

          <Reveal>
            <dl className="info-strip">
              <div>
                <dt className="label">Location</dt>
                <dd>
                  Bowling Green, KY
                  <small>Exact address shared upon inquiry.</small>
                </dd>
              </div>
              <div>
                <dt className="label">Hours</dt>
                <dd>
                  9 AM – 9 PM
                  <small>For calls, texts, and scheduled visits.</small>
                </dd>
              </div>
              <div>
                <dt className="label">Call or Text</dt>
                <dd>
                  <a href="tel:2706054128">(270) 605-4128</a>
                  <br />
                  <a href="tel:2706054133">(270) 605-4133</a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="section section--surface" id="reviews">
        <TestimonialFeature
          testimonials={TESTIMONIALS}
          eyebrow="What Families Say"
          showReviewLink
        />
      </section>
    </>
  );
}