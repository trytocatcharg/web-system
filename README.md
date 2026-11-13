# Web System

Corporate website for **Web System** — a software development and web design studio selling fast, SEO-optimized websites and custom software. Built with Next.js, TypeScript, Tailwind CSS and deployed on Netlify.

Live at [web-system.cloud](https://web-system.cloud).

## Tech Stack

- **Next.js 16** (App Router, static generation)
- **TypeScript 6** — strict mode
- **Tailwind CSS 4** — custom design tokens in `app/globals.css`
- **pnpm** — all dependency versions pinned (no `^` or `~`)

## Features

- Fully responsive layout with mobile navigation
- SEO-ready: metadata, OpenGraph, JSON-LD (`Organization` + `WebSite`), `sitemap.xml`, `robots.txt`, semantic HTML
- Subtle motion: scroll-reveal animations, hover lifts, animated CTA arrows, pulsing WhatsApp button — all respecting `prefers-reduced-motion`
- Contact section with a form that composes a pre-filled **WhatsApp** message (`wa.me`)
- Floating WhatsApp button (bottom-right)
- Cookie consent banner via [CookieYes](https://www.cookieyes.com/) (script in `app/layout.tsx`)
- Legal pages: `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`
- Custom branding: logo-derived color palette (green `#10B981` / blue `#0EA5E9` on dark navy), generated SVG illustrations, favicon from `app/icon.png`

## Getting Started

Requires Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, SEO metadata, header/footer, CookieYes
  page.tsx            # Landing page (hero, services, process, SEO, testimonials, pricing, contact)
  globals.css         # Tailwind v4 theme: palette, reveal animations, reduced-motion rules
  sitemap.ts / robots.ts
  aviso-legal/        # Legal notice
  politica-privacidad/
  politica-cookies/
  icon.png            # Favicon (auto-detected by Next.js)
components/
  Header.tsx / Footer.tsx
  Hero.tsx / Services.tsx / Process.tsx / SeoSection.tsx
  Testimonials.tsx / Pricing.tsx / ContactSection.tsx
  Reveal.tsx          # Scroll-reveal wrapper (IntersectionObserver)
  WhatsAppButton.tsx  # Floating WhatsApp button
  Logo.tsx / LogoHomeLink.tsx
lib/
  site.ts             # Central site config (domain, phone, WhatsApp number)
public/
  images/             # Logo, SVG illustrations
```

## Configuration

Edit `lib/site.ts` before going live:

- `url` — production domain (used by sitemap and OpenGraph)
- `whatsappNumber` — WhatsApp number in international format, no `+` (currently a placeholder)
- `phoneDisplay` — human-readable phone shown on the site

Fill in the company details in the legal pages (`app/aviso-legal`, `app/politica-privacidad`, `app/politica-cookies`) — they contain `[placeholder]` fields.

## Deployment

Deployed on Netlify with zero configuration (auto-detected Next.js). Push to the connected Git branch to deploy:

```bash
git push
```

- Build command: `next build` · Publish directory: `.next`
- The domain DNS points to Netlify (`A` record → `75.2.60.5`)

## Design System

Palette sampled from the logo: emerald green `#10B981` (primary), sky blue `#0EA5E9` (secondary gradient), dark navy `#070B16` / `#0F172A` (backgrounds). Typography: Space Grotesk (display) + Inter (body).
