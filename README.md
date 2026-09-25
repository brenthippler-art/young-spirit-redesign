# Young Spirit Kennel

Marketing site for Young Spirit Kennel, an AKC-registered Doberman and Rottweiler breeding and boarding operation in Bowling Green, KY.

🔗 [Live Site][https://youngspiritkennel.com/]

## Features

- 9 pages: Home, About Our Kennel, Our Dogs, Litters, Boarding, Photos, FAQ, Contact, and Leave a Review
- Custom brand kit built from scratch — Onyx/Charcoal/Oxblood/Garnet/Brass palette, Fraunces + Work Sans typography, a custom "lineage line" SVG signature element used throughout
- Photo and testimonial carousels (Owl Carousel 2)
- Folder-based photo gallery that auto-loads images via `import.meta.glob` — no manual list to maintain when new photos are added
- Click-to-expand pedigree chart with a reusable photo modal
- Contact form and a dedicated "Leave a Review" form with a star-rating picker, both wired through EmailJS
- FAQ accordion using CSS `grid-template-rows` (0fr → 1fr) rather than hardcoded max-height, for a clean height transition on arbitrary content length

## Tech Stack

React, Vite, React Router, plain CSS (no framework), EmailJS, Owl Carousel 2

## Notable Engineering Details

- Owl Carousel 2.3.4 required jQuery pinned to 3.7.1 for compatibility — a version mismatch silently broke carousel initialization.
- Carousel-cloned slide elements (`cloneNode`) don't carry over React's synthetic event handlers, so click behavior on cloned photo items uses native event delegation via `data-photo-index` attributes instead of React `onClick`.
- Deployed to GoDaddy shared hosting; fixed a 404-on-refresh issue common to client-side-routed SPAs on traditional hosting with an `.htaccess` SPA fallback rule.
- Testimonial data is centralized in a single `src/data/testimonials.js` file, so adding a new review doesn't require touching any component code.

## Running Locally

```bash
git clone https://github.com/brenthippler-art/young-spirit-kennel.git
cd young-spirit-kennel
npm install
npm run dev
```

## Author

Brenton Hippler — Frontend Developer | [brentoncodes.dev](https://brentoncodes.dev)
