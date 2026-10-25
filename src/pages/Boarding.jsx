import { getTestimonials } from "../data/testimonials";
import TestimonialFeature from "../components/TestimonialFeature";
import PhotoGallery from "../components/PhotoGallery";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { buildGalleryPhotos } from "../utils/photoGallery";
import boardingPhoto from "../assets/gallery/boarding/watermarked-img-1788126981696-1-IMG_0233.jpeg";
import "./Boarding.css";

const boardingModules = import.meta.glob(
  "../assets/gallery/boarding/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);
const boardingPhotos = buildGalleryPhotos(boardingModules, "Boarding guest");

const DROP_OFF = [
  { label: "Vaccinations", text: "Boarded dogs must be up to date on vaccines." },
  { label: "Drop-off & pick-up", text: "Scheduled directly with us." },
  { label: "Cancellations", text: "Policy confirmed at the time of booking." },
];

export default function Boarding() {
  return (
    <>
      <Seo
        title="Dog Boarding in Bowling Green, KY"
        description="Safe, attentive dog boarding in Bowling Green, Kentucky from Young Spirit Kennel. Call (270) 605-4128 to reserve a stay for your dog."
        path="/boarding"
      />

      <PageHero
        eyebrow="Boarding"
        title="Care while you're away"
        intro="Your dog stays with a family that treats every boarder like one of our own — daily exercise, real attention, and a comfortable place to wait for you."
        image={boardingPhoto}
        imageAlt="A boarding guest at Young Spirit Kennel"
      >
        <a href="tel:2706054128" className="btn btn--solid">
          Book a Stay
        </a>
      </PageHero>

      {/* ---------- RATES + DROP-OFF ---------- */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Rates</p>
            <h2 className="title">
              Basic <em>boarding.</em>
            </h2>

            <div className="rate">
              <p className="rate__price">
                $35<span className="rate__unit">/ night</span>
              </p>
              <dl className="rate__includes">
                <dt className="label">Includes</dt>
                <dd>Feeding, daily exercise, and one-on-one attention.</dd>
              </dl>
            </div>

            <p className="rate-note">
              Medication administration is available for an added fee — just let
              us know when you book.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="eyebrow">Before You Drop Off</p>
            <h2 className="title">
              What to <em>know.</em>
            </h2>

            <dl className="checklist">
              {DROP_OFF.map((item) => (
                <div key={item.label}>
                  <dt className="label">{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>

            <div className="boarding-actions">
              <a href="tel:2706054128" className="btn btn--solid">
                Text or Call to Book
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- RECENT GUESTS ---------- */}
      <section className="section section--surface">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Recent Guests</p>
            <h2 className="title">
              A few happy <em>boarders.</em>
            </h2>
          </Reveal>
          <PhotoGallery photos={boardingPhotos} initialCount={6} />
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="section" id="reviews">
        <TestimonialFeature
          testimonials={getTestimonials("boarding")}
          eyebrow="What Boarding Families Say"
          showReviewLink
        />
      </section>
    </>
  );
}