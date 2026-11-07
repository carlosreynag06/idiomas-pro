# Homepage color system

The footer’s established charcoal and citron define the palette. Deep green replaces electric-blue UI accents. White and muted sage provide a repeated section rhythm, with citron reserved for important conversion points. Photographic colors remain natural.

## Tokens

| Role                              | Color     |
| --------------------------------- | --------- |
| Charcoal anchors and primary text | `#20251e` |
| Citron highlights                 | `#e4ef9a` |
| White editorial surface           | `#ffffff` |
| Muted sage surface                | `#e3ebe0` |
| Deep-green actions                | `#35533e` |
| Action hover                      | `#263f2e` |
| Supporting text                   | `#5b6759` |

## Distribution

| Homepage section            | Surface and purpose                                                            |
| --------------------------- | ------------------------------------------------------------------------------ |
| Header                      | White, with deep-green navigation accents and CTA                              |
| Hero                        | Charcoal, with cream text and a citron primary CTA                             |
| English and Spanish lessons | White section; sage and pale-citron lesson cards                               |
| Learning method             | Sage section; white conversation panel with sage and citron messages           |
| Trust divider               | Charcoal with citron icons; retains its position and pricing-band height match |
| About Carlos                | White to foreground the photograph and personal story                          |
| First steps                 | Sage to separate the process from the personal story                           |
| Student stories             | White section with subtle green cards                                          |
| Pricing band                | Citron to highlight the lesson-plan action                                     |
| Journal                     | White to foreground the three distinct photographs                             |
| FAQ                         | Sage to distinguish the practical information                                  |
| Closing CTA                 | Citron with charcoal-and-citron Blender artwork                                |
| Footer                      | Original charcoal and citron styling, unchanged                                |

The palette is scoped to `.homepage`, the homepage header, and the inquiry dialog. Shared component aliases let the other routes retain their existing styling. No footer selector or footer component is changed by this palette.

The original cobalt Blender scene is retained. The homepage uses `assets/blender/conversation-charcoal.blend`, rendered with `scripts/create-conversation-art.py --charcoal` through Blender. Its optimized asset is `public/images/conversation-sculpture-charcoal.webp`.

## Verification

The production build, exported routes, internal links, and live homepage image requests pass. The footer’s rendered markup hash is unchanged. The primary button’s white text on deep green has an 8.54:1 contrast ratio; supporting text on sage has a 4.88:1 ratio. The full desktop sequence and inquiry dialog were visually reviewed in Chrome.
