import Eyebrow from "../components/Eyebrow";
import kenaPups from "../assets/gallery/kenaxaxel26/watermarked-kena-puppies.jpg";
import waitlistGraphic from "../assets/waitlist.png";
import PhotoGallerySection from "../components/PhotoGallerySection";
import { buildGalleryPhotos } from "../utils/photoGallery";

const kenaxaxelModules = import.meta.glob(
  "../assets/gallery/kenaxaxel26/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
  },
);
const kenaxaxelPhotos = buildGalleryPhotos(kenaxaxelModules);

export default function Litters() {
  return (
    <>
      <section className="border-b" style={{ paddingTop: 120 }}>
        <div className="wrap">
          <Eyebrow>Litters</Eyebrow>
          <h1 style={{ fontSize: 44, maxWidth: 700 }}>
            Available &amp; upcoming litters
          </h1>
          <nav className="pill-nav" aria-label="Jump to section">
            <a href="#dob-litter">Dobermans</a>
            <a href="#rot-litter">Rottweilers</a>
            <a href="#included">What's Included</a>
            <a href="#waitlist">Deposits &amp; Waitlist</a>
            <a href="#agreement">Puppy Purchase Agreements</a>
          </nav>
        </div>
      </section>

      <section className="border-b" id="dob-litter">
        <div className="wrap two-col">
          <div className="imgcol">
            <Eyebrow>Dobermans</Eyebrow>
            <img
              src={kenaPups}
              alt="Doberman litter announcement — pregnancy confirmed"
            />
          </div>
          <div>
            <Eyebrow>Update — Kena x Axel</Eyebrow>
            <h2 style={{ fontSize: 30 }}>Kena Nell × Sir Axel</h2>
            <h2 style={{ fontSize: 26, maxWidth: 600 }}>
              🐾 THE PUPPIES ARE HERE! 🐾
            </h2>
            <p className="body-p" style={{ maxWidth: 640 }}>
              We are so excited to announce that Kena and Axel welcomed 12
              beautiful, healthy puppies! ❤️
            </p>
            <h3>🎀 6 Females</h3>
            <ul>
              <li>3 Black & Rust</li>
              <li>3 Red & Rust</li>
            </ul>
            <h3>💙 6 Males</h3>
            <ul>
              <li>3 Black & Rust</li>
              <li>3 Red & Rust</li>
            </ul>
            <p>
              Momma and all 12 babies are doing well, and we couldn’t be more
              thankful. It has been a long, exciting night, so right now our
              focus is on getting everyone settled, comfortable, and getting
              some much-needed rest. 🐾❤️
            </p>
            <p>
              We’ll share more details, pictures, and individual puppy updates
              after Momma, babies, and humans have had a little time to rest. 😊
              Welcome to the world, little ones! ❤️
            </p>
            <p className="body-p" style={{ marginTop: 6 }}>
              Young Spirit's Kena Nell, paired with Cedar Bluff's Sir Axel of
              Lafayette, Tennessee.
            </p>
            <p>
              This pairing was thoughtfully chosen with the qualities we value
              in the Doberman breed in mind. We believe Kena and Axel complement
              one another well in temperament, structure, and overall breed
              type, and we’re excited to see the potential of this combination
              come together in their first litter. Our goal is to produce
              well-rounded Dobermans that can grow into confident, loyal, and
              devoted family companions.
            </p>
            
            <a
              href="tel:2706054128"
              className="btn btn-primary"
              style={{ marginTop: 24 }}
            >
              Call or Text to Reserve Your Pick
            </a>
          </div>
        </div>
        <div className="wrap">
          {/*  */}
          <PhotoGallerySection
            title=""
            photos={kenaxaxelPhotos}
            minTiles={6}
            style={{ marginTop: 44 }}
          />
          {/*  */}
        </div>
      </section>

      <section className="border-b" id="rot-litter">
        <div className="wrap">
          <Eyebrow>Rottweilers</Eyebrow>
          <h2 style={{ fontSize: 26 }}>No litters currently planned</h2>
          <p className="body-p" style={{ maxWidth: 560 }}>
            Interested in a Young Spirit Raider pup down the road? Reach out and
            we'll add you to the interest list.
          </p>
          <a
            href="tel:2706054128"
            className="btn btn-secondary"
            style={{ marginTop: 8 }}
          >
            Get on the List
          </a>
        </div>
      </section>

      <section className="border-b" id="included">
        <div className="wrap">
          <Eyebrow>What's Included</Eyebrow>
          <h2 style={{ fontSize: 26, maxWidth: 560 }}>
            Every Young Spirit puppy comes home with
          </h2>
          <div className="cards3">
            <div className="navcard">
              <h3 style={{ fontSize: 16 }}>Health &amp; Records</h3>
              <p>
                Up-to-date shots and worming, plus a vet check before pickup.
              </p>
            </div>
            <div className="navcard">
              <h3 style={{ fontSize: 16 }}>Registration</h3>
              <p>Microchip and AKC registration papers included.</p>
            </div>
            <div className="navcard">
              <h3 style={{ fontSize: 16 }}>Additional Puppy Preparation</h3>
              <p>
                Tails docked, dew claws removed, and ears cropped unless you
                request otherwise (requires payment up front).
              </p>
              <p>
                Begin crate training, ear care instructions and a quart-sized
                bag of puppy food.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 13, opacity: 0.55, marginTop: 20 }}>
            Pricing shared directly when you reach out — every litter is a
            little different.
          </p>
        </div>
      </section>

      <section className="border-b" id="waitlist">
        <div className="wrap two-col rev">
          <div
            className="imgcol waitlist"
            style={{
              borderRadius: 8,
              border: "1px solid var(--hairline)",
            }}
          >
            <img src={waitlistGraphic} alt="Waitlist and deposit graphic" />
          </div>
          <div>
            <Eyebrow>Deposits &amp; Waitlist</Eyebrow>
            <h2 style={{ fontSize: 28 }}>How reserving a puppy works</h2>
            <p className="body-p">
              Once a litter is announced, we begin taking deposits — deposit
              order sets your pick order. When puppies are born, we announce
              number, gender, and color available.
            </p>
            <p className="body-p">
              If the gender or color you're hoping for isn't available in that
              litter, your deposit rolls to the next one, or we'll talk through
              other options together.
            </p>
            <h3>Payment Options</h3>
            <p>For your convenience, Young Spirit accepts cash payments in person, or electronic payments through Apple Pay or Venmo.</p>
            <p className="body-p" style={{ opacity: 0.6, fontSize: 13.5 }}>
              A deposit isn't required just to join the general waitlist — but
              it does affect where you land in pick order.
            </p>
          </div>
        </div>
      </section>

      <section id="agreement">
        <div className="wrap">
          <Eyebrow>Puppy Purchase Agreements</Eyebrow>
          <p className="body-p">
            At Young Spirit Kennel, our puppies are raised with love from the
            very beginning, and there's nothing we love more than seeing them
            become a cherished part of their new families.
          </p>
          <p className="body-p">
            Our Puppy Purchase Agreements are available below for families to
            review. They provide a clear understanding of what you can expect
            from us and what we ask of the families welcoming one of our puppies
            into their home.
          </p>
          <p className="body-p">
            Whether your puppy is going home with or without breeding rights,
            our priority remains the same -- a happy, healthy, well-loved dog
            and a wonderful addition to your family.
          </p>
          <p className="body-p">
            Please review the agreement. We'll go over and complete everything
            together when you come to bring your puppy home.
          </p>
          <a
            href="/documents/Young_Spirit_Puppy_Agreement_Without_Breeding_Rights.pdf"
            className="btn btn-primary"
            style={{ marginTop: 24 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Puppy Purchase Agreement Without Breeding Rights (PDF)
          </a>
          <br></br>
          <a
            href="/documents/Young_Spirit_Puppy_Agreement_With_Breeding_Rights.pdf"
            className="btn btn-primary"
            style={{ marginTop: 24 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Puppy Purchase Agreement With Breeding Rights (PDF)
          </a>
        </div>
      </section>
    </>
  );
}
