# Idiomas Pro

A complete Next.js App Router website for Carlos Reyna’s private, in-person English and Spanish lessons in Puerto Plata, Dominican Republic.

The homepage uses a coordinated charcoal, citron, white, and muted sage palette, with deep-green buttons and UI accents. The section sequence is defined in `app/homepage.css`, including the header and inquiry dialog; the footer retains its original styling. Photography, oversized typography, and original Blender artwork keep the focus on people learning and finding their voice. See `docs/COLOR-SYSTEM.md` for the section map.

## Run locally

Node.js 20.9 or newer is required. The project was built with Node 24 and Next.js 16.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For the production export:

```bash
npm run build
npm start
```

The static production server uses port 3000, or the `PORT` environment variable. Stop the dev server before starting production on the same port.

## Pages

- `/` — full homepage
- `/about/` — Carlos’s background and approach
- `/languages/` — English and Spanish lessons
- `/pricing/` — three editable sample plans
- `/testimonials/` — clearly labeled sample student stories
- `/blog/` — searchable journal with category filters
- `/blog/[slug]/` — six complete articles targeting language-learning searches in Puerto Plata
- `/faq/` — categorized, accessible accordion answers
- `/terms/` and `/privacy/` — provisional documents
- Custom 404, generated sitemap, robots file, social cover, and favicon

The shared header and footer work across every page. The responsive menu, FAQ accordions, article search/filters, conversation typing demo, and inquiry dialog are interactive. Reduced-motion preferences are respected.

## Project structure

```text
app/                    Next.js routes, layouts, metadata, and CSS
components/             Shared layouts and interactive components
lib/content.ts          Articles, FAQs, and sample stories
lib/site.ts             Business information and page metadata
public/images/          Optimized generated imagery and Blender render
assets/imagegen/        Original final ImageGen files
assets/blender/         Editable Blender scene
scripts/                Asset pipeline, Blender scene generation, export QA, preview server
docs/ASSETS.md          Final prompts, paths, and visual asset provenance
```

There is no `src/` directory.

## Inquiry flow

Every lesson CTA opens a three-step inquiry: language → goals and contact information → review. Required fields use native browser validation. The final button prepares a message in the visitor’s email app; the visitor reviews and sends it. There is also a copy fallback.

The website does not automatically send mail, store form submissions, charge visitors, or confirm bookings. No email service credentials are required. The recipient is editable in `lib/site.ts` and currently uses Carlos’s configured Git email address.

## Content to finalize

The sample prices, student names/quotes, and legal documents are visibly provisional. Replace them with confirmed content before public launch. The AI-generated people are illustrative learners, not actual students or a portrait of Carlos.

Set `NEXT_PUBLIC_SITE_URL` to the actual public domain before deployment; the current `https://idiomaspro.com` value is a placeholder. This controls canonical links, sitemap URLs, and structured data. `.env.example` documents the setting.

## Checks

```bash
npm run typecheck
npm run build
npm run check:export
npm run check:preview
```

The export check validates generated page headings/descriptions, internal links and anchors, local images, and the presence of all six article pages.

The preview check requires the local server to be running. It requests and decodes every homepage image over HTTP and checks that all six use distinct sources. Keep the terminal running while viewing localhost so images and page navigation remain available.

## Assets and animation

Photographs were created with the built-in ImageGen tool, then optimized to WebP with Sharp. The original Blender sculpture is retained as an editable `.blend` file and a reproducible Python script. See `docs/ASSETS.md` for exact final prompts and saved paths.

GSAP provides the homepage entrance sequence, viewport reveals, and an automatic conversation sequence with message entrances, typing dots, progressive replies, and scene transitions. The demo loops through three scenarios while visible, pauses offscreen or in a hidden tab, and includes a pause control. Reduced-motion visitors get static conversations with a Next control. DM Sans and Instrument Serif are served locally via Fontsource.

Each article has its own original cover; journal cards do not reuse the hero photograph. The six newer prompts and source paths are documented in `docs/JOURNAL-ASSETS.md`.

## Deployment

`npm run build` generates a Next.js static export in `out/`. Deploy that directory to a static host, or connect this repository to a Next.js-compatible provider. The app retains Next.js routing and individual prerendered pages. It is not a single-page React scaffold.

GitHub origin: https://github.com/carlosreynag06/idiomas-pro
