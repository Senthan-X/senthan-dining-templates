# Root & Table — Quiet Minimal Restaurant Template

The third piece in this set, and the quietest. Where Senthan's Fine
Dining is warm/classic and Ember Kitchen is loud/editorial, Root &
Table is deliberately restrained — generous whitespace, a thin serif,
and no card borders or shadows anywhere.

## What makes this one different

- **One signature palette** ("Stoneware") + dark/light toggle, **light
  by default** (the other two default to dark)
- **Different type system**: Newsreader (display, quiet editorial
  serif) + Work Sans (body) — no fonts shared with the other two
- **Flat design**: no boxed cards, no drop shadows — hairline dividers
  and spacing do all the work
- **Cookbook-style menu**: a single flowing column with two large
  full-bleed photo breaks, rather than a photo per dish
- **Horizontal scroll-snap filmstrip** gallery instead of a grid
- Still fully **7-language** (English, Spanish, French, Swahili,
  Chinese, Arabic, Classical Latin) and mobile-responsive

## File structure

```
root-and-table/
├── index.html                → Main page (edit this for real deployment)
├── style.css                 → All styling, incl. the Stoneware palette tokens
├── script.js                 → i18n dictionary + all interactivity
├── preview.html              → Self-contained single file (CSS/JS inlined)
│                                — open this directly, no server needed
├── README.md                 → This file
└── assets/
    └── images/                → 24 food photographs (11 used on the page,
                                  13 left spare for you to swap in — see
                                  "Photos" below)
```

## Customizing

- **Brand name**: search/replace "Root & Table" across `index.html`.
- **Palette**: edit the two `html[data-theme="dark"|"light"]` blocks at
  the top of `style.css`.
- **Menu content**: each `.menu-line` is plain text — no `<img>` tag —
  by design. The two `.menu-break` blocks are the only in-menu photos;
  swap their `src` or add more `.menu-break` blocks between groups if
  you'd like a photo-heavier layout.
- **Languages**: all UI copy lives in the `I18N` object at the top of
  `script.js`. Dish names/descriptions and testimonial quotes are left
  in English, matching common fine-dining convention.

## Photos

The 11 photos actually used on the page are now embedded directly
inside `index.html` as base64 data — the page needs zero external
image files to display correctly. This was a deliberate fix: a nested
`assets/images/` folder is exactly the kind of thing that gets dropped
or flattened during mobile zip extraction or a rushed drag-and-drop
deploy, and that's what caused broken images in an earlier version of
this package.

The images are compressed as WebP and capped at 640px wide specifically
to keep `index.html` small (~700KB total) — large single files are more
likely to arrive truncated over a slow or unstable mobile connection,
which showed up as the whole page failing to open at all in some
viewers.

All 24 original JPGs (the 11 in use plus 13 spares) are still included
in `assets/images/` for future edits — re-encode a replacement to
base64 and swap the matching `data:image/jpeg;base64,...` string in
`index.html`. The site itself doesn't read from that folder anymore.

That screening isn't the same as confirmed ownership — confirm you
hold commercial usage rights to each photo before listing this on
Codester.

## Reservation form

Validates and shows a success message client-side but doesn't send
anywhere by default — wire `<form data-reservation-form>` up to your
own backend or a service like Formspree before going live.
