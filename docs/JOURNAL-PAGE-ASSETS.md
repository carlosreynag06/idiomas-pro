# Journal page — editorial design and original assets

The Journal has an oversized masthead, an exclusive featured lesson photograph, six distinct existing article covers, searchable topic filters, an editor's note, and an original quotation sculpture. The six article-cover prompts remain in [JOURNAL-ASSETS.md](JOURNAL-ASSETS.md). The new page and article styling use the established charcoal, white, sage, citron, and forest palette.

## Feature photograph

- Tool: built-in ImageGen, opaque background.
- Original: `assets/imagegen/journal-feature-original.png`, 1536 × 1024.
- Website: `public/images/journal-feature.webp`.
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-363e9876-0406-4230-aefb-10a6c28a3948.png`.
- Placement: featured story. The people illustrate a lesson and do not depict Carlos or actual students.

Exact prompt:

> Use case: photorealistic-natural. Create an art-directed editorial photograph for a sophisticated language-learning journal called The Local Word. Single wide landscape 3:2 photograph. An inviting in-person language lesson at a round pale oak table in a quiet everyday study room, seen from a slightly elevated diagonal angle. A Dominican adult woman around 28 with medium brown skin, long dark hair tied back, wearing a pale ivory cotton blouse, sits in three-quarter profile near a large dark-green framed window. She is mid-conversation, relaxed and animated, explaining an idea to the teacher whose charcoal-shirt shoulder, forearm and open gesturing hand are visible at the opposite edge; teacher face entirely outside the frame. An open cream notebook, a small forest-green workbook, one citron index card and two pencils give the conversation a clear learning context. Warm white plaster, simple bookshelves, architectural shadows and a muted sage wall. Beautiful side daylight with rich forest shadows, restrained warm neutrals and fine film grain, natural skin texture, thoughtful asymmetric composition, documentary human warmth rather than staged stock-photo laughter. A real shared learning moment with breathing space around the table. No beach, resort, hotel, tourist scenery, palm trees, maps, flags, computers, phones, video calls, blue clothing, logos, watermark or legible text. Not a portrait of the teacher. High-quality continuous editorial photograph.

## Quotation sculpture

- Tool: Blender 5.2.2 LTS, Cycles, 96 samples, denoising, transparent 1400 × 1100 render.
- Editable scene: `assets/blender/journal-quotation.blend`, with the font packed.
- Script: `scripts/create-journal-art.py`.
- Render: `public/images/journal-quotation.png`.
- Website: `public/images/journal-quotation.webp`, 1200 × 943, transparency preserved.
- Concept: thick ivory opening quotes and citron closing quotes, with a forest pencil. Used in the charcoal editor's note.

Rebuild from the repository root:

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-journal-art.py
npm.cmd run assets
```

## Behavior

Topic and text search combine. Search ignores accents and case, announces result counts, and supports clear/reset and an empty state. The client receives article summaries only. Article pages keep readable text widths, coordinated colors, and related stories prioritized by category. All six full articles remain available.
