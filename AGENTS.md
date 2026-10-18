# Project Guidelines

## Architecture

- The repository root is the React + Vite application. `index.html` loads `src/main.tsx`.
- Keep UI in `src/components/`, portfolio content in `src/data/content.ts`, and static assets in `public/`.
- Do not reintroduce the removed Next.js scaffold unless the application architecture is intentionally changed.

## Build and validation

- Install dependencies with `npm install`.
- Run `npm run dev` for local development.
- Run `npm run typecheck`, `npm run lint`, and `npm run build` to validate changes.
