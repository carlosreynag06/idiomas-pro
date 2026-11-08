# Spanish FAQ, terms, and privacy pages

## Routes and copy

Three independent route folders contain their own pages and CSS:

- `app/preguntas-frecuentes/`: hero, searchable FAQ browser, data, and contact section.
- `app/terminos/`: terms page and styles.
- `app/privacidad/`: privacy page and styles.

`components/spanish-pages.css` shares visual rules only. There is no shared content-page folder. Navigation, mobile menu, footer copy, accessible labels, and the entire inquiry dialog are Spanish on these routes. Footer structure and styling are preserved. The rest of the website remains in its existing language for a later translation pass.

Old `/faq/`, `/terms/`, and `/privacy/` URLs render the corresponding new page and declare the Spanish URL as canonical. Internal links and sitemap entries use the new URLs.

## Complete FAQ coverage

All 22 source questions are represented in 21 Spanish questions. The exact repeated beginner-level question from the homepage FAQ and About page is combined, retaining both answers' meaning. Sources: `lib/content.ts` (10), About (3), Languages (4), and Pricing (5).

Run `npm run check:faq-es` with Node 24 or newer. [FAQ-ES-COVERAGE.json](FAQ-ES-COVERAGE.json) maps every source question to its Spanish question and anchor. Search ignores accents/case; six topic controls, result announcements, clear/reset, and native expandable answers support browsing.

## FAQ illustration

- Tool: built-in ImageGen, transparent background; original generation followed by a cutout cleanup edit.
- Final original: `assets/imagegen/es-faq-v2-original.png`.
- Website: `public/images/es-faq-v2.webp`, 1100 × 1100, transparency preserved.
- Generated final source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-10ed454e-63ac-4ea0-a88f-4b13848a50f8.png`.
- Placement: charcoal FAQ hero. Ivory ceramic question mark, citron dot, forest pencil, and folded sage card.

Original generation prompt:

> Use case: stylized-concept. Create an exceptionally polished 3D editorial product-style website illustration for a Spanish-language FAQ page about private English and Spanish lessons. A single large sculptural question mark made from warm ivory glazed ceramic, soft generous rounded bevels and real thickness, floating at a tasteful three-quarter angle. A tiny citron ceramic dot is the question mark's lower dot. A beautifully crafted dark forest-green graphite pencil crosses diagonally behind it and a single folded pale-sage index card floats beside the lower edge, no writing. The main question mark is the unmistakable hero. Contemporary tactile typography sculpture, premium independent design studio aesthetic, detailed subtle ceramic reflections, broad soft studio key light and delicate rim lighting, refined material textures, strong silhouette and balanced compact composition. It will sit on a charcoal website background, so use luminous ivory and pale citron materials with softly shaded sides. Actual transparent background, no ground plane, no backdrop, no cast shadow rectangle. No additional symbols, money, clocks, locks, beach, palms, tourism, flags, phones, computers, logos, legible text or watermark. High quality single isolated composition, approximately square.

Exact final edit prompt:

> Edit this FAQ website illustration. Preserve the ivory ceramic question mark, citron lower dot, forest-green pencil, folded sage card, and their premium tactile materials and relative arrangement. Clean up the cutout: remove every pale halo, colored fringe, stray semi-transparent background cloud and unwanted edge artifact. All empty space must be genuinely fully transparent. Give the complete composition a generous clean transparent margin of about 10% on every side; no part of the objects should touch or be clipped by the canvas edge. The polished result must have crisp clean antialiased object edges and high quality studio lighting with restrained highlights, suitable for use on a dark charcoal website. Do not add any text, symbols, backdrop, shadow rectangle or new objects.

## Two original Blender sculptures

- Script: `scripts/create-spanish-legal-art.py`.
- Editable scenes: `assets/blender/es-terms.blend` and `assets/blender/es-privacy.blend`.
- Master renders: `public/images/es-terms.png` and `public/images/es-privacy.png`.
- Website assets: matching `.webp` files, 1100 × 943, preserved transparency.
- Render: Blender 5.2.2 LTS, Cycles 96 samples, denoising, transparent 1400 × 1200.
- Terms: layered ivory document with raised forest lines and a citron check badge.
- Privacy: rounded forest shield, ivory check badge, and citron envelope. Checks are beveled geometry, avoiding font glyph dependencies.

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-spanish-legal-art.py
npm.cmd run assets
```

## Legal copy and implementation facts

Both documents are dated November 8, 2026 and visibly marked as review versions. They describe the actual React form → review → mailto/copy flow. No automatic submission, backend storage, payment processing, or confirmed booking is claimed. Final commercial terms, cancellation/refund conditions, retention periods, hosting providers, and service particulars still require Carlos's confirmed business details before launch; no arbitrary deadlines, address, registration number, or compliance certification were invented.

Official Dominican references reviewed while writing:

- [Ley 172-13 — Superintendencia de Bancos](https://www.sb.gob.do/regulacion/leyes/ley-no-172-13-proteccion-de-los-datos/).
- [Privacy and ARCO rights — Consultoría Jurídica](https://consultoria.gov.do/privacidad).
- [Consumer rights — Pro Consumidor](https://www.proconsumidor.gob.do/files/Los_derechos_del_consumidor.pdf).
- [Ley 358-05 — Pro Consumidor](https://www.proconsumidor.gob.do/files/Ley_General_de_Proteccin_de_los_Derechos_del_Consumidor_o_Usuario_No__358-05.pdf).

The pages link directly to official references and do not claim to replace individualized legal advice.
