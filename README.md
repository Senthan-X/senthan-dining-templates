# Restaurant Template Collection — Senthan & Co

Four distinct restaurant/dining HTML templates, built from the same set
of real, vetted food photography — each with its own layout, typography,
color palette, and personality. All four are fully responsive, support
dark/light mode, and are translated into 7 languages (English, Spanish,
French, Swahili, Chinese, Arabic, and Classical Latin).

**[→ Browse the live collection](./index.html)** (once GitHub Pages is
enabled — see below — this becomes a real URL)

Every project is a flat set of files at the repo root, named with a
`project-name - filename` pattern instead of a subfolder — e.g.
`senthans-fine-dining - index.html` rather than
`senthans-fine-dining/index.html`.

| Template | Mood | Signature idea | Files |
|---|---|---|---|
| Senthan's Fine Dining | Warm, classic | 3-way color switcher (Espresso & Gold / Wine & Cream / Slate & Sage) | `senthans-fine-dining - *` |
| Ember Kitchen | Bold, editorial | Scrolling dish ticker + hover-swap menu list | `ember-kitchen - *` |
| Root & Table | Quiet, minimal | Flat design, cookbook-style menu column, scroll-snap gallery | `root-and-table - *` |
| The Long Table | Warm, communal | Menu organized by sharing size, not course | `long-table - *` |

Each set of four files (`... - index.html`, `... - style.css`,
`... - script.js`, `... - README.md`) is a complete, independent
template — the `README.md` for each covers customization instructions
specific to that build.

## Enabling live demos with GitHub Pages

Once this repo is pushed to GitHub:

1. Go to the repo's **Settings → Pages**
2. Under "Build and deployment," set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` and folder to `/ (root)`
4. Save — GitHub will publish the site at
   `https://<your-username>.github.io/<repo-name>/`

Because every file sits flat at the root, each template is reachable at
that same base URL plus its filename (spaces in a URL display as `%20`,
but you can click straight through — no need to type it by hand):

- `https://<your-username>.github.io/<repo-name>/` — this landing page
- `.../senthans-fine-dining%20-%20index.html`
- `.../ember-kitchen%20-%20index.html`
- `.../root-and-table%20-%20index.html`
- `.../long-table%20-%20index.html`

It can take a minute or two after saving for the first deploy to go live.

## Pushing this to GitHub

**From a desktop with git installed:**

```bash
cd senthan-dining-templates-flat
git init
git add .
git commit -m "Initial commit: 4 restaurant templates"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

**From your phone (recommended: Termux + git)** — this preserves file
names exactly, with no risk of a folder upload getting flattened or
misread, since there are no folders to lose in the first place:

```bash
pkg install git
termux-setup-storage
cd ~/storage/downloads/senthan-dining-templates-flat
git init
git add .
git commit -m "Initial commit: 4 restaurant templates"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
(GitHub will ask for a Personal Access Token instead of your password —
generate one under Settings → Developer settings → Personal access
tokens, with the `repo` scope checked.)

**From your phone via the browser**, since everything here is a loose
file (no folders to preserve): create the empty repo, tap "uploading an
existing file," and select all 18 files at once — this should work
reliably through a plain multi-file picker, since there's no folder
structure for it to lose.

## A note on file sizes

Every template embeds its food photography directly inside its
`index.html` as base64 data — there's no separate images folder this
repo depends on for the site to display correctly. (The original source
photos are still available in the earlier Codester ZIPs if you want
them for editing later.)

Three of the four (Fine Dining, Ember Kitchen, Root & Table) use
WebP-compressed images to keep file size down (~0.7–1.9MB per page). The
Long Table uses plain JPEG at a slightly larger size (~4MB) — still
completely normal for a modern webpage, but worth knowing if bandwidth
is a concern.

## License / usage

Built for Senthan & Co. Photography was screened to exclude visible
third-party watermarks or clear stock/food-blog styling, but that
screening isn't the same as confirmed ownership — confirm commercial
usage rights before reusing any of these images elsewhere.

---

Crafted by [Senthan & Co](mailto:jonathanrivers0414@gmail.com)
