# About Carlos — original page assets

The About page uses three new assets. Neither photograph is reused from the homepage or journal. Photographs depict illustrative learning situations; they are not a portrait of Carlos or evidence of actual students. The teacher’s face is deliberately outside the hero frame.

## Lesson table

- Tool: built-in ImageGen, new generation, opaque background.
- Original: `assets/imagegen/about-learning-table-original.png` (1122 × 1402).
- Website: `public/images/about-learning-table.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-250078e7-fb43-4c47-9565-e2ec61aa78c1.png`.
- Placement: the page’s opening photograph, showing the human interaction across a shared learning table.

Exact final prompt:

> Use case: photorealistic-natural. Create a premium editorial photograph for the About page of a private in-person language teacher in Puerto Plata. Portrait 4:5 composition, close overhead-oblique crop of a real one-to-one language lesson at a pale sage green table. A Dominican adult learner's hands in the foreground hold a pencil above an open off-white notebook, opposite a male teacher's hands making an encouraging open conversational gesture. Only hands, forearms and partial torsos visible; no faces or heads in frame. One simple ivory ceramic espresso cup, two small blank citron flashcards, a dark green linen-covered book. Teacher wears casual charcoal shirt, learner white cotton. Beautiful directional window light, crisp shadows, honest skin texture, tactile paper grain, sophisticated contemporary magazine art direction, subtle film texture, rich forest-green and citron details against quiet neutral surfaces. Tight purposeful composition with layered diagonals, strong human learning interaction, not a generic stock photograph. No laptops, screens, tourism, beach, resort, palm trees, flags, map, decorative lettering, watermark, collage or rendered typography. Single continuous photograph, high detail.

## Finding your voice

- Tool: built-in ImageGen, new generation, opaque background.
- Original: `assets/imagegen/about-finding-your-voice-original.png` (1536 × 1024).
- Website: `public/images/about-finding-your-voice.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-c4066ebe-9d0d-47a1-8b4a-9fa53ad41ca2.png`.
- Placement: the wide learner feature beside Carlos’s teaching philosophy.

Exact final prompt:

> Use case: photorealistic-natural. New premium editorial lifestyle photograph for a personal language teacher website, horizontal landscape composition 3:2. A Dominican woman in her early thirties in a soft ivory cotton shirt is mid-conversation during an in-person private English lesson in a quiet beautiful everyday study room. Three-quarter close profile, joyful but natural expression, confidently explaining an idea, one hand loosely gesturing. She is looking toward the tutor just outside frame, not at camera. An open notebook and graphite pencil on pale wooden table at lower frame, beautiful tall sage-green painted window shutters behind, simple charcoal bookshelf softly out of focus. Rich deep olive shadows, soft directional daylight across her face, honest skin pores and subtle film grain. Highly art-directed yet candid, sophisticated human magazine portrait, asymmetric crop, warm and alive, no exaggerated stock-photo laughing. No teacher visible, no screens or laptops, no beach, palm trees, resort, tourism, map, flags, signage or text, no blue clothing. Single continuous photograph, high quality.

## Open-book sculpture

- Tool: Blender 5.2.2 LTS, Cycles, 96 samples, denoising, 1400 × 1200 transparent render.
- Editable scene: `assets/blender/about-open-book.blend`.
- Reproducible script: `scripts/create-about-art.py`.
- Master render: `public/images/about-open-book.png`.
- Website: `public/images/about-open-book.webp` (1100 × 943, preserved alpha).
- Concept: a tactile open notebook with forest covers, individual porcelain pages, raised “Hello.” and “Hola.” lettering, a citron bookmark, and a graphite pencil. The two pages express the shared approach to learning either language.
- Placement: the charcoal art panel in the teaching-approach section.

Rebuild from the project root:

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-about-art.py
npm.cmd run assets
```

The optimization script preserves originals and produces WebP files for the website. The page reserves image dimensions, prioritizes its hero photo, and lazy-loads the lower images.
