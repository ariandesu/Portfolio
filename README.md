# Mahir Faisal — Portfolio

A light, editorial portfolio for **Mahir Faisal** — full-stack developer, 3D creative and AI builder. Built with Next.js, React, TypeScript and Tailwind CSS, with a small Three.js ghost-cursor accent in the contact section.

**Live:** https://mahir-faisal-portfolio.vercel.app

## What is included

- Responsive one-page portfolio with About, Skills, Education, Projects, Experiments and Contact sections.
- Three full case studies: **ShareFlow**, **STAR PLUS** and **BazarDor**. Each includes the main stack, overview, live and GitHub links, challenges, and potential improvements.
- A generated one-page résumé PDF, available from the hero, contact section, project pages and the dedicated `/resume` route.
- Generated Open Graph image, sitemap, robots rules, favicon and JSON-LD person metadata.
- A generated GhostCursor WebGL trail in the dark contact band. It loads only for devices with a fine pointer and is disabled when `prefers-reduced-motion` is set.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4
- Three.js
- Lucide icons
- Vercel for hosting

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Editing content

- `content/site.ts` — profile, contact details, socials, skills, education, leadership, certifications, languages and experiments.
- `content/projects.ts` — case-study content and project links.
- `app/globals.css` — design tokens, typography aliases, print styles and custom animation.
- `public/images/` — portrait, About photo and project screenshots.

The public contact details are intentionally limited to email, phone, LinkedIn and GitHub. There is no WhatsApp link.

## Résumé PDF

The PDF is generated from the `/resume` page rather than stored as a static document. To regenerate it:

```bash
npm run build
npm run start -- -p 3000

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --disable-gpu \
  --no-first-run \
  --virtual-time-budget=6000 \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/public/Mahir-Faisal-Resume.pdf" \
  http://localhost:3000/resume
```

The print stylesheet hides the site header, footer and page controls so the output is a clean A4 resume.

## Open Graph image

`public/og.png` is generated from `scripts/og.html` with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --no-first-run \
  --allow-file-access-from-files --force-device-scale-factor=1 \
  --window-size=1200,630 --virtual-time-budget=6000 \
  --screenshot="$PWD/public/og.png" \
  "file://$PWD/scripts/og.html"
```

## Deployment

The site is deployed as a static/Next.js project on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production domain if it differs from the fallback in `content/site.ts`.

```bash
vercel --prod
```

The source folders `ghost-cursor/` and `testimonial-portrait-stack/` are design references and are excluded from the deployment via `.vercelignore`.

## Project links

- ShareFlow — https://shareflow.mhr3d.online
- STAR PLUS — https://star-plus.shareflow.workers.dev
- BazarDor — https://bazardor-mhr3d.vercel.app
