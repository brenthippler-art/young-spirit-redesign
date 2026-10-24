import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './SiteHeader.css';

const NAV = [
  { to: '/our-dogs', label: 'Our Dogs' },
  { to: '/litters', label: 'Litters' },
  { to: '/boarding', label: 'Boarding' },
  { to: '/about', label: 'About' },
  { to: '/photos', label: 'Photos' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Solid background once the user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Stop the page behind the open menu from scrolling
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="wrap site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Young Spirit Kennel home">
          Young Spirit <span>Kennel</span>
        </Link>

        <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} className="site-nav__link">
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--solid site-nav__cta">Inquire</Link>
        </nav>

        <button
          className={`site-header__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}