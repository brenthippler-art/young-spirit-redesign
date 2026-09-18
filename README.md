# Young Spirit Kennel — Website

React + Vite + React Router site for Young Spirit Kennel (Bowling Green, KY —
AKC-registered Doberman & Rottweiler breeding and boarding).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  assets/          brand images (logo, litter announcement, pedigree chart)
  components/      shared UI: Navbar, Footer, DogTag, NavCard, FaqItem, etc.
  pages/           one file per route
  App.jsx          route definitions
  index.css        global stylesheet — brand colors live in :root at the top
```

## Pages / routes

| Route         | Page             |
|---------------|------------------|
| `/`           | Home             |
| `/about`      | About Our Kennel |
| `/our-dogs`   | Our Dogs         |
| `/litters`    | Litters          |
| `/boarding`   | Boarding         |
| `/photos`     | Photos           |
| `/faq`        | FAQ              |
| `/contact`    | Contact          |

## Brand

Color tokens and type choices are documented in the brand kit delivered
separately. All colors live as CSS custom properties at the top of
`src/index.css` (`--onyx`, `--oxblood`, `--garnet`, `--brass`, etc.) — change
them there and they cascade everywhere.

## Known placeholders (pending content from the owners)

- Dog photos on `/our-dogs` — currently placeholder tiles
- Rottweiler pedigree chart — pending
- Testimonials — sample quotes throughout, swap for real reviews
- Contact form on `/contact` — visual only, not wired to a backend yet
- Photo watermarking — apply before any real photos go into `/photos` or the gallery
