# Original visual assets

The three primary photographs were generated with the built-in ImageGen tool. They illustrate the language-learning experience; they do not depict Carlos or actual students. The original travel-led assets were removed following the design correction. Six additional, distinct article covers are documented in `docs/JOURNAL-ASSETS.md`.

## confident-learner

An adult learner expressing an idea during a private lesson.

- Original: `assets/imagegen/confident-learner-original.png`
- Website asset: `public/images/confident-learner.webp`
- Generation mode: built-in ImageGen (no API key)

Final prompt:

> Use case: photorealistic-natural. Asset type: high-end language education website HERO photograph, portrait 4:5 composition. A candid, expressive photograph of a young adult Dominican woman with medium brown skin, natural curly dark hair, wearing a cobalt blue blouse, seated at an ivory classroom table during a private one-to-one language lesson. She is mid-sentence, smiling with the joy of finally expressing an idea confidently, hands naturally gesturing. The tutor is only partially visible as a cropped shoulder and hand at the left edge, no teacher face. On the table: an open notebook with vocabulary practice, small blue and pale yellow language flashcards, a pencil. Contemporary intimate learning studio, soft cream walls, one cobalt graphic print in soft focus, no tourist environment. Editorial education campaign photography shot on 50mm lens, warm authentic skin tones, sophisticated vibrant cobalt and cream palette, beautiful directional daylight, subtle film grain, natural spontaneous real human expression, sharply focused eyes and realistic anatomy. Premium art direction, emotionally engaging and unmistakably about a person learning to speak a new language. Avoid: travel imagery, streets, architecture, landmarks, palms, beaches, hotels, flags, artificial stock photo poses, stiff handshakes, laptop screens, floating words, legible text, watermarks. The learner and her expression are the clear focal point; the notebook is visible in lower composition.

## personal-lesson

A personal language lesson with a learner and a cropped tutor.

- Original: `assets/imagegen/personal-lesson-original.png`
- Website asset: `public/images/personal-lesson.webp`
- Generation mode: built-in ImageGen (no API key)

Final prompt:

> Use case: photorealistic-natural. Asset type: editorial photograph for a private English and Spanish language teaching website, landscape 3:2. A close, beautifully composed view across a table during a one-to-one adult language lesson in a contemporary cream and cobalt teaching studio. Two adult learners in the scene, a Dominican male language tutor shown cropped below the nose on the left, an adult fair-skinned male student around 35 wearing an oatmeal linen shirt on the right, engaged and relaxed as he speaks. Faces may be partial; the focus is naturally expressive hands and learning materials. On the table are open paper notebooks with handwritten language practice, cobalt pencil, a few cream and citron flashcards showing simple letter forms in soft focus. Rich natural directional light through a large unseen window, beautiful realistic skin tones, tactile paper and fabric, honest candid atmosphere. Premium education editorial campaign, 50mm photograph, subtle film texture, no cheesy smiles at camera. No cafe, no tourism, no hotel, no street, no tropical foliage, no beach, no flags, no laptops, no watermarks, no legible phrases. Clearly a personal face-to-face language learning session. Composition the student on right, learning materials central, relaxed respectful interaction.

## study-materials

An editorial composition of language notebooks and vocabulary cards.

- Original: `assets/imagegen/study-materials-original.png`
- Website asset: `public/images/study-materials.webp`
- Generation mode: built-in ImageGen (no API key)

Final prompt:

> Use case: photorealistic-natural. Asset type: art-directed editorial still life for premium adult language learning website journal, landscape 3:2 photograph. A tactile composition on an ivory desk: a thick open cream notebook covered in loosely handwritten language-learning practice marks that are intentionally out of focus and not readable, cobalt blue pencil, expressive ivory and pale citron paper vocabulary flashcards, a closed cobalt blue language workbook without visible text, reading glasses placed on corner. One neatly arranged small stack of cards. Close crop, hard beautiful late-afternoon side light makes graphic shadows across paper, tasteful sophisticated rich cobalt blue and citron yellow accents against warm cream. Premium graphic education campaign meets editorial stationery photography, realistic paper grain, realistic photographic perspective, no commercial branding. Learning materials are the unmistakable subject. No coffee cups, no cafe, no hotels, no travel imagery, no tropical plants, no streets, no flags, no globes, no maps, no text overlays, no watermark, no laptops. Elegant modern visual composition with diagonal paper and strong visual hierarchy.

# Blender artwork

- Editable scene: `assets/blender/conversation.blend`
- Reproducible Blender Python source: `scripts/create-conversation-art.py`
- Full-resolution transparent render: `public/images/conversation-sculpture.png`
- Optimized asset: `public/images/conversation-sculpture.webp`

Two ceramic speech bubbles in cobalt and citron, with dimensional dots, soft studio lighting, and a transparent background. Created and rendered with the locally installed Blender 5.2 LTS using Cycles.

The homepage also has a charcoal-and-citron variant, created in Blender with the same geometry and lighting:

- Editable scene: `assets/blender/conversation-charcoal.blend`
- Full-resolution render: `public/images/conversation-sculpture-charcoal.png`
- Optimized homepage asset: `public/images/conversation-sculpture-charcoal.webp`
- Reproduce with Blender: `blender --background --python scripts/create-conversation-art.py -- --charcoal`

Run `npm run assets` to regenerate optimized WebP assets and the social sharing cover from the retained originals. Fonts are installed locally through Fontsource; the website makes no Google Fonts request.
