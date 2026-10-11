# Portfolio

Minimal, light-mode editorial portfolio. Next.js 16 (App Router, Cache Components, React Compiler), React 19, Tailwind CSS 4, motion. Fonts: Newsreader, Hanken Grotesk, IBM Plex Mono.

## Scripts

- `npm run dev` start the dev server
- `npm run build` production build (`/` is prerendered static)
- `npm run start` serve the build
- `npm run lint` run ESLint

## Content

All content lives in `src/data/` (`site.ts`, `socials.ts`, `projects.ts`, `experience.ts`, `skills.ts`).

### Add a project

1. Drop a screenshot (16:10 works best) into `public/projects/`.
2. Append an object to `src/data/projects.ts` (`image`, `name`, `href`, `description`, `tags`). Set `featured: true` to show it as a large card; otherwise it appears in the hover-preview list.
