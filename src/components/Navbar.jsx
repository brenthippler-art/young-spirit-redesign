import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Our Kennel' },
  { to: '/our-dogs', label: 'Our Dogs' },
  { to: '/litters', label: 'Litters' },
  { to: '/boarding', label: 'Boarding' },
  { to: '/photos', label: 'Photos' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="mark"><img src={logo} alt="Young Spirit Kennel" /></span>
          <span className="word">Young Spirit Kennel<small>Bowling Green, KY</small></span>
        </NavLink>

        <button className="navtoggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>☰</button>

        <nav className={`links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navcall">
          <a className="callbtn" href="tel:2706054128">📞 <span className="full">(270) 605-4128</span></a>
        </div>
      </div>
    </header>
  );
}
