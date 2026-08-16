# Portfolio — Anastasiya Georgieva

Quality Engineering portfolio site. Built with React + Vite + Tailwind CSS v4.

## Status: Phase 0 / Phase 1 complete

- [x] Repo scaffolded (Vite + React + Tailwind v4)
- [x] Design tokens (color, type, layout) — see `src/index.css`
- [x] Hero, About, Experience, Skills, Projects, Contact — real content in place
- [x] GitHub Actions deploy workflow to GitHub Pages
- [ ] Phase 2: Playwright test-run visualization demo
- [ ] Phase 3: k6 load-test results demo (Black Friday case study)
- [ ] Phase 4: SEO/OG tags, PDF export tie-in, final QA pass

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
- Placeholder note in Projects section flags where the interactive k6 demo
  will go (Phase 3).
