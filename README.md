# Mallon Khan Creative Room

An interactive static creative-room refresh for `mallonkhan.com`.

## What is included

- `index.html`: 90s bedroom homepage with clickable TV, artwork frames, stereo, bookshelf, essays, and PC.
- `bio.html`, `proud-fools.html`, `dantes-history.html`, `emplant.html`, `black-dove.html`, `store.html`: detail pages for the avatar and Khantent submenu.
- `styles.css`: full-screen responsive graphic-novel room design with a flowing display-font stack.
- `script.js`: modal, random video, empty artwork frame, stereo, PDF, essay, and PC-menu interactions.
- `assets/bedroom-hero.png`: generated bedroom illustration with creative-room objects.
- `_headers`: deployment headers for Netlify-style static hosting.
- `CNAME`, `robots.txt`, `sitemap.xml`: custom-domain and search-index helpers.
- `content/`: drop-in folders for artwork, MP3s, album covers, PDFs, videos, reels, and essay materials.

## Naming

- `Khannections`: Substack / historical dot-connecting essays.
- `Khanimations`: animation and video work.
- `Khantact`: contact route, currently `mallonkhan@gmail.com`.
- `Khantent`: deeper archive/store/content pathways.

## Content Notes

Current book-cover and essay-related images are not used as wall art. Wall frames now use selected artwork copied from `content/artwork/portfolio-images`.

Assets already wired:

- Essay stack: Witches of Oz and The Oil is The Drug point to Khannections on Substack.
- Artwork: Cornered, Baphomesh, Ape Rock, Pizza, Dave, and 2016 Election.
- Detail page art: Emplant covers, Black Dove cover, Proud Fools/Ape Rock art, and economics/store visuals.
- TV channels: Khanimations YouTube video plus local Ape Rock, Dante Canto 15 promo, Dante Canto 26, and Zombie 3D video files.
- Stereo: Techno Reel audio plus Dante sample audio.
- Bookshelf: Amazon book links plus a gated Emplant PDF with an optional $5 donation prompt.

## Deployment Notes

If this is hosted on Netlify, deploy the folder as-is and the `_headers` file will add the security headers.

If this is hosted on GitHub Pages, copy the HTML/CSS/JS files into the Pages branch and configure equivalent security headers through Cloudflare, Netlify, or your hosting layer. GitHub Pages does not apply `_headers`.

To add fresh work, place files in `content/` first, then ask Codex to sync that content into the room interactions.
