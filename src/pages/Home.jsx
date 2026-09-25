import { Link } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow';
import LineageDivider from '../components/LineageDivider';
import NavCard from '../components/NavCard';
import { getTestimonials } from '../data/testimonials';
import TestimonialCarousel from '../components/TestimonialCarousel';
import logo from '../assets/logo.png';
import litterAnnouncement from '../assets/litter-announcement.png';

export default function Home() {
  return (
    <>
      <div className="alertbar">
        <div className="wrap">
          <div className="txt">
            🐾 <b>Litter Update: Kena x Axel</b> — We are so excited to announce that Kena and Axel welcomed 12 beautiful, healthy puppies! ❤️
          </div>
          <Link to="/litters" className="pill">Reserve Your Pick →</Link>
        </div>
      </div>
      <div className="hero">
        <div className="hero-inner">
          <div className="crest"><img src={logo} alt="Young Spirit Kennel crest" /></div>
          <h1>Young Spirit Kennel</h1>
          <div className="sub italic-accent">Family · Spirit · Bond</div>
          <p className="lede">
            Proudly raising AKC-registered Dobermans & Rottweilers in Bowling Green, Kentucky. We’re dedicated to raising quality dogs with the health, temperament, and companionship families are looking for. We’re also beginning to offer limited boarding, where every dog in our care is treated like part of the family, with plans to expand as we continue to grow and work toward a larger kennel facility.
          </p>
          <div className="ctas">
            <Link to="/litters" className="btn btn-primary">View Available Litters</Link>
            <Link to="/our-dogs" className="btn btn-secondary">Meet Our Dogs</Link>
          </div>
        </div>
      </div>


      <section className="section-light">
        <div className="wrap">
          <Eyebrow>Find your way around</Eyebrow>
          <h2 style={{ fontSize: 32, maxWidth: 600 }}>Discover Everything Young Spirit Kennel, all in one place.</h2>
          <div className="cards3">
            <NavCard
              kicker="Our Dogs"
              title="Meet the family"
              description="Pedigrees, temperaments, and the dogs behind every litter we plan."
              to="/our-dogs"
              linkLabel="Meet them"
            />
            <NavCard
              kicker="Litters"
              title="Upcoming & available"
              description="Due dates, what's included, and how deposits hold your pick."
              to="/litters"
              linkLabel="See litters"
            />
            <NavCard
              kicker="Boarding"
              title="Care while you're away"
              description="Daily rates, one-on-one attention, and what to know before drop-off."
              to="/boarding"
              linkLabel="See boarding"
            />
          </div>
        </div>
      </section>

      <LineageDivider />

      <section className="border-b" style={{ paddingTop: 24 }}>
        <div className="wrap two-col">
          <div>
            <Eyebrow>About the name</Eyebrow>
            <h2 style={{ fontSize: 34 }}>Where "Young Spirit" comes from</h2>
            <p className="body-p">
              "Young" comes from a family maiden name — and it echoes the lively, youthful spark
              dogs carry throughout their lives. "Spirit" speaks to their loyal, intuitive nature,
              and the honest bond they form with the people who love them.
            </p>
            <p className="body-p">
              Whether we're raising puppies or caring for a dog who's staying with us, our focus
              stays the same: confidence, comfort, and trust.
            </p>
            <Link to="/about" className="btn btn-secondary" style={{ marginTop: 24 }}>Read Our Full Story</Link>
          </div>
          <div className="imgcol">
            <img src={litterAnnouncement} alt="Young Spirit Kennel litter announcement" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Eyebrow center>What families say</Eyebrow>
          <h2 className="center" style={{ fontSize: 30 }}>A few kind words</h2>
          <TestimonialCarousel testimonials={getTestimonials('boarding')} />       
        </div>
      </section>
    </>
  );
}
