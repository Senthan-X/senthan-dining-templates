# The Long Table — Warm Communal Restaurant Template

The fourth piece in this set. Where the other three organize their menus
by course (mains, stews, sides), The Long Table organizes by **how many
hands you'll need** — Just for You, For the Table, The Full Spread. A
genuinely different structural idea, not just a different color scheme.

## What makes this one different

- **One signature palette** ("Harvest Clay" — warm clay + forest green)
  + dark/light toggle, dark by default
- **Different type system**: Lora (display) + Mulish (body) — no fonts
  shared with the other three builds
- **Menu grouped by sharing size**, not course type — the same idea any
  buyer could reuse for a different sorting logic entirely
- **Rotated stamp badge** in the hero, evoking a wax-seal/family-crest feel
- **Torn-edge "recipe card"** aside in the About section
- **Ticket-stub menu cards** with a dashed perforation between photo and
  text, and a "Serves X" pill tag
- **Tilted photo-wall gallery** with washi-tape accents — pinned corkboard
  feel, distinct from the masonry grid, showcase grid, and scroll-snap
  filmstrip used in the other three
- Still fully **7-language** (English, Spanish, French, Swahili, Chinese,
  Arabic, Classical Latin) and mobile-responsive

## File structure

```
long-table/
├── index.html                → Main page (edit this for real deployment)
├── style.css                 → All styling, incl. the Harvest Clay tokens
├── script.js                 → i18n dictionary + all interactivity
├── preview.html              → Self-contained single file (CSS/JS/images
│                                all inlined) — open directly, no server needed
├── README.md                 → This file
└── assets/
    └── images/                → 24 food photographs (all embedded in
                                  index.html as base64 JPEG — see "Photos")
```

## Customizing

- **Brand name**: search/replace "The Long Table" across `index.html`.
- **Palette**: edit the two `html[data-theme="dark"|"light"]` blocks at
  the top of `style.css`.
- **Menu groups**: relabel or reorganize `menu.group_solo` /
  `group_table` / `group_spread` in `script.js`, and the matching
  `data-menu-tab` / `data-menu-panel` values in `index.html`, to sort
  dishes by any logic you prefer (spice level, dietary type, etc.).
- **Languages**: all UI copy lives in the `I18N` object at the top of
  `script.js`. Dish names/descriptions and testimonial quotes are left
  in English, matching common fine-dining convention.

## Photos

All 24 photos are embedded directly inside `index.html` as base64 JPEG
data — no external image files are needed for the page to display
correctly, and there's no `assets/images/` folder dependency that could
get lost during extraction or deployment. The original JPGs are still
included in `assets/images/` purely as spares for future edits.

This does mean `index.html` is a larger file (~4MB) than a typical HTML
page — normal for a modern webpage, but worth knowing if you're
transferring it over a slow connection. If reliability over a poor
connection matters more than image quality, re-compress to WebP at a
smaller size (the process used for the other three templates in this
set) and re-embed.

That screening (no visible third-party watermarks or clear stock/food-
blog styling) still isn't the same as confirmed ownership — confirm you
hold commercial usage rights to each photo before listing this on
Codester.

## Reservation form

Validates and shows a success message client-side but doesn't send
anywhere by default — wire `<form data-reservation-form>` up to your own
backend or a service like Formspree before going live.
