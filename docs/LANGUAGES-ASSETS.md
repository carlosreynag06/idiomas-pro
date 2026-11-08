# Languages page — original assets and lesson preview

Three assets were created exclusively for this page. No homepage or About photography is reused. The photographs are illustrative adult learners, not portraits of Carlos or actual enrolled students.

## English learner portrait

- Tool: built-in ImageGen; new generation, opaque background.
- Original: `assets/imagegen/languages-english-original.png` (1122 × 1402).
- Website: `public/images/languages-english.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-fe4f6fcd-cbf4-4bcf-877a-99250e0e2a26.png`.
- Use: English for Spanish speakers section.

Exact final prompt:

> Use case: photorealistic-natural. Create a premium editorial portrait photograph for a private English language lessons website in Puerto Plata. Portrait 4:5 crop of a Dominican man around 30 with short curly dark hair, medium brown skin and a charcoal cotton overshirt, seated at a simple pale oak learning table, confidently explaining an idea to a tutor just outside frame to camera right. He is engaged and thoughtful, slight relaxed smile, one hand making a natural small conversational gesture. An open notebook, graphite pencil and two ivory index cards on the table. A quietly beautiful everyday study room, warm white plaster walls, a muted sage-green bulletin board with blank paper and charcoal frames out of focus. Directional daylight, crisp but soft-edged shadows, tactile fabrics, natural skin texture and subtle fine film grain. Contemporary independent magazine photography with strong composition, human and unposed. The subject is a learner practicing English, not a teacher portrait. No classroom rows, uniforms, business suits, computers, screens, tropical scenery, hotels, resorts, beaches, palm trees, flags, legible text, logos, watermark, collage or extra people. No blue clothing. Single high-quality photograph.

## Spanish learner portrait

- Tool: built-in ImageGen; new generation, opaque background.
- Original: `assets/imagegen/languages-spanish-original.png` (1122 × 1402).
- Website: `public/images/languages-spanish.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-8260d8c9-b052-4d5e-8613-a8c0d47fc5d3.png`.
- Use: Spanish for foreigners section.

Exact final prompt:

> Use case: photorealistic-natural. Create an original premium editorial lifestyle photograph for private Spanish lessons for foreigners who live in Puerto Plata, Dominican Republic. Portrait 4:5 composition. A woman in her early forties with natural auburn shoulder-length hair, light freckled skin, and a simple soft pale-sage linen shirt sits at an everyday language lesson table, leaning forward slightly while listening carefully and smiling with the recognition of understanding something. She holds a pencil loosely over a small cream notebook and a forest-green language workbook. Photograph from an intimate three-quarter angle across the table; in the extreme foreground only a softly blurred male tutor hand, no teacher face. Warm white interior wall, dark olive bookcase with a few quiet books and a ceramic bowl in background, side daylight from an unseen window. Rich tonal contrast, genuine lived-in textures, beautiful skin detail, candid and professional, sophisticated independent magazine art direction with subtle grain. The woman is an adult learner, not a teacher portrait. This is a language-learning scene, not a tourism or travel image. No beaches, palm trees, hotel, resort, swimming pool, maps, flags, phones, laptops, video calls, classroom rows, legible text, brands, watermark or collage. No blue clothing. Single continuous photograph, high detail.

## Ceramic alphabet sculpture

- Tool: Blender 5.2.2 LTS, Cycles, 96 samples with denoising, transparent 1600 × 1300 render.
- Editable scene: `assets/blender/languages-alphabet.blend` (font packed into the scene).
- Reproducible script: `scripts/create-languages-art.py`.
- Master render: `public/images/languages-alphabet.png`.
- Website: `public/images/languages-alphabet.webp` (1200 × 975, preserved alpha).
- Concept: oversized forest-green “a” and citron “ñ” letterforms, extruded and bevelled into tactile ceramic sculptures. Ivory and citron punctuation-like spheres complete the composition. A quiet CSS orbit integrates the transparent sculpture into the sage hero.
- Use: page hero only.

Rebuild from the project root:

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-languages-art.py
npm.cmd run assets
```

## Page behavior and visual system

- Sage hero → white English section → charcoal personal-attention band → sage Spanish section → white lesson preview → citron starting process → white FAQs → sage closing invitation → unchanged shared footer.
- Existing `/languages/#english` and `/languages/#spanish` links remain valid.
- Six explicitly illustrative sample conversations: English/Spanish × everyday/work/beginner. The samples are examples, not a prescribed syllabus or outcome guarantee.
- Native buttons expose selected state with `aria-pressed`; the updated sample is announced politely. Spanish conversation text carries `lang="es"`.
- Preview transitions and shared entrance animations respect reduced-motion preferences.
- Course and preview inquiry buttons pass the selected English/Spanish value to the existing booking dialog. No booking or message is submitted automatically.
- Layouts adapt at 1100, 900, 600, and 370 pixels, with additional hero spacing for short desktop screens. The hero art is preloaded; portraits are lazy-loaded with reserved dimensions.
