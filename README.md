# HYPEPAD — Full Build (08/15)

Production-ready Next.js frontend with backend API stubs and SEO preloaded.

## Quick Start
```bash
npm install
npm run dev
# build for production
npm run build
npm start
```

## Deploy on Vercel
Push to GitHub and connect the repo in Vercel. Framework preset: **Next.js**.

## Structure
- `pages/` — routes
- `pages/api/` — backend JSON stubs
- `components/` — UI components
- `public/` — banner, sitemap.xml, robots.txt
- `styles/globals.css` — dark + orange theme

## Notes
- Connect Wallet button is fixed top-right (not inside the mobile menu).
- SEO: meta + JSON-LD (Organization, WebPage, Product/Offer, Event, FAQ).
- Sitemap and robots.txt included for immediate indexing.
