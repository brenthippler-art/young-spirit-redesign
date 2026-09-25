import { useState } from "react";
import Eyebrow from "../components/Eyebrow";
import DogTag from "../components/DogTag";
import PhotoModal from "../components/PhotoModal";
import kenaPhoto from "../assets/kena.jpeg";
import saintPhoto from "../assets/saint.jpeg";
import raiderPhoto from "../assets/raider.jpeg";
import kenaPedigree from "../assets/pedigree.jpeg";
import saintPedigree from "../assets/222C6997-8352-41BB-A3A1-9188BDEBFEB7.jpeg";
import raiderPedigree from "../assets/7D7411B9-C7CB-49A5-B239-F6F728A6CA8B.jpeg";

// One shared list so the modal can step between every pedigree on the page
// with prev/next, regardless of which section (Doberman or Rottweiler) the
// person clicked into first.
const PEDIGREES = [
  {
    src: kenaPedigree,
    alt: "Kena Nell's pedigree chart",
    name: "Young Spirit's Kena Nell",
  },
  {
    src: saintPedigree,
    alt: "Saint's pedigree chart",
    name: "Young Spirit's Saint",
  },
  {
    src: raiderPedigree,
    alt: "Raider's pedigree chart",
    name: "Young Spirit's Raider",
  },
];

export default function OurDogs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="border-b" style={{ paddingTop: 120 }}>
        <div className="wrap">
          <Eyebrow>Our Dogs</Eyebrow>
          <h1 style={{ fontSize: 44, maxWidth: 700 }}>
            The dogs behind every litter
          </h1>
          <p className="body-p" style={{ maxWidth: 640 }}>
            Every pairing is planned around health, temperament, structure, and
            pedigree — never chosen at random. Here's the family doing the work.
          </p>
          <nav className="pill-nav" aria-label="Jump to section">
            <a href="#doberman">Dobermans</a>
            <a href="#rottweiler">Rottweilers</a>
            <p>
              All of our dogs are AKC registered. To help protect against fraud,
              we do not publish registration numbers on our website — these are
              available to verified buyers upon request. If you have any
              questions about registration, please contact us directly via
              email, phone call or FaceTime.{" "}
            </p>
          </nav>
          <a
            href="tel:2706054128"
            className="btn btn-primary"
            style={{ marginTop: 28 }}
          >
            Call or Text Now
          </a>
        </div>
      </section>

      <section className="border-b" id="doberman">
        <div className="wrap">
          <Eyebrow>Dobermans</Eyebrow>
          <div className="dogtag-grid">
            <DogTag
              photoSrc={kenaPhoto}
              photoPosition="center 37%"
              noRivet
              name="Young Spirit's Kena Nell"
              meta="Doberman · Red & Rust · Dam"
              pedigreeSrc={PEDIGREES[0].src}
              pedigreeAlt={PEDIGREES[0].alt}
              onPedigreeClick={() => setOpenIndex(0)}
              description=""
            />
            <DogTag
              photoSrc={saintPhoto}
              photoPosition="center 25%"
              noRivet
              name="Young Spirit's Saint"
              meta="Doberman · Black & Rust · Sire"
              pedigreeSrc={PEDIGREES[1].src}
              pedigreeAlt={PEDIGREES[1].alt}
              onPedigreeClick={() => setOpenIndex(1)}
              description=""
            />
          </div>
        </div>
      </section>

      <section id="rottweiler">
        <div className="wrap">
          <Eyebrow>Rottweilers</Eyebrow>
          <div className="dogtag-grid">
            <DogTag
              name="Young Spirit's Raider"
              photoSrc={raiderPhoto}
              photoPosition="center 25%"
              meta="Rottweiler · Sire"
              pedigreeSrc={PEDIGREES[2].src}
              pedigreeAlt={PEDIGREES[2].alt}
              onPedigreeClick={() => setOpenIndex(2)}
              noRivet
              description="Available as stud."
            />
          </div>
        </div>
      </section>

      <PhotoModal
        photos={PEDIGREES}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
