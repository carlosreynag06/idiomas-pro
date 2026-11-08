# Testimonios — original design, artwork, and behavior

The actual route is `/testimonios/`. The page body and inquiry dialog are Spanish, with three selected English quotations for foreign residents learning Spanish. Six stories are explicitly illustrative examples. No review score, star rating, verified-customer badge, or real-student photography claim is made.

## Visual direction

White editorial hero with large animated typography and exclusive lesson photography; charcoal story sequence; two full-width editorial quotes on white; sage teaching-approach section with another exclusive photograph; citron closing section with an original ceramic “sí.” sculpture. Header and dialog colors use the existing forest palette. The global footer retains its design, with Spanish copy and a capital H in “Hablemos.”

## ImageGen photographs

Both were generated with the built-in ImageGen tool, copied into the workspace, inspected, and optimized to WebP. The people are illustrative learners, not Carlos or actual testimonial authors.

### Finding the words

- Original: `assets/imagegen/testimonios-first-words-original.png` (1122 × 1402).
- Website: `public/images/testimonios-first-words.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-c681c4c5-9a30-43bc-aef5-bbd1ddbf87dd.png`.
- Placement: hero; the image is a learning scene and does not identify a testimonial author.

Exact prompt:

> Use case: photorealistic-natural. Asset type: premium editorial hero photograph for a private language teacher's student-stories page. A single vertical 4:5 photograph, an intimate documentary moment at an in-person English lesson in Puerto Plata. A Dominican adult woman around 30, rich medium-brown skin, short natural curly dark hair, understated ivory cotton shirt, is in three-quarter profile at a pale oak study table. She has just found the phrase she wanted: a small genuine smile, attentive eyes directed to a teacher outside the frame, one hand gesturing naturally. Her open notebook with indistinct pencil marks, one forest-green workbook, graphite pencil and a single pale citron index card make the learning context unmistakable. Only the teacher's softly blurred hand enters the opposite lower edge, no teacher face. Compose the learner at the upper center, hands and notebook in the lower third, quiet pale sage plaster behind her with an architectural patch of soft window light and a simple blurred shelf. Editorial magazine quality, finely observed human expression, natural skin detail, subtle film grain, sophisticated diffuse daylight, restrained forest shadows, luminous warm whites. Avoid staged stock-photo laughter. No beach, tourism, palms, resorts, hotel scenery, flags, map, phones, laptops, video calls, headsets, blue objects, lettering, logos, watermark or collage. This illustrates learning and must not look like a generic corporate headshot. High quality continuous photograph, generous framing, no cropped fingers.

### Spanish in conversation

- Original: `assets/imagegen/testimonios-spanish-practice-original.png` (1536 × 1024).
- Website: `public/images/testimonios-spanish-practice.webp` (1500 × 1000).
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-ccf20a21-ea80-443b-ac61-a8f9f12a2985.png`.
- Placement: teaching-approach section.

Exact prompt:

> Use case: photorealistic-natural. Asset type: exclusive editorial photograph for the teaching-approach section of a language student's story page. Single landscape 3:2 composition. A thoughtful foreign resident learning Spanish in Puerto Plata, a man around 38 with fair skin, short brown hair and light stubble in a plain washed forest-green cotton shirt, seated at an ordinary pale oak table. He is engaged in a relaxed face-to-face practice conversation; one hand lightly resting on his open cream notebook, the other making a natural modest gesture. His gaze meets the tutor off-camera to the left; tutor face is entirely out of frame, just a softly focused charcoal sleeve and hand in the near left foreground. The learner's expression is attentive, comfortable and quietly pleased rather than a big artificial laugh. A few pale citron practice cards, graphite pencil and water glass. A quiet ivory and sage learning room, book spines blurred in background, gentle architectural window shadows, no exterior view. Frame from tabletop to head with comfortable margin and give hands anatomically clear natural poses. Sophisticated independent magazine photography, beautiful tactile paper and fabric, accurate skin, subtle film grain, dimensional soft daylight, warm whites and muted greens, calm honest human scene. No blue, tourist scenery, beach, palms, resorts, hotel, flags, maps, laptop, phone, headset, screen, video call, lettering, logo, watermark, split image, collage or corporate stock-photo staging. High-quality continuous photograph.

## Original Blender sculpture

- Script: `scripts/create-testimonios-art.py`.
- Editable scene: `assets/blender/testimonios-si.blend`, with the Georgia Bold Italic font packed.
- Master: `public/images/testimonios-si.png` (1500 × 1200, transparent).
- Website: `public/images/testimonios-si.webp` (1100 × 880, transparency preserved).
- Blender 5.2.2 LTS, Cycles, 128 samples, denoising.
- Concept: thick forest ceramic “sí,” ivory echo layer, and citron full stop. Lighting gives the typography a tactile, dimensional finish.
- Placement: citron closing section, with restrained floating motion.

Rebuild from the project root:

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-testimonios-art.py
npm.cmd run assets
```

## Motion and interaction

The hero has staggered rising type and a photograph reveal. The four-story sequence runs automatically every nine seconds, with GSAP quote transitions and elapsed-time progress. Visitors can pause/resume, choose any story, or use previous/next controls. It pauses while hovered, while keyboard focus is inside, offscreen, or in a hidden tab. Reduced-motion preferences disable autoplay and ornamental motion; manual story controls remain available. English quotes carry `lang="en"`. The progress animation uses a ref rather than updating React state every frame.

## Global Spanish navigation

All pages share a Spanish header/mobile menu and footer. “Idiomas,” “Blog,” and “Hablemos” are consistent everywhere. Actual routes, canonicals, sitemap entries, and internal links use `/sobre-carlos/`, `/idiomas/`, `/precios/`, `/testimonios/`, `/blog/`, `/preguntas-frecuentes/`, `/terminos/`, and `/privacidad/`. No English route aliases or redirects are generated. Other page-body copy remains unchanged.
