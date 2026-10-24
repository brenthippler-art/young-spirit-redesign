import { useEffect } from "react";
import PageHero from "../components/PageHero";
import PuppyTable from "../components/PuppyTable";
import PhotoGallery from "../components/PhotoGallery";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { buildGalleryPhotos } from "../utils/photoGallery";
import { KENA_AXEL_PUPPIES } from "../data/kenaxaxel26";
import groupPhoto from "../assets/gallery/kenaxaxel26/ptuppy-litter.jpeg";
import litterPhoto from "../assets/gallery/kenaxaxel26/ptuppy-litter2.jpeg";
import "./Litters.css";

const kenaxaxelModules = import.meta.glob(
  "../assets/gallery/kenaxaxel26/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);
const kenaxaxelPhotos = buildGalleryPhotos(
  kenaxaxelModules,
  "Kena x Axel litter photo",
);

// ---------- Litter numbers, calculated from the puppy data ----------
const puppies = KENA_AXEL_PUPPIES;
const count = (test) => puppies.filter(test).length;

const LITTER_STATS = [
  { label: "Puppies", value: puppies.length },
  { label: "Females", value: count((p) => p.sex === "Female") },
  { label: "Males", value: count((p) => p.sex === "Male") },
  { label: "Available", value: count((p) => p.status === "Available") },
];

// e.g. "3 Black & Rust · 3 Red & Rust"
function coatBreakdown(sex) {
  const totals = {};
  puppies
    .filter((p) => p.sex === sex)
    .forEach((p) => {
      totals[p.coat] = (totals[p.coat] || 0) + 1;
    });
  return Object.entries(totals)
    .map(([coat, n]) => `${n} ${coat.replace("/", " & ")}`)
    .join(" · ");
}

// ---------- Page content ----------
const INCLUDED = [
  {
    title: "Health & Records",
    text: "Up-to-date shots and worming, plus a vet check before pickup.",
  },
  {
    title: "Registration",
    text: "Microchip and AKC registration papers included.",
  },
  {
    title: "Puppy Preparation",
    text: "Tails docked, dew claws removed, and ears cropped unless you request otherwise (requires payment up front). Crate training begun, ear care instructions, and a quart-sized bag of puppy food.",
  },
];

const STEPS = [
  {
    title: "Join the waitlist",
    text: "No deposit is required to join the general waitlist.",
  },
  {
    title: "Place a deposit",
    text: "Once a litter is announced, we begin taking deposits — deposit order sets your pick order.",
  },
  {
    title: "Puppies arrive",
    text: "When puppies are born, we announce the number, gender, and color available.",
  },
  {
    title: "Make your pick",
    text: "If the gender or color you're hoping for isn't available, your deposit rolls to the next litter, or we'll talk through other options together.",
  },
];

const AGREEMENTS = [
  {
    title: "Without Breeding Rights",
    href: "/documents/Young_Spirit_Puppy_Agreement_Without_Breeding_Rights.pdf",
  },
  {
    title: "With Breeding Rights",
    href: "/documents/Young_Spirit_Puppy_Agreement_With_Breeding_Rights.pdf",
  },
];

export default function Litters() {
  useEffect(() => {
    // Check whether the popup already showed during this visit
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem("litterPopupShown") === "true";
    } catch {
      // Storage can be blocked in some privacy settings; treat as not shown
    }

    // If it already showed, stop here and don't set a timer
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      window.ml?.("show", "8QT94N", false);

      // Mark it as shown so it won't fire again this visit
      try {
        sessionStorage.setItem("litterPopupShown", "true");
      } catch {
        // If storage is blocked, the popup may show again; not a big deal
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title="Doberman & Rottweiler Puppies in KY"
        description="See current and upcoming AKC Doberman and Rottweiler litters from Young Spirit Kennel in Bowling Green, Kentucky. Contact us about reserving a puppy."
        path="/litters"
      />

      <PageHero
        eyebrow="Litters"
        title="Available & upcoming litters"
        intro={
          <>
            To view our listings on AKC Marketplace,{" "}
            <a
              href="https://marketplace.akc.org/breeder/megan-faulkner-198244"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
            .
          </>
        }
        image={groupPhoto}
        imageAlt="Kena x Axel litter"
      >
        <nav className="jump-links" aria-label="Jump to section">
          <a href="#dob-litter">Dobermans</a>
          <a href="#rot-litter">Rottweilers</a>
          <a href="#included">What's Included</a>
          <a href="#waitlist">Deposits &amp; Waitlist</a>
          <a href="#agreement">Puppy Purchase Agreements</a>
        </nav>
        <button
          type="button"
          className="btn btn--solid ml-onclick-form"
          onClick={() => window.ml?.("show", "8QT94N", true)}
        >
          Get Litter Alerts
        </button>
      </PageHero>

      {/* ---------- FEATURED LITTER ---------- */}
      <section className="section" id="dob-litter">
        <div className="wrap litter-feature">
          <Reveal className="litter-feature__media framed">
            <img
              src={litterPhoto}
              alt="The Kena x Axel Doberman puppies"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={150}>
            <p className="eyebrow">Doberman Litter · 2026</p>
            <h2 className="title">
              Kena Nell × <em>Sir Axel</em>
            </h2>
            <p className="litter-status">Born — the puppies are here</p>

            <dl className="litter-stats">
              {LITTER_STATS.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>

            <dl className="litter-breakdown">
              <div>
                <dt>Females</dt>
                <dd>{coatBreakdown("Female")}</dd>
              </div>
              <div>
                <dt>Males</dt>
                <dd>{coatBreakdown("Male")}</dd>
              </div>
            </dl>

            <div className="litter-copy">
              <p>
                Young Spirit's Kena Nell, paired with Cedar Bluff's Sir Axel of
                Lafayette, Tennessee.
              </p>
              <p>
                This pairing was thoughtfully chosen with the qualities we value
                in the Doberman breed in mind. We believe Kena and Axel
                complement one another well in temperament, structure, and
                overall breed type, and we're excited to see the potential of
                this combination come together in their first litter. Our goal
                is to produce well-rounded Dobermans that can grow into
                confident, loyal, and devoted family companions. These pups are
                75% European and 25% American. Kena is 50/50 regular weight
                85lbs and Axel is 100% European and weight reg 105lbs.
              </p>
            </div>

            <div className="litter-actions">
              <a href="tel:2706054128" className="btn btn--solid">
                Call or Text to Reserve
              </a>
              <a
                href="https://marketplace.akc.org/breeder/megan-faulkner-198244/doberman-pinscher/581958"
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on AKC Marketplace
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET THE PUPPIES ---------- */}
      <section className="section section--surface" id="puppies">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Kena × Axel · 2026</p>
            <h2 className="title">
              Meet the <em>puppies.</em>
            </h2>
          </Reveal>

          <PuppyTable />

          <div className="litter-gallery">
            <h3 className="litter-gallery__title">More from the litter</h3>
            <PhotoGallery photos={kenaxaxelPhotos} />
          </div>

          <div className="center-cta">
            <a href="tel:2706054128" className="btn btn--solid">
              Call or Text to Reserve Your Pick
            </a>
          </div>
        </div>
      </section>

      {/* ---------- ROTTWEILERS ---------- */}
      <section className="section" id="rot-litter">
        <Reveal className="wrap rot-band">
          <div>
            <p className="eyebrow">Rottweilers</p>
            <h2 className="title">No litters currently planned</h2>
            <p>
              Interested in a Young Spirit Raider pup down the road? Reach out
              and we'll add you to the interest list.
            </p>
          </div>
          <div className="rot-band__actions">
            <a href="tel:2706054128" className="btn btn--ghost">
              Get on the List
            </a>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => window.ml?.("show", "8QT94N", true)}
            >
              Litter Alerts
            </button>
          </div>
        </Reveal>
      </section>

      {/* ---------- WHAT'S INCLUDED ---------- */}
      <section className="section section--surface" id="included">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">What's Included</p>
            <h2 className="title">
              Every puppy comes home <em>ready.</em>
            </h2>
          </Reveal>

          <div className="services">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.title} className="service" delay={i * 120}>
                <span className="service__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <p className="litter-note">
            Pricing shared directly when you reach out — every litter is a
            little different.
          </p>
        </div>
      </section>

      {/* ---------- DEPOSITS & WAITLIST ---------- */}
      <section className="section" id="waitlist">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Deposits &amp; Waitlist</p>
            <h2 className="title">
              How reserving a puppy <em>works.</em>
            </h2>
          </Reveal>

          <ol className="steps">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} className="step" delay={i * 120}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="payment-strip">
            <h3>Payment options</h3>
            <ul>
              <li>Cash in person</li>
              <li>Apple Pay</li>
              <li>Venmo</li>
            </ul>
            <p>
              A deposit isn't required just to join the general waitlist — but
              it does affect where you land in pick order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- AGREEMENTS ---------- */}
      <section className="section section--surface" id="agreement">
        <div className="wrap agreements">
          <Reveal className="agreements__intro">
            <p className="eyebrow">Puppy Purchase Agreements</p>
            <h2 className="title" style={{ marginBottom: "1.75rem" }}>
              Clear expectations, <em>both ways.</em>
            </h2>
            <p>
              At Young Spirit Kennel, our puppies are raised with love from the
              very beginning, and there's nothing we love more than seeing them
              become a cherished part of their new families.
            </p>
            <p>
              Our Puppy Purchase Agreements are available below for families to
              review. They provide a clear understanding of what you can expect
              from us and what we ask of the families welcoming one of our
              puppies into their home.
            </p>
            <p>
              Whether your puppy is going home with or without breeding rights,
              our priority remains the same — a happy, healthy, well-loved dog
              and a wonderful addition to your family.
            </p>
            <p>
              Please review the agreement. We'll go over and complete everything
              together when you come to bring your puppy home.
            </p>
          </Reveal>

          <Reveal className="doc-links" delay={150}>
            {AGREEMENTS.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                className="doc-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span className="doc-link__type">Puppy Agreement · PDF</span>
                  <span className="doc-link__title">{doc.title}</span>
                </span>
                <span className="doc-link__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
