import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <span className="mark"><img src={logo} alt="Young Spirit Kennel" /></span>
              <span className="word">Young Spirit Kennel</span>
            </div>
            <p style={{ marginTop: 16, maxWidth: 280 }}>
              AKC-registered Doberman &amp; Rottweiler breeding and boarding in Bowling Green, Kentucky.
            </p>
            <p style={{ marginTop: 14, fontSize: 11.5, opacity: 0.5 }}>
              All photos on this site are watermarked to protect our dogs and families.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <div className="foot-links">
              <Link to="/about">About Our Kennel</Link>
              <Link to="/our-dogs">Our Dogs</Link>
              <Link to="/litters">Litters</Link>
              <Link to="/boarding">Boarding</Link>
              <Link to="/photos">Photos</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <div className="foot-links">
              <a href="tel:2706054128">(270) 605-4128</a>
              <a href="tel:2706054133">(270) 605-4133</a>
              <a href="https://www.facebook.com/Young.Spirit.Kennel">Facebook — Young Spirit Kennel</a>
              <a href="https://www.tiktok.com/@meg_faulkner">TikTok — Young Spirit Kennel</a>
              <p style={{ marginTop: 6 }}>Bowling Green, KY · 9 AM–9 PM</p>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Young Spirit Kennel. All rights reserved.</span>
          <span>Family · Spirit · Bond</span>
          <span>Site created and maintained by Brenton Hippler.</span>
          <a href="https://brentoncodes.dev">Brenton Codes</a>
        </div>
      </div>
    </footer>
  );
}
