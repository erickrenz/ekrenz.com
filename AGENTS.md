# Repository Guidelines

## Project Structure & Module Organization

This is a map-first atlas built with TanStack Start, React, OpenLayers, and Tailwind CSS.

- `src/routes/` contains TanStack Router route modules. `__root.tsx` defines the app shell; `index.tsx` is the homepage route.
- `src/components/` contains reusable React components.
- `src/data/` contains local content modules such as `featuredScenes.ts`.
- `src/styles/global.css` contains global Tailwind and app styling.
- `src/router.tsx` wires the router. `src/routeTree.gen.ts` is generated; do not hand-edit it.
- `public/` contains static assets such as `favicon.svg`.
- `docs/` contains product notes. `dist/` is generated build output.

## Build, Test, and Development Commands

- `npm install` installs dependencies from the lockfile.
- `npm run dev` starts the local Vite dev server on port `3000`.
- `npm start` is an alias for `npm run dev`.
- `npm run build` creates the production build and is the main verification command.
- `npm run preview` serves the built app locally for final inspection.

There is no dedicated `test`, `lint`, or `format` script. Use `npm run build` before submitting changes.

## Coding Style & Naming Conventions

Use TypeScript, React function components, and ES modules. `strict` TypeScript is enabled. Use the `~/*` alias for imports from `src`.

Follow the existing style: two-space indentation, single quotes, no semicolons, and concise modules. Name React components in `PascalCase`, route files by TanStack Router convention, and data exports with descriptive camelCase names.

Tailwind CSS v4 is configured through Vite. Prefer utility classes and existing global styles before adding CSS.

## Testing Guidelines

No test framework is configured. For now, validate changes with:

```bash
npm run build
```

If tests are added, place component or route tests near the code they cover or under `src/test/`. Use names such as `AtlasMap.test.tsx` and add an `npm test` script.

## Commit & Pull Request Guidelines

Recent commits use short, imperative subject lines such as `Refine homepage scene controls` and `Add featured scene navigation`. Keep commits focused and use the same style.

Pull requests should include a brief summary, the verification command run, and screenshots for visible UI changes. Link related issues or docs when applicable, and call out generated-file changes.

## Agent-Specific Instructions

Keep edits scoped to the requested change. Do not modify generated files, build output, or unrelated docs unless required. When changing routes, let TanStack tooling regenerate route metadata.
