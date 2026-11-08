# STUDIO X — AGENT DEVELOPMENT STANDARDS

## Brand Identity

**Name:** Studio X  
**Tagline:** Design Beyond Limits.  
**Founder:** Hamenath B  
**Domain:** https://studioxdesign.space  
**Location:** Tamil Nadu, India

## Color Palette (strict — never change)

```
--color-white:    #FFFFFF
--color-black:    #0A0A0A
--color-soft-black: #1A1A1A
--color-dark-gray:  #4A4A4A
--color-mid-gray:   #9A9A9A
--color-light-gray: #E5E5E5
--color-off-white:  #F5F5F5
```

## Typography

- Display / Headings: **Space Grotesk** (Bold 700, ExtraBold 800, Medium 500)
- Body / UI: **Inter** (Regular 400, Light 300, Medium 500)

## Logo Rules

- Use supplied SVG logo files from `/public/brand/`
- Light backgrounds → `horizontal-black-on-white.svg`
- Dark backgrounds → `horizontal-white-on-black.svg`
- Icon only → `icon-black-on-white.svg` or `icon-white-on-black.svg`
- **Never** recreate, approximate, or distort the logo
- **Never** invent a replacement logo

## Design Principles

- **Page kind:** service (creative agency)
- **Deal results:** nav-mega, footer-columns, close-type, surface-pairs rhythm, solid buttons
- Monochrome palette — black, white, grays only
- Generous whitespace — sections are exactly one viewport screen (or two for dense content)
- Large editorial typography — headlines at 72–144px desktop
- Strong hierarchy: h1 → h2 → body, never skip levels
- Left-aligned text, text-first on splits, never centred for wide blocks
- No gradients, glassmorphism, or decorative backgrounds
- No invented testimonials, client logos, or proof figures
- No fake portfolio work — clearly marked as concept/sample
- One filled primary button marks the main CTA per screen
- Hover: linked cards lift 2px, photographs zoom 1.02 inside frame
- Buttons: verb + object (e.g., "Start your project", "See our work")

## GSAP Animation Standards

- Use `gsap.context()` with cleanup in `useEffect`
- Respect `prefers-reduced-motion` — wrap all animations in check
- ScrollTrigger for section reveals (opacity 0→1, y 40→0, stagger 0.1)
- Hero entrance: once on load, never on scroll
- No parallax on text, no scroll-jacking
- Max duration: 0.8s for reveals, 0.3s for hovers

## Architecture

```
src/
  app/           — Next.js App Router pages
  components/
    layout/      — Nav, Footer, shared layout
    ui/          — Buttons, Cards, Forms, Typography
    sections/    — Reusable page sections
  animations/    — GSAP hooks and utilities
  data/          — services.ts, pricing.ts, projects.ts, navigation.ts
  lib/           — utils.ts, metadata.ts
  styles/        — globals.css
public/
  brand/         — Logo SVGs and PNGs
  images/        — General images
  portfolio/     — Portfolio work images
```

## Content Rules

- Prices: indicative ranges only, subject to scope and quotation
- Portfolio: concept/sample work until real projects are supplied
- Testimonials: placeholder structure only — no invented quotes
- Contact: form posts to `hello@studioxdesign.space.example` until real email is configured
- WhatsApp: add only after real business number is supplied

## Page SEO

- Canonical: https://studioxdesign.space (pending DNS verification)
- OG images: 1200×630
- Sitemap: auto-generated
- Robots: allow all

## Development Workflow

- Fix only the section/page asked to fix
- Never redesign approved sections
- Run `npm run type-check` and `npm run lint` after every change
- Run `npm run build` before marking complete
