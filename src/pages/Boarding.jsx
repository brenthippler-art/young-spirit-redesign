import Eyebrow from "../components/Eyebrow";
import DogTag from "../components/DogTag";
import { getTestimonials } from "../data/testimonials";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Seo from '../components/Seo';

export default function Boarding() {
  return (
    <>
      <Seo
        title="Dog Boarding in Bowling Green, KY"
        description="Safe, attentive dog boarding in Bowling Green, Kentucky from Young Spirit Kennel. Call (270) 605-4128 to reserve a stay for your dog."
        path="/boarding"
      />
      <section className="border-b" style={{ paddingTop: 120 }}>
        <div className="wrap">
          <Eyebrow>Boarding</Eyebrow>
          <h1 style={{ fontSize: 44, maxWidth: 700 }}>
            Care while you're away
          </h1>
          <p className="body-p" style={{ maxWidth: 600 }}>
            Your dog stays with a family that treats every boarder like one of
            our own — daily exercise, real attention, and a comfortable place to
            wait for you.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="wrap two-col">
          <div>
            <Eyebrow>Rates</Eyebrow>
            <h2 style={{ fontSize: 28 }}>Basic Boarding</h2>
            <DogTag noRivet name={null} meta={null} description={null}>
              <div className="tag-name" style={{ fontSize: 32, marginTop: 2 }}>
                $35
                <span
                  style={{
                    fontSize: 15,
                    fontFamily: "'Work Sans'",
                    color: "var(--brass)",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {" "}
                  / night
                </span>
              </div>
              <div className="tag-meta" style={{ marginTop: 10 }}>
                Includes
              </div>
              <div className="tag-desc">
                Feeding, daily exercise, and one-on-one attention.
              </div>
            </DogTag>
            <p className="body-p" style={{ fontSize: 13.5, opacity: 0.65 }}>
              Medication administration is available for an added fee — just let
              us know when you book.
            </p>
          </div>
          <div>
            <Eyebrow>Before You Drop Off</Eyebrow>
            <h2 style={{ fontSize: 28 }}>What to know</h2>
            <ul
              style={{
                paddingLeft: 0,
                listStyle: "none",
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: 14.5,
              }}
            >
              <li>
                <b style={{ color: "var(--brass-bright)" }}>Vaccinations:</b>{" "}
                boarded dogs must be up to date on vaccines.
              </li>
              <li>
                <b style={{ color: "var(--brass-bright)" }}>
                  Drop-off &amp; pick-up:
                </b>{" "}
                scheduled directly with us.
              </li>
              <li>
                <b style={{ color: "var(--brass-bright)" }}>Cancellations:</b>{" "}
                policy confirmed at the time of booking.
              </li>
            </ul>
            <a
              href="tel:2706054128"
              className="btn btn-primary"
              style={{ marginTop: 26 }}
            >
              Text or Call to Book Boarding
            </a>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="wrap">
          <Eyebrow>What Boarding Families Say</Eyebrow>
          <h2 style={{ fontSize: 26 }}>A few kind words</h2>
          <TestimonialCarousel testimonials={getTestimonials("boarding")} />
        </div>
      </section>
    </>
  );
}
