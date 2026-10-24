import Eyebrow from "../components/Eyebrow";
import PhotoGallerySection from "../components/PhotoGallerySection";
import { buildGalleryPhotos } from "../utils/photoGallery";
import Seo from "../components/Seo";

// Each gallery is its own folder under src/assets/gallery/ — drop a photo
// into the matching folder and it shows up here automatically, no code
// changes needed. import.meta.glob's path has to be a static string Vite
// can analyze at build time, so each folder needs its own glob call; the
// shared buildGalleryPhotos() helper does the rest (sorting + turning
// filenames into alt text).
const dogsModules = import.meta.glob(
  "../assets/gallery/dogs/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
  },
);
const kenaxaxelModules = import.meta.glob(
  "../assets/gallery/kenaxaxel26/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
  },
);
const boardingModules = import.meta.glob(
  "../assets/gallery/boarding/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
  },
);

const dogsPhotos = buildGalleryPhotos(dogsModules);
const kenaxaxelPhotos = buildGalleryPhotos(kenaxaxelModules);
const boardingPhotos = buildGalleryPhotos(boardingModules);

export default function Photos() {
  return (
    <>
      <Seo
        title="Photos of Our Dogs & Puppies"
        description="Browse photos of the Dobermans, Rottweilers, puppies, and boarding guests at Young Spirit Kennel in Bowling Green, Kentucky."
        path="/photos"
      />
      <section style={{ paddingTop: 120 }}>
        <div className="wrap">
          <Eyebrow>Photos</Eyebrow>
          <h1 style={{ fontSize: 44, maxWidth: 700 }}>
            Our dogs, our puppies, our family
          </h1>
          <p className="body-p" style={{ maxWidth: 600 }}>
            Every photo published here is watermarked to protect our dogs and
            our families from misuse.
          </p>

          <PhotoGallerySection
            title="Meet the family"
            photos={dogsPhotos}
            minTiles={6}
            style={{ marginTop: 44 }}
          />
          <PhotoGallerySection
            title="Kena x Axel Litter 2026"
            photos={kenaxaxelPhotos}
            minTiles={6}
            style={{ marginTop: 44 }}
          />
          <PhotoGallerySection
            title="Boarding guests having a good time"
            photos={boardingPhotos}
            minTiles={6}
          />
        </div>
      </section>
    </>
  );
}
