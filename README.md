# Mahesh Solanki — Portfolio Website

> Live: **[twomathematicians-code.github.io/mahesh-portfolio](https://twomathematicians-code.github.io/mahesh-portfolio)**

Personal portfolio for the **Unified Intelligence Engineer** role. Single-page,
monochrome (SpaceX-style) design with an interactive cursor-reactive branching
network in the hero section.

## ✨ Features

- **Interactive branching network** — a live `<canvas>` particle system in the hero.
  Nodes drift, connect with lines when near each other, and the cursor acts as a
  gravity well that pulls nearby nodes toward it. The network visibly "grows"
  toward your cursor as you move it across the hero.
- **Pure monochrome** — black on white, zinc gray scale, sharp 3px corners
- **Fractal M logo** — Sierpinski-triangle mark in nav, footer, and favicon
- **9 sections** — Hero, Role Overview, Competencies, Domains, Featured Projects
  + full repo catalog, Tech Pipeline, Responsibilities/Requirements, Contact
- **Zero build step** — static HTML + CDN (Tailwind, Iconify, Google Fonts)

## 📁 Structure

```
mahesh-portfolio/
├── index.html              ← The complete website (single file)
├── README.md
└── assets/
    ├── favicon.svg         ← Fractal M mark (browser tab icon)
    ├── logo-primary.svg    ← Black fractal M
    ├── logo-reversed.svg   ← White M on black
    ├── logo-network.svg    ← Branching intelligence network
    └── logo-wordmark.svg   ← Logo + "Mahesh Solanki"
```

## 🎮 The Network Effect

The hero section has a `<canvas>` (`#network-canvas`) running a particle system:

- **~28–90 nodes** (scales with screen size) drift around with gentle velocity
- **Links** form between nodes within 150px — closer = darker line
- **Cursor interaction** — within a 220px radius, nodes drift toward your cursor
  and draw stronger lines to it, giving a "generative growing" feel
- **Respects `prefers-reduced-motion`** — draws a static frame for accessibility
- **Touch supported** — works on mobile via touchmove

Tweak the constants at the top of the `<script>` block in `index.html`:
- `CONNECT_DIST` — max px distance for node-to-node links
- `MOUSE_RADIUS` — cursor influence radius
- `MOUSE_FORCE` — attraction strength

## 🚀 Local Development

No build step. Just open it:

```bash
# Option 1: open directly
open index.html

# Option 2: local server (recommended)
python -m http.server 8000
# visit http://localhost:8000
```

## 🌐 Deployment

This repo deploys to GitHub Pages. The live site is built from the **`gh-pages`
branch**, which mirrors the `main` branch root (`index.html` + `assets/`).

After pushing to `main`, update the live site:

```bash
git checkout gh-pages
git merge main
git push origin gh-pages
```

No build tools, no `npm install`, no React — just static files.

## 🔗 Related

- [`linkedin-asset-kit`](https://github.com/twomathematicians-code) — source of the logo SVGs
- [GitHub Profile README](https://github.com/twomathematicians-code) — auto-generated monochrome SVG cards
