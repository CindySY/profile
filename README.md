# SKYLEWOLF — Cindy Teh

A responsive, five-section React / TypeScript portfolio with GSAP ScrollTrigger, Lenis, Motion, Tailwind CSS, and Lucide icons. Fonts ship locally.

## Develop

Requires Node.js 22.12+ (validated on 24.19) and npm.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
npm run build
npm run preview
```

Use any writable npm cache outside the cloud environment. The development server listens on port 5173. Build output is `dist/`.

## Content and source limitations

The initial repository contained only a README. After enabling network destinations, both reference sites were retrieved on 16 October 2026. The original portfolio provided 24 project images, titles, categories, available project URLs, biography, skills, and LinkedIn profile. All 24 images are stored locally as optimized WebP files (approximately 1.5 MB total). Original project titles are preserved; descriptions repeat the source titles because detailed case studies were unavailable. External destinations are source-listed links; their continued availability is not guaranteed.

The interaction reference was studied for its oversized typography, fullscreen navigation, vertical project rhythm, career presentation, and large contact treatment. This implementation uses its own structure and visual identity.

Career milestones use the five dates and roles provided by Cindy: 2010, 2012, 2015, 2020, and 2025. No employers, outcomes, CV, or additional social profiles were invented. The 13-year experience wording is preserved from the source.

**Concept Lab requires original content before launch:** its two editable entries are clearly labeled placeholders, not completed client work. Motion and creative technology skill rows do not claim a preview when no verified media exists.

- `src/data/profile.ts`: biography, portrait, and user-provided dated career milestones
- `src/data/projects.ts`: categories, descriptions, images, real external links
- `src/data/skills.ts`: disciplines, tools, associated project IDs
- `src/data/concepts.ts`: independent, editable concept entries

Project images are in `public/images/`. Add or update real project links and descriptions in the data files. No project years should be added without verification. Concepts currently use editable text dialogs; replace their placeholder art with original supplied assets before launch.

## Interaction and accessibility

Five semantic main sections, fixed navigation with a native modal dialog and focus containment, skip link, keyboard-accessible project details and skills, native dialog Escape handling, category filters, contact mail link, and back-to-top navigation. Scroll effects clean up on unmount. Lenis and cursor are disabled on touch/reduced motion; the road is simplified visually on mobile. Reduced-motion users see content without scrubbed animation.

## Browser checks

```sh
npm test
```

Tests cover desktop (1440px), mobile (375px), and reduced motion (1024px): section count, menu navigation, filters, dialogs, keyboard skill details, email target, horizontal overflow, and runtime errors. On Windows, run `npx playwright install chromium` before testing. Cloud tests can use the existing browser by setting `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium`.

## Deploy to existing hosting

Run `npm ci` and `npm run build`, then upload **the contents of `dist/`** to your existing hosting’s public web directory (commonly `public_html`, `www`, or the domain document root). Back up the existing site first. This site needs no Node server, database, secrets, or API services. Relative Vite asset paths support a subdirectory deployment. Keep HTTPS enabled. After upload, check navigation, locally bundled fonts, project image paths, and the mail link on mobile and desktop. The exact control-panel workflow depends on your host; deployment has not been performed.
