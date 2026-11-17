# Inicio 2 — alternate homepage experiment

The comparison lives at `/inicio-2/`, with an “Inicio 2” link in the global header only. It has its own route folder and CSS, is marked noindex, and is excluded from the sitemap. There are no new image assets or typography changes.

`components/home-page.tsx` holds the shared homepage content. The original `/` renders its default order; the experiment passes `aboutFirst` to render Hero → About Carlos → Languages → Learning method → Trust band → First steps → Stories → Pricing → Journal → FAQ → Closing CTA. Assets, copy, controls, and animations are shared. The original homepage's rendered main markup was verified unchanged after extraction.

The theme is isolated behind `.inicio-2` selectors and `body:has(.inicio-2 .homepage)`. Its header, footer, and inquiry dialog use the alternate palette only while visiting this route.

| Element                                | Color/treatment                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Hero, language-section surface, footer | Navy `#151c3d`                                                                                      |
| Main text on light surfaces            | Navy `#102059`                                                                                      |
| Primary actions                        | Blue `#2678bb`                                                                                      |
| Hero accents                           | Blue `#548fc5`, pale periwinkle `#cdd7ef`                                                           |
| English lesson card                    | Muted blue-gray `#becbd8`                                                                           |
| Spanish lesson card                    | Warm stone `#d8d1c5`                                                                                |
| FAQ                                    | Uniform off-white `#f5f5f5`                                                                         |
| Final CTA                              | Pale blue `#aee0f8`, with dark text                                                                 |
| Other editorial sections               | Alternating off-white/periwinkle with pale-blue vertical panels inspired by the supplied references |

To remove the experiment, remove its header navigation entry and `app/inicio-2/`. The shared homepage component continues to serve the original homepage.
