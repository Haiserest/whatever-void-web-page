# whatever-void-web-page

Personal playground web app — React 19 + Vite 8 (React Compiler enabled), deployed to GitHub Pages.

**Live:** https://haiserest.github.io/whatever-void-web-page/

## Requirements

- Node 24
- yarn

## Commands

```bash
yarn dev       # dev server → localhost:5173/whatever-void-web-page/
yarn build     # production build → dist/ (+ auto-generates dist/404.html)
yarn preview   # preview the production build locally
yarn lint      # eslint
yarn deploy    # build + publish dist/ to gh-pages branch
```

## Deploy

```bash
yarn deploy
```

Chain (npm/yarn pre/post hooks — single command does everything):

```
yarn deploy
  └─ predeploy  → npm run build
       ├─ build     → vite build        → dist/
       └─ postbuild → scripts/copy-404.js → dist/404.html
  └─ deploy     → gh-pages -d dist     → pushes to gh-pages branch
```

### GitHub Pages deep links (404.html)

This app uses `BrowserRouter`, but GitHub Pages has no SPA fallback — a direct visit or refresh on a sub-path (e.g. `/whatever-void-web-page/travel`) would 404. Fix: `scripts/copy-404.js` copies the built `index.html` to `404.html`, so GitHub Pages serves the app at the requested URL and `BrowserRouter` renders the correct route. Runs automatically via `postbuild` — no extra step needed.

Repo settings: **Settings → Pages** must serve from the `gh-pages` branch.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/sandbox` | Sandbox |
| `/sandbox/document-pdf` | PDF viewer demo (`react-pdf`, password-protected file support) |
| `/travel` | Travel |

Routes are defined in `src/libs/react-router/config/routers.jsx` and rendered by `src/libs/react-router/components/react-router.jsx` (`basename="/whatever-void-web-page"`).

## Structure

```
src/
  main.jsx
  pages/                  # route pages
  libs/
    react-router/         # config-driven router (ROUTERS → <Route>)
    document-pdf/         # PDF viewer: components / services / helpers
    google-sheet/         # useGoogleSheet hook (papaparse → CSV)
scripts/
  copy-404.js             # dist/index.html → dist/404.html (GH Pages SPA fallback)
```

## Notes

- React Compiler is enabled via `babel-plugin-react-compiler` in `vite.config.js` (slower dev/build, see [docs](https://react.dev/learn/react-compiler)).
- pdf.js worker is pinned via CDN in `src/libs/document-pdf/components/document-pdf.jsx`.
