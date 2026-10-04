# Portfolio — Anastasiya Georgieva

Quality Engineering portfolio site. Built with React + Vite + Tailwind CSS v4.

## Status: Final version

- [x] Repo scaffolded (Vite + React + Tailwind v4)
- [x] Design tokens (color, type, layout) — see `src/index.css`
- [x] Hero, About, Experience, Skills, Projects, Contact — real content in place
- [x] GitHub Actions deploy workflow to GitHub Pages
- [x] Phase 2: Playwright test-run visualization demo
- [x] Phase 3: k6 load-test results demo (Black Friday case study)
- [x] Phase 4: SEO/OG tags, résumé PDF, navigation, and final QA pass

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The résumé PDF is generated with:

```bash
python scripts/generate-resume-pdf.py
```

## Privacy-friendly visitor analytics

The footer can show the portfolio's total view count, while the GoatCounter
dashboard provides visit trends, referring sites, and approximate visitor
locations. Analytics are disabled until a GoatCounter site code is configured.

1. Create a site at [GoatCounter](https://www.goatcounter.com/) and note its
  site code (the subdomain before `.goatcounter.com`).
2. In GoatCounter site settings, enable **Allow adding visitor counts on your
  website** to permit the public total counter.
3. For local development, create `portfolio/.env.local` with
  `VITE_GOATCOUNTER_CODE=your-site-code` and restart Vite.
4. For GitHub Pages, add a repository Actions variable named
  `GOATCOUNTER_CODE` with that same site code. The deployment build will then
  enable tracking and the public counter.

GoatCounter is privacy-oriented and reports aggregated location/referrer
analytics rather than identifying individual visitors. Visitors using blockers
or disabled JavaScript may not be counted. See the
[GoatCounter visitor counter documentation](https://www.goatcounter.com/help/visitor-counter).

## Deploying to GitHub Pages

1. Push this repo to GitHub (see steps below if starting fresh).
2. In the repo settings -> Pages, set Source to "GitHub Actions".
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically.
4. If deploying to `https://<username>.github.io/<repo-name>/` (project page,
   not a user/org page), update `base` in `vite.config.js` to `'/<repo-name>/'`.

### Pushing this project to GitHub for the first time

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Content notes

- Hero, About, and Experience content is sourced from the CV and the Black
  Friday performance-testing case study discussed during planning.
- The Projects section references `car-watcher` (live on GitHub) and the CV
  Builder tool — update the CV Builder link once it's deployed somewhere
  public.
- The Contact section includes the generated one-page résumé PDF,
  `public/anastasiya-georgieva-resume.pdf`, and a copy-to-clipboard email action.
- The site includes responsive section navigation, Open Graph/Twitter metadata,
  canonical metadata, and Person structured data for search and sharing.
