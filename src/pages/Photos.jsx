import PhotoGallery from "../components/PhotoGallery";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { buildGalleryPhotos } from "../utils/photoGallery";

// Each gallery is its own folder under src/assets/gallery/ — drop a photo
// into the matching folder and it shows up here automatically, no code
// changes needed. import.meta.glob's path has to be a static string Vite
// can analyze at build time, so each folder needs its own glob call.
const dogsModules = import.meta.glob(
  "../assets/gallery/dogs/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);
const kenaxaxelModules = import.meta.glob(
  "../assets/gallery/kenaxaxel26/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);
const boardingModules = import.meta.glob(
  "../assets/gallery/boarding/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);

const GALLERIES = [
  {
    id: "family",
    eyebrow: "Our Dogs",
    title: <>Meet the <em>family.</em></>,
    photos: buildGalleryPhotos(dogsModules, "Young Spirit Kennel dog"),
  },
  {
    id: "litter",
    eyebrow: "Kena × Axel · 2026",
    title: <>The <em>litter.</em></>,
    photos: buildGalleryPhotos(kenaxaxelModules, "Kena x Axel litter photo"),
  },
  {
    id: "boarding",
    eyebrow: "Boarding",
    title: <>Guests having a <em>good time.</em></>,
    photos: buildGalleryPhotos(boardingModules, "Boarding guest"),
  },
];

export default function Photos() {
  return (
    <>
      <Seo
        title="Photos of Our Dogs & Puppies"
        description="Browse photos of the Dobermans, Rottweilers, puppies, and boarding guests at Young Spirit Kennel in Bowling Green, Kentucky."
        path="/photos"
      />

      <PageHero
        eyebrow="Photos"
        title="Our dogs, our puppies, our family"
        intro="Every photo published here is watermarked to protect our dogs and our families from misuse."
      >
        <nav className="jump-links" aria-label="Jump to gallery">
          {GALLERIES.map((g) => (
            <a key={g.id} href={`#${g.id}`}>{g.eyebrow}</a>
          ))}
        </nav>
      </PageHero>

      {GALLERIES.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          className={`section ${i % 2 === 1 ? "section--surface" : ""}`}
        >
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">
                {g.eyebrow} · {g.photos.length} photos
              </p>
              <h2 className="title">{g.title}</h2>
            </Reveal>
            <PhotoGallery photos={g.photos} />
          </div>
        </section>
      ))}
    </>
  );
}