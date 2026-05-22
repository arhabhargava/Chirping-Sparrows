# Chirping Sparrows — Website

A modern rebuild of [chirpingsparrows.org](https://www.chirpingsparrows.org/) using Next.js 14 (App Router) + Tailwind CSS. Same content and same set of pages as the original, with a fresh playful look — Fredoka + Nunito typography, sun/blush/sky/leaf palette, rounded shapes, gentle animations.

## Project structure

```
chirping-sparrows/
├── public/
│   └── images/            ← runs the `fetch-images` script to populate
├── scripts/
│   └── fetch-images.mjs   ← downloads all photos from the original site
├── src/
│   ├── app/               ← all pages (one folder per route)
│   ├── components/        ← Navbar, Footer, Hero, Programs, Gallery, etc.
│   └── lib/site.ts        ← single source of truth: phones, address, menus
├── next.config.mjs        ← static export config (output: 'export')
├── tailwind.config.ts     ← color palette + fonts
└── out/                   ← built site (this is what you deploy)
```

## Quick start

```bash
# 1. Install
npm install

# 2. Download all photos from the original site (one-time)
npm run fetch-images

# 3. Develop locally
npm run dev          # http://localhost:3000

# 4. Build the static site
npm run build        # produces out/
```

## Image strategy

Images are referenced by path (e.g. `/images/about/1.jpg`). They load from `https://www.chirpingsparrows.org` by default — meaning the site works **immediately** even without downloading.

After running `npm run fetch-images`, the photos live in `public/images/`. To serve them locally, create `.env.local`:

```
NEXT_PUBLIC_IMG_BASE=
```

(Empty string — the `img()` helper in `src/lib/site.ts` will then prepend nothing and the browser fetches `/images/...` from your own server.)

## Deploy

The `out/` folder is a fully static site — drop it into any host:

| Host | Steps |
| --- | --- |
| **Netlify** | Drag `out/` into the Netlify drop-zone, or `netlify deploy --dir=out --prod` |
| **Vercel** | `vercel --prod` (Vercel auto-detects Next.js — no `out/` upload needed) |
| **GitHub Pages** | Push `out/` contents to the `gh-pages` branch |
| **Shared hosting** (cPanel / Hostinger / etc.) | Upload contents of `out/` to your `public_html/` via FTP |
| **Cloudflare Pages** | Connect repo, set build = `npm run build`, output = `out/` |

That's it — no Node server needed at runtime.

## Pages mapped from the original

- `/` — Home (hero, welcome, programs, team, stats, features, activities, gallery, testimonials, events, CTA)
- `/about-us`, `/about-our-school`, `/about-our-kids-gym`
- `/aim`
- `/admission`
- `/franchise-opportunity`, `/why-chirping-sparrows`, `/our-requirement`, `/chirping-sparrows-support`, `/how-to-start-a-chirping-sparrows-branch`, `/master-franchise`, `/franchise-application-form`
- `/news`
- `/branches`
- `/contact-us`
- `/pragya-bansal`, `/neha-bhargava`

## Editing content

Most copy lives in the section components in `src/components/`. The site-wide stuff (phone numbers, address, hours, menu) lives in `src/lib/site.ts` — change it there once and it updates everywhere.

## Tech

- Next.js 14 (App Router, static export)
- React 18
- Tailwind CSS 3.4
- Fredoka + Nunito (Google Fonts via `<link>` in `layout.tsx`)
- TypeScript

## License

Content © Chirping Sparrows. Code is for the school's exclusive use.
