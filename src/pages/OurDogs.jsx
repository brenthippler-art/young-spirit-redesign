import { useState } from "react";
import PageHero from "../components/PageHero";
import DogProfile from "../components/DogProfile";
import PhotoModal from "../components/PhotoModal";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { DOGS } from "../data/dogs";
import heroPhoto from "../assets/gallery/dogs/watermarked-img-1788127096915-1-572437585_122211852464274100_1535396461349607346_n.jpg";

// The modal steps through every pedigree on the page, in DOGS order.
const PEDIGREES = DOGS.map((dog) => ({
  src: dog.pedigree,
  alt: `${dog.name}'s pedigree chart`,
  name: dog.name,
}));

const BREED_SECTIONS = [
  { id: "doberman", breed: "Doberman", eyebrow: "Dobermans", title: <>Elegant. Alert. <em>Devoted.</em></> },
  { id: "rottweiler", breed: "Rottweiler", eyebrow: "Rottweilers", title: <>Steady. Powerful. <em>Loyal.</em></> },
];

export default function OurDogs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Seo
        title="Our Doberman & Rottweiler Breeding Dogs"
        description="Meet the AKC-registered Dobermans and Rottweilers behind our litters at Young Spirit Kennel in Bowling Green, Kentucky."
        path="/our-dogs"
      />

      <PageHero
        eyebrow="Our Dogs"
        title="The dogs behind every litter"
        intro="Every pairing is planned around health, temperament, structure, and pedigree — never chosen at random. Here's the family doing the work."
        image={heroPhoto}
        imageAlt="A black and rust Doberman and a red Doberman sitting together in the woods"
      >
        <nav className="jump-links" aria-label="Jump to section">
          <a href="#doberman">Dobermans</a>
          <a href="#rottweiler">Rottweilers</a>
        </nav>
        <p className="page-hero__note">
          All of our dogs are AKC registered. To help protect against fraud, we do not
          publish registration numbers on our website — these are available to verified
          buyers upon request.
        </p>
        <a href="tel:2706054128" className="btn btn--solid">Call or Text Now</a>
      </PageHero>

      {BREED_SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`section ${sectionIndex % 2 === 1 ? "section--surface" : ""}`}
        >
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="title">{section.title}</h2>
            </Reveal>

            {DOGS.filter((dog) => dog.breed === section.breed).map((dog, i) => (
              <DogProfile
                key={dog.id}
                dog={dog}
                reverse={i % 2 === 1}
                onPedigreeClick={() => setOpenIndex(DOGS.indexOf(dog))}
              />
            ))}
          </div>
        </section>
      ))}

      <PhotoModal
        photos={PEDIGREES}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}