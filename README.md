# Royal Peacock Painting Co - Single Page Website (React + TS + Vite)

This is a single-page marketing site with a clean section flow:
Hero → Trust → Services → Process → Gallery → Reviews → Areas → Contact

## Tech
- React 18
- TypeScript
- Vite
- CSS tokens (brand colors) + responsive layout
- Data-first content in `src/content/site.ts`

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Deploy (Vercel)
- Push this repo to GitHub
- Import into Vercel
- Add domain: `royalpeacockpainting.com` (and `www` if you want)
- Vercel will show the exact DNS records to add at your registrar

## Where to edit content
- `src/content/site.ts` for company info, services, areas, and CTA text
- `src/styles/tokens.css` for colors and spacing tokens
- `src/assets/` for logos and images

## Versioning
This project starts at version **0.1.0**.
