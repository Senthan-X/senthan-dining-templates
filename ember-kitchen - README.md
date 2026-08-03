# Ember Kitchen — Bold Editorial Restaurant Template

A bold, magazine-style restaurant/bistro template. Part of the same
family as Senthan's Fine Dining, but with a completely different visual
system — built to sit apart in a portfolio, not read as a reskin.

## What makes this one different

- **One signature palette** ("Ember") instead of a 3-way switcher, plus
  a full dark/light toggle
- **Different type system**: Bricolage Grotesque (display) + Instrument
  Sans (body) — no fonts shared with Fine Dining
- **Scrolling dish-name ticker** under the hero
- **Editorial menu list**: dotted-leader rows instead of photo cards —
  hover or focus any dish to swap the sticky photo beside it
- **Asymmetric showcase gallery** instead of a uniform grid
- Still fully **7-language** (English, Spanish, French, Swahili,
  Chinese, Arabic, Classical Latin) and mobile-responsive

## File structure

```
ember-kitchen/
├── index.html                → Main page (edit this for real deployment)
├── style.css                 → All styling, incl. the Ember palette tokens
├── script.js                 → i18n dictionary + all interactivity
├── preview.html              → Self-contained single file (CSS/JS inlined)
│                                — open this directly to click through
│                                everything with no server needed
├── README.md                 → This file
└── assets/
    └── images/                → 24 food photographs (see "Photos" section)
```

## Customizing

- **Brand name**: search/replace "Ember Kitchen" and "EMBER KITCHEN"
  across `index.html`.
- **Palette**: edit the two `html[data-theme="dark"|"light"]` blocks at
  the top of `style.css`. Everything else references these variables,
  so a full re-theme is a few line edits.
- **Menu content**: each `.menu-row` in `index.html` has a
  `data-menu-row="assets/images/…"` attribute — that's the photo shown
  in the sticky panel when a visitor hovers/focuses that row.
- **Languages**: all UI copy lives in the `I18N` object at the top of
  `script.js`, organized by section then key. Dish names/descriptions
  and testimonial quotes are intentionally left in English, matching
  common fine-dining convention of keeping specialty dish names
  untranslated — replace with your own copy if you want full
  dish-level localization.

## Photos

All 24 photos are now embedded directly inside `index.html` as base64
data — the page needs zero external image files to display correctly.
This was a deliberate fix: a nested `assets/images/` folder is exactly
the kind of thing that gets dropped or flattened during mobile zip
extraction or a rushed drag-and-drop deploy, and that's what caused
broken images in an earlier version of this package.

The images are compressed as WebP and capped at 640px wide specifically
to keep `index.html` small (~1.9MB total) — large single files are more
likely to arrive truncated over a slow or unstable mobile connection,
which showed up as the whole page failing to open at all in some
viewers.

The original JPGs are still included in `assets/images/` purely as
spares for future edits (re-encode a replacement to base64 and swap the
matching `data:image/jpeg;base64,...` string, including inside the
`data-menu-row="..."` attributes used by the hover-swap menu) — the
site itself doesn't read from that folder anymore.

That screening isn't the same as confirmed ownership — confirm you
hold commercial usage rights to each photo before listing this on
Codester.

## Reservation form

The form validates and shows a success message client-side but doesn't
send anywhere by default — wire the `<form data-reservation-form>` up
to your own backend, or a service like Formspree, before going live.
