# wafer's design

Personal production design system — **future kid · soft luxury · playful order**

เด็กจากโลกอนาคต × เทสต์แพง × สดใสแบบตุ่น ๆ

## Quick start

```bash
cd wafer-design
npm install
npm run dev
```

เปิด living style guide ที่ root ของ Vite app

## Contents

| Path | What |
|---|---|
| `docs/MANIFESTO.md` | Style thesis & DNA |
| `docs/RULES.md` | Production rule sheet |
| `src/styles/tokens.css` | Color, type, space, radius, motion |
| `src/styles/wafer.css` | Single import for the whole system |
| `src/styles/decorations.css` | Geometric + line signature components |
| `src/styles/components.css` | Buttons, fields, nav, chips, features |
| `templates/` | Landing, portfolio, social, app shell |

## Signature rules (short)

1. Palette = muted-bright yellow / red / green / blue
2. Type = soft rounded modern (Nunito)
3. Radius = medium
4. Decor = multiple geos + strokes, ordered, not sparse, not cluttered
5. Motion = quiet float only
6. Feel = expensive + childlike-future together — never corporate, never fairytale, never AI-generic

## Use in a page

```html
<link rel="stylesheet" href="/src/styles/wafer.css" />

<div class="w-ribbon"><span></span><span></span><span></span><span></span></div>
<h1 class="w-display">wafer</h1>
<button class="w-btn w-btn--yellow">say hi</button>
```
