# DESIGN.md — Courtside Basketball Leather, Clean Editorial

## Color tokens
| Token | Dark Hex | Light Hex | Use |
|---|---|---|---|
| canvas | `#09090B` | `#FAF9F6` | Page background |
| surface | `#141416` | `#FFFFFF` | Panels, never nested |
| line | `#27272A` | `#E4E4E7` | 1px hairlines and borders |
| ink | `#F4F4F5` | `#18181B` | Primary text |
| muted | `#A1A1AA` | `#52525B` | Secondary text (≥ 4.5:1 on canvas) |
| accent | `#F26B1D` | `#C2410C` | Pebbled basketball orange: active states, key stat numerals, court keylines, primary CTA (5–10% of viewport max) |
| on-accent | `#09090B` | `#FFFFFF` | Text on accent buttons (≥ 5:1 contrast) |

No harsh shadows, neon glows, or glassmorphism blur cards. Court geometry fades smoothly via radial/linear masks so text readability stays pristine in both dark and light modes.

## Typography
- Display / headers / big numbers: **Barlow Condensed** 700/800, tight tracking, uppercase for display labels.
- Body: **Plus Jakarta Sans** 400/500/600, min 16px, line-height 1.6.
- Data / dates / tags: **JetBrains Mono**, `tabular-nums`.

## Layout
- Max width 1200px, generous vertical rhythm (80–112px between sections), 1px hairline dividers.
- Radius: 0–2px on cards/buttons; circular numbered badges in the Career Journey timeline.
- Hero visual (Courtside mode): high-definition pebbled-leather studio basketball (`basketball-dark.png` / `basketball-light.png`) blended seamlessly into the canvas, accompanied by smoothly faded court-line hairlines.
- Style Switcher presets: `Courtside` (default, supports dark/light toggle), `Editorial`, `Terminal`, and `Swiss`.

## Components
- **Impact strip:** 4 columns, hairline vertical dividers, mono uppercase micro-labels, Barlow numerals in basketball orange, count-up on scroll.
- **Product tabs:** `layoutId` underline indicator in accent.
- **Timeline:** sinuous SVG pathway, numbered milestone badges (`01`–`05`), monochrome logos, solid surface cards, mono dates.
- **Logos:** monochrome grayscale adapting via `mix-blend-mode` to dark/light backgrounds.

## Motion
Framer Motion, ease-out (`[0.22, 1, 0.36, 1]`), 300–1100ms, subtle scroll-linked rotation/parallax on the Hero basketball, no pulsing rings or bounce overshoot. Respect `prefers-reduced-motion`.

## Accessibility
WCAG AA contrast across dark and light modes, visible focus ring in basketball orange, semantic landmarks, 375px → 1440px responsive.
