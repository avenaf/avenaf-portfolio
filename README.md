# Avena Fan Portfolio

An editorial, one-page portfolio built with React 19, Vite, TypeScript, and Tailwind CSS 4. Its photo tunnel uses CSS 3D transforms and `requestAnimationFrame`; it does not require canvas or WebGL.

## Local development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Production and quality checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Portfolio content

- Experience and project entries are in `src/data/content.ts`. Optional details, images, and links can be added to each entry.
- The hero gallery and portrait URLs are also in `src/data/content.ts`. Replace the temporary Unsplash URLs with local files under `public/` as needed.
- Components are in `src/components/`; layout, colors, and responsive styles are in `src/styles/global.css`.

The site includes responsive navigation, expandable experience/project entries, a persistent light/dark theme toggle, and reduced-motion support. No backend, tracking, or contact form service is included.
