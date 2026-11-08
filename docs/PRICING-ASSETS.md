# Pricing page — original assets and plan behavior

The page uses two new assets, with no recycled homepage, About, or Languages imagery. The learner photograph is illustrative and does not depict Carlos or an enrolled student.

## Personal attention photograph

- Tool: built-in ImageGen; new generation, opaque background.
- Original: `assets/imagegen/pricing-personal-attention-original.png` (1536 × 1024).
- Website: `public/images/pricing-personal-attention.webp` (1400 × 933).
- Generated source: `C:/Users/carlo/.codex/generated_images/01a1b2ea-06bf-7111-8990-be5af0db71ed/exec-1272f6ae-f532-4008-9f33-3a9db1804db6.png`.
- Placement: the personal-attention section, alongside the concrete value of an individual lesson.

Exact final prompt:

> Use case: photorealistic-natural. A new premium editorial photograph for the pricing page of a private in-person English and Spanish teacher. Horizontal landscape 3:2 composition. Intimate side view across a pale oak learning table: an adult Dominican woman around 35 with deep brown skin, close-cropped natural curly hair and a white linen shirt is thoughtfully working through her notebook, slight warm smile, focused on a line she is writing. Across from her, only the tutor's hands and charcoal-shirt torso are in frame; no teacher face. One hand indicates a place on a small paper practice sheet while the student writes. Two people giving the lesson their full attention. Quiet everyday studio room, muted sage wall, simple shelves softly blurred. A forest-green notebook, graphite pencil, clear glass of water, one pale citron index card. Composition keeps the learner's face and the shared notebook in one beautiful diagonal. Rich directional window light, honest skin texture, crisp paper detail, tactile fabric, natural imperfection, subtle fine film grain. Calm, personal and professional; sophisticated independent magazine photography rather than exaggerated stock-photo posing. No text, logos, watermark, screens, phones, laptop, coins, money, clocks, tourism, beaches, palm trees, hotels, resorts, flags, collage, blue clothing, or large classroom. Single continuous high-quality photograph.

## Building momentum sculpture

- Tool: Blender 5.2.2 LTS, Cycles, 96 samples with denoising; transparent 1600 × 1300 render.
- Editable scene: `assets/blender/pricing-momentum.blend` (font packed).
- Reproducible script: `scripts/create-pricing-art.py`.
- Master render: `public/images/pricing-momentum.png`.
- Website: `public/images/pricing-momentum.webp` (1200 × 975, preserved transparency).
- Concept: three ascending stacks of one, four, and eight linen-covered notebooks. Raised numerals, separate covers and page blocks, subtle page edges, and ribbon bookmarks give the sculpture a tactile quality. Forest, citron, and ivory match the site’s established palette.
- Placement: charcoal pricing hero only.

Rebuild from the project root:

```powershell
& 'C:/Users/carlo/AppData/Local/Programs/Blender 5.2 LTS/blender-5.2.2-windows-x64/blender.exe' --background --python scripts/create-pricing-art.py
npm.cmd run assets
```

## Plans and inquiry behavior

The existing sample rates are retained and centralized in `lib/lesson-plans.ts`:

| Plan | Lessons | Total RD$ | RD$ per lesson | Saving compared with individual lessons |
| --- | --- | --- | --- | --- |
| A fresh start | 1 | 1,200 | 1,200 | — |
| A little momentum | 4 | 4,400 | 1,100 | 400 |
| Going places | 8 | 8,000 | 1,000 | 1,600 |

Each lesson is shown as 60 minutes. Rates remain explicitly illustrative until confirmed by Carlos. Payment methods, timing, package scheduling, and rescheduling terms are agreed directly; no new payment processor or automatic booking was added.

Language selectors use native buttons with `aria-pressed`. Either language uses the same rate. The selected language and package are passed into the existing inquiry dialog. The package is visible on the first step and final review and included in the prepared email and copy fallback. A general inquiry clears any previously selected package. No inquiry is transmitted until the visitor opens their email app and sends it.

The page alternates charcoal, white, sage, and citron sections. The shared footer is unchanged. Plans stack into a single column below 900 pixels; the hero and value sections also adapt to phone and tablet widths.
