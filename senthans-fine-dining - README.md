# Senthan's Fine Dining — Modern Restaurant Template

A modern, multipurpose restaurant/café/bistro template with three built-in color
themes, a light/dark mode for each, and full navigation in seven languages —
built around real kitchen photography instead of stock plates.

---

## What's included

```
senthans-dinner/
├── index.html              → the live site (edit this)
├── style.css                → all styling, including the 3 color themes
├── script.js                 → theme engine, language engine, all interactivity
├── preview.html              → single-file version for quick preview (CSS/JS inlined)
├── README.md                  → this file
├── codester-listing.txt        → ready-to-paste Codester listing copy
└── assets/
    └── images/                  → 24 food photographs (see "Photos" section below)
```

## Quick start

1. Unzip everything into one folder, keeping `assets/images/` alongside `index.html`.
2. Open `index.html` in a browser — no build step, no dependencies to install.
3. To preview instantly without a folder structure, open `preview.html` instead.

## The 6 looks (3 palettes × light/dark)

Click the three small dots in the header to switch palette, and the sun/moon
icon to switch light/dark. Both choices are remembered on return visits
(via `localStorage`, with a safe fallback if storage is unavailable).

| Palette | Feel |
|---|---|
| **Espresso & Gold** | Warm, dark-roast browns with a muted antique gold accent |
| **Wine & Cream** | Deep burgundy with a soft cream base |
| **Slate & Sage** | Cool charcoal-green with a quiet sage accent |

To change the accent colors, edit the six `html[data-palette="..."][data-theme="..."]`
blocks near the top of `style.css` — every other style in the file references
these variables, so a hex-code change there updates the whole site.

## Languages

English, Spanish, French, Swahili, Chinese (Simplified), Arabic, and Classical
Latin — switch from the dropdown in the header. Arabic automatically flips the
whole layout to right-to-left.

All navigation, headings, buttons, and form labels are fully translated. Dish
names, dish descriptions, and testimonial quotes are intentionally left in
English, following the common fine-dining convention of keeping specialty
dish names in their original language on translated menus. If you want those
translated too, edit the `<article class="dish-card">` blocks in `index.html`
directly, or have a professional translator adapt the menu copy — machine
translation tends to mangle food terms.

To add or edit UI text, open `script.js` and find the `I18N` object near the
top — each language is a plain object with the same keys, so you can copy
the English block as a starting point for a new language.

## Customizing the content

- **Restaurant name / logo**: search for `Senthan's Fine Dining` in
  `index.html` and replace it — it appears in the header, footer, and page title.
- **Menu items and prices**: each dish is a `.dish-card` block inside one of
  the four `data-menu-panel` sections in `index.html`. Prices are placeholder
  `$` values — swap in your own currency and amounts.
- **Address / phone / email**: in the Reservation section (`.reservation-info`)
  and in the footer.
- **Reservation form**: submits nowhere by default (no backend) — it validates
  the fields and shows a success message. Connect it to your own booking
  system, or a service like Formspree / Netlify Forms / your own backend, by
  replacing the `submit` handler in `script.js` (`initReservationForm`).
- **Newsletter form**: same — currently a front-end-only placeholder.

## Photos

All 24 photos are now embedded directly inside `index.html` as base64 data —
the page needs zero external image files to display correctly. This was a
deliberate fix: a nested `assets/images/` folder is exactly the kind of
thing that gets dropped or flattened during mobile zip extraction or a
rushed drag-and-drop deploy, and that's what caused broken images in an
earlier version of this package.

The images are compressed as WebP (rather than JPEG) and capped at 640px
wide specifically to keep `index.html` small (~1.8MB total) — large single
files are more likely to arrive truncated over a slow or unstable mobile
connection, which showed up as the whole page failing to open at all in
some viewers. If you'd like higher-resolution images for a larger display,
swap the compression settings and re-embed at your own quality/size targets.

The original JPGs are still included in `assets/images/` purely as spares —
useful if you want to swap a photo later (re-encode the replacement to
base64 and swap the matching `data:image/jpeg;base64,...` string in
`index.html`), but the site itself doesn't read from that folder at all
anymore.

That screening (no visible third-party watermarks or clear stock/food-blog
styling) still isn't the same as confirmed ownership — confirm you hold
commercial usage rights to each photo before listing this on Codester.

## Deploying

Works on any static host — no server or database required:

- **Netlify**: drag the whole folder onto the Netlify dashboard, or connect a
  Git repo.
- **GitHub Pages**: push the folder to a repo and enable Pages in settings.
- **Any shared host**: upload the folder via FTP — it's plain HTML/CSS/JS.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom
properties, `color-mix()`, and `aspect-ratio` — all well-supported in browsers
from the last few years. Respects `prefers-reduced-motion` and keeps visible
keyboard focus states throughout.

## Changelog

**v1.0** — Initial release. Three color themes with light/dark modes, seven
languages, real photography, tabbed menu, gallery with lightbox, testimonials,
reservation form, responsive down to mobile.

## License

Standard Codester license terms apply — see your purchase receipt. Contact
Senthan & Co (hello@senthan-co.example) with any questions about usage rights.

---

Template crafted by **Senthan & Co** — hello@senthan-co.example · +256 700 000 000
