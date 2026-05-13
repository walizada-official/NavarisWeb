# Novaris Facility Management

Marketing website for Novaris Facility Management, built with React, Vite, and Tailwind CSS.

## Local Setup

```bash
npm install
npm start
```

The local development server runs at the URL printed by Vite, typically `http://localhost:5173`.

## Useful Commands

```bash
npm run lint
npm run build
npm run build:pages
npm run preview
```

`npm run build:pages` creates the GitHub Pages-ready static output in `dist/client`.

## Configuration Notes

- GitHub Pages deploys only the generated `dist/client` output to the `deploy` branch.
- `BASE_PATH` controls the Vite asset base path for project Pages URLs. The workflow sets it to `/NavarisWeb/`.
- The app expects no required environment variables for local development.
- `package-lock.json` is the canonical lockfile for reproducible npm installs.
