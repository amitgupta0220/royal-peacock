# Royal Peacock Painting Co (DFW) - Single Page Website

Modern, clean, warm gold + light background design (Vite + React + Tailwind) with:
- Sticky navbar with section anchors
- Hero section that blends with the image (like your mockup)
- Services cards with real images
- Work slider (scroll + arrows)
- Process steps
- Areas served (DFW + nearby)
- Reviews section
- Reusable "Get Free Estimate" CTA that scrolls to the estimate form
- Local SEO (meta tags + JSON-LD schema + robots + sitemap)

## 1) Install + Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

## 2) Build for production

```bash
npm run build
npm run preview
```

## 3) Optional: Real form submission endpoint

By default the form opens the email client (mailto) and sends to:
- info@royalpeacockpainting.com
- estimate@royalpeacockpainting.com

If you want the form to submit online (recommended for conversion), add an endpoint:

Create `.env`:
```bash
VITE_FORM_ENDPOINT=https://your-endpoint.example/estimate
```

The site will POST JSON to that URL.

## 4) Where to edit content quickly

- `src/content/siteData.js` (phone, emails, cities, services, reviews)
- `public/logo-dark.svg` and `public/logo-light.svg` (replace with your real logo later)
- `public/images/*` (all real images included)

## 5) Deployment (fast)

### Option A: Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Option B: Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output: `dist`

## 6) SEO notes (DFW)

Already included:
- Title + description focused on DFW
- OpenGraph/Twitter meta
- `robots.txt` + `sitemap.xml`
- Schema.org JSON-LD type `HousePainter` with service areas

For even stronger local SEO, add:
- Google Business Profile link in footer
- Address + geo coordinates in schema (when you have them)
- Real review links (Google/Yelp) and/or embedded widgets
