# wafer's design — Component Catalog

Import once: `src/styles/wafer.css`

---

## Brand

| Class | Purpose |
|---|---|
| `.w-brand` | Brand wordmark weight/tracking |
| `.w-brand-mark` | Dot + name row |
| `.w-brand-dot` | 4-tone signature dot |
| `.w-ribbon` | 4-tone signature strip |
| `.w-ribbon--lg` | Larger ribbon |

---

## Type

| Class | Purpose |
|---|---|
| `.w-display` | Hero / brand-level display |
| `.w-title` | Section title |
| `.w-title-sm` | Smaller title |
| `.w-body` | Supporting paragraph |
| `.w-body-sm` | Compact body |
| `.w-label` | Soft lowercase meta label |
| `.w-lede` | Narrow measure helper |
| `.w-stack` / `.w-stack-lg` | Vertical rhythm |

---

## Layout

| Class | Purpose |
|---|---|
| `.w-page` | Page clip/overflow root |
| `.w-shell` | Content width |
| `.w-shell-narrow` | Narrow content |
| `.w-section` | Vertical section padding |
| `.w-atmosphere` | Hero wash background |

---

## Decorations (signature)

| Class | Purpose |
|---|---|
| `.w-geo` | Base geometric accent |
| `.w-geo--circle` | Soft circle fill |
| `.w-geo--ring` | Circle outline |
| `.w-geo--capsule` | Pill bar |
| `.w-geo--squircle` | Rounded square (rotatable) |
| `.w-geo--soft-tri` | Soft triangle |
| `.w-geo--dot` | Small point accent |
| `.w-geo--fill-*` / `.w-geo--solid-*` | Y/R/G/B fills |
| `.w-stroke` | Line accent root |
| `.w-stroke--arc` / `--wave` / `--line` | Stroke shapes |
| `.w-stroke--yellow/red/green/blue` | Stroke color |
| `.w-orbit` | Grouped geo cluster |
| `.w-float` / `--delay` / `--slow` | Quiet float motion |

---

## UI

| Class | Purpose |
|---|---|
| `.w-btn` + `--primary/--yellow/--soft/--ghost` | Buttons |
| `.w-btn-row` | Button group |
| `.w-chip` + color mods | Rare tags |
| `.w-field` / `.w-input` / `.w-textarea` | Forms |
| `.w-nav` / `.w-nav__links` | Top navigation |
| `.w-surface` | Interactive surface only |
| `.w-feature` / `.w-feature-list` | Ordered feature blocks |
| `.w-swatch` / `.w-swatches` | Palette docs |
| `.w-slab` + `--red/--green/--blue/--ink/--lg` | Cream wafer card with hard color shadow |
| `.w-rail` | Section label + line + index |
| `.w-pill-link` | Bio / social pill link |
| `.w-badge` / `.w-status` | Edge pills + live status |
| `.w-meta-grid` / `.w-meta` | Bio fact grid |
| `.w-blob` | Soft floating organic accent |

---

## Template blocks

| Class | Purpose |
|---|---|
| `.w-hero` | Landing hero composition |
| `.w-portfolio-grid` / `.w-work-visual` | Portfolio layouts |
| `.w-social-canvas` | 1:1 social frame |
| `.w-app` / `.w-tabbar` / `.w-tab` | Soft app shell |
| `.w-stage` | Dark charcoal link-bio stage |
| `.w-link-grid` / `.w-profile-head` / `.w-avatar` | Link-bio building blocks |

---

## Usage note

- Default: no marketing cards
- Prefer `.w-slab` over soft blur cards for signature moments
- Surfaces/cards only when wrapping interaction
- Keep 3–5 decorative accents in the first viewport
- Prefer medium density: decorated, ordered, breathable
- See `docs/REFERENCE.md` for ilovewafer.com borrow/don't-copy guidance
