# Conversion and story-section refinements

## Layout and motion

- Testimonios: a four-metric sage section uses supplied facts: eight years living in the United States, hundreds of students taught in the DR and US, two languages, and private one-to-one instruction. There are no invented ratings or success percentages.
- Its closing CTA now has a narrower overall composition, no grid gap, a wider text measure, and an enlarged sculpture positioned inside an independent frame. This removes the empty space in the transparent image canvas from the visual gap between text and object.
- Testimonios is present in the global desktop and mobile header. Mobile navigation numbering is derived from the number of links.
- Homepage: replaces the three pale quote cards with an exclusive lesson photograph and a large editorial quote. Three native story controls change the quote with a restrained GSAP transition. All examples remain clearly labeled.
- Homepage first-steps section: charcoal surface, ivory headings, muted light supporting text, citron numbering and action.
- About Carlos: an exclusive still-life image breaks up the backstory introduction. A continuous vertical track fills as visitors scroll, with a moving tip and chapter numbers that activate when reached. Geometry is measured with resize observation; scroll work is scheduled with requestAnimationFrame. Reduced-motion mode presents a completed static timeline. Chapter copy remains English.

## Original homepage photograph

- Tool: built-in ImageGen; opaque background.
- Original: `assets/imagegen/home-learning-voices-original.png` (1122 × 1402).
- Website: `public/images/home-learning-voices.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-a02c65a9-ee55-4b9b-bf8e-2d43416d5d35.png`.
- The learner illustrates a lesson and is not an actual testimonial author.

Exact prompt:

> Use case: photorealistic-natural. Asset type: exclusive portrait photograph for a language teacher's homepage testimonial feature. Single vertical 4:5 editorial photograph. A Dominican adult man around 29 with deep brown skin, short natural black curls, clean shaven, wearing an unbranded ivory textured cotton overshirt, sits at a pale oak study table in a quiet language lesson. Capture a thoughtful, confident moment mid-conversation: warm attentive eyes directed slightly out of frame toward a teacher, a subtle relaxed smile, one hand open in a natural explanatory gesture. Include an open cream exercise notebook, graphite pencil and a forest-green book in the lower portion. Only the teacher's soft blurred hand enters the near lower foreground, never a teacher face. Sophisticated independent magazine art direction, gently asymmetric close composition with face and hands clearly readable, soft directional window light, rich natural skin texture, subtle fine film grain, forest-green book spines, muted sage wall, warm ivory plaster. Quiet personal human warmth, not staged corporate laughter. The subject is an illustrative language learner, not an actual testimonial author. No blue, beaches, resorts, palms, tourist scenery, flags, maps, hotels, laptops, phones, headsets, screens, logos, readable text, watermark or collage. High quality continuous documentary-style image; generous clean framing around the head and hands.

## Original backstory photograph

- Tool: built-in ImageGen; opaque background.
- Original: `assets/imagegen/about-backstory-notes-original.png` (1448 × 1086).
- Website: `public/images/about-backstory-notes.webp` (1200 × 900).
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-523f3515-191f-4f7b-a769-ded9e2e533be.png`.
- The study materials are illustrative rather than Carlos's personal records.

Exact prompt:

> Use case: photorealistic-natural. Asset type: a high-quality editorial still life for the personal backstory section of a private English and Spanish teacher's website. Single horizontal 4:3 continuous photograph, intimate overhead diagonal view of a beautifully used personal teaching desk. Three tactile linen-bound notebooks, one forest green, one warm ivory and one muted pale citron, lie partly overlapping with an open cream notebook in the foreground. One graphite pencil rests at a diagonal across the open pages. The notebook contains a few soft, indistinct handwritten lesson marks and diagrams, absolutely no readable words or letters. A small clear water glass, one folded sage index card tucked between pages, and the corner of a dark forest linen pencil pouch. Nothing else. Include warm off-white cotton fabric at one edge and a pale oak surface, with a gentle beautiful late-afternoon window shadow making a diagonal across the arrangement. Sophisticated magazine photography, extremely tactile paper edges, subtle cover wear, natural material detail, controlled quiet composition, dimensional soft daylight, honest warm whites, restrained sage and forest shadows, fine film grain. These objects suggest chapters of learning and teaching, not a travel flat lay. No people, hands, passport, identity papers, tickets, maps, flags, beaches, palms, resorts, tourism, hotel objects, clocks, blue, screens, phones, laptops, decorative coffee props, readable text, logos, watermark or collage. Premium art direction and strong clear material detail; generous compositional breathing room around the notebooks.

Both photographs were inspected before use, copied into the workspace, and optimized with Sharp. Rebuild optimized images with `npm run assets`. The existing original Blender “sí.” sculpture is retained; its editable source and prompt provenance are in [TESTIMONIOS-ASSETS.md](TESTIMONIOS-ASSETS.md).
