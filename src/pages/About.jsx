import Eyebrow from "../components/Eyebrow";
import { TESTIMONIALS } from "../data/testimonials";
import TestimonialFeature from "../components/TestimonialFeature";
import logo from "../assets/logo.png";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import saintPhoto from "../assets/saint.jpeg";

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

      <section className="border-b" id="story">
        <div className="wrap two-col">
          <div>
            <Eyebrow>Two words, one name</Eyebrow>
            <h2 style={{ fontSize: 30, maxWidth: 600 }}>Young Spirit</h2>

            <p className="body-p">
              "Young" comes from a family maiden name, and it also reflects the
              lively, youthful spark dogs carry throughout their lives — their
              curiosity, their eagerness, and the bright energy that makes them
              such joyful companions.
            </p>
            <p className="body-p">
              "Spirit" speaks to the deeper side of a dog's nature. Their spirit
              is loyal, intuitive, and full of heart. Dogs form connections with
              people that are honest and meaningful, and those relationships
              guide the way we care for every dog here.
            </p>
            <p className="body-p">
              Together, Young Spirit honors both parts: the lively, joyful
              nature of dogs, and the special bond they create with their
              people.
            </p>
          </div>
          <div className="imgcol">
            <img src={logo} alt="Young Spirit Kennel crest" />
          </div>
        </div>
      </section>

      <section className="border-b" id="philosophy">
        <div className="wrap">
          <Eyebrow>Our Breeding Philosophy</Eyebrow>
          <h2 style={{ fontSize: 30, maxWidth: 600 }}>
            More than beautiful — confident, capable, and stable
          </h2>
          <div className="two-col" style={{ marginTop: 36 }}>
            <div>
              <p className="body-p" style={{ marginTop: 0 }}>
                At Young Spirit Kennel, our goal is to produce healthy,
                well-rounded companions that represent their breeds in both
                appearance and temperament. A great Doberman or Rottweiler
                should be more than beautiful — confident, intelligent, loyal,
                stable, and capable.
              </p>
              <p className="body-p">
                Health is a priority in every breeding decision. We carefully
                consider the health, genetics, structure, temperament, and
                pedigree of both parents when planning a litter.
              </p>
            </div>
            <div>
              <p className="body-p" style={{ marginTop: 0 }}>
                Temperament matters just as much. We strive for dogs that are
                confident, devoted, intelligent, trainable, and naturally
                protective, with a stable, dependable nature.
              </p>
              <p className="body-p">
                Above all, we breed with purpose — every litter is planned to
                improve on the last, producing exceptional family companions who
                keep the intelligence and loyalty the breed is known for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b" id="visit">
        <div className="wrap">
          <Eyebrow>Visit or Call</Eyebrow>
          <h2 style={{ fontSize: 28 }}>Bowling Green, Kentucky</h2>
          <div className="cards3">
            <div className="navcard">
              <div className="k">Location</div>
              <h3 style={{ fontSize: 17 }}>Bowling Green, KY</h3>
              <p>Exact address shared upon inquiry.</p>
            </div>
            <div className="navcard">
              <div className="k">Hours</div>
              <h3 style={{ fontSize: 17 }}>9 AM – 9 PM</h3>
              <p>For calls, texts, and scheduled visits.</p>
            </div>
            <div className="navcard">
              <div className="k">Reach Us</div>
              <h3 style={{ fontSize: 17 }}>Call or Text</h3>
              <p>(270) 605-4128 · (270) 605-4133</p>
            </div>
          </div>
        </div>
      </section>

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
