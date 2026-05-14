# Novaris Facility Management

Marketing website for Novaris Facility Management, built with React, TanStack Router, Vite, and Tailwind CSS.

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
npm run preview
```

## IONOS Static Hosting

```bash
npm run build
```

Upload the generated `dist/` folder to the IONOS webspace. The included `.htaccess` file rewrites direct page requests back to the SPA entry point.

## Configuration Notes

- The app expects no required environment variables for local development or production builds.
- `package-lock.json` is the canonical lockfile for reproducible npm installs.
