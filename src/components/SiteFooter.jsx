import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./SiteFooter.css";

const EXPLORE = [
  { to: "/about", label: "About Our Kennel" },
  { to: "/our-dogs", label: "Our Dogs" },
  { to: "/litters", label: "Litters" },
  { to: "/boarding", label: "Boarding" },
  { to: "/photos", label: "Photos" },
  { to: "/faq", label: "FAQ" },
  { to: "/leavereview", label: "Leave a Review" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__main">
          <Link
            to="/"
            className="site-footer__logo"
            aria-label="Young Spirit Kennel home"
          >
            <img src={logo} alt="" />
          </Link>

          <div className="site-footer__cols">
            <div>
              <p className="site-footer__name">
                Young Spirit <span>Kennel</span>
              </p>
              <p className="site-footer__about">
                AKC-registered Doberman &amp; Rottweiler breeding and boarding
                in Bowling Green, Kentucky.
              </p>
            </div>

            <div>
              <h4 className="site-footer__heading">Explore</h4>
              <ul className="site-footer__list">
                {EXPLORE.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="site-footer__heading">Get in Touch</h4>
              <ul className="site-footer__list">
                <li>
                  <a href="tel:2706054128">(270) 605-4128</a>
                </li>
                <li>
                  <a href="tel:2706054133">(270) 605-4133</a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Young.Spirit.Kennel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@meg_faulkner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li className="site-footer__muted">
                  Bowling Green, KY · 9 AM–9 PM daily
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} Young Spirit Kennel. All rights
            reserved.
          </span>
          <span>
            All photos are watermarked to protect our dogs and families.
          </span>
        </div>
      </div>
    </footer>
  );
}
