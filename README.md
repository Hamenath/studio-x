<div align="center">

# STUDIO X
### Design Beyond Limits.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WebGL](https://img.shields.io/badge/WebGL-GLSL_Shaders-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)

<p align="center">
  Official digital presence and creative agency platform for <b>STUDIO X</b>.<br />
  High-performance editorial design, custom WebGL fragment shaders, liquid glassmorphism, and accessible creative engineering.
</p>

[**Live Demo**](https://studioxdesign.space) • [**Founder**](https://hamenath.online) • [**Explore Services**](https://studioxdesign.space/services) • [**View Work**](https://studioxdesign.space/portfolio)

</div>

---

## ✦ Brand Identity & Philosophy

> *"Exceptional design should be accessible to everyone."*

STUDIO X is an independent creative design agency based in Tamil Nadu, India, servicing ambitious businesses, founders, creators, and international enterprises. The brand identity is grounded in high-contrast editorial minimalism, architectural typography, and bespoke interactive engineering.

- **Founder:** Hamenath B ([hamenath.online](https://hamenath.online))
- **Headquarters:** Tamil Nadu, India
- **Primary Domain:** [studioxdesign.space](https://studioxdesign.space)
- **Design Philosophy:** Minimalist monochrome aesthetics, generous whitespace, mathematically balanced editorial grids, and physics-driven micro-interactions.

---

## ✦ Core Features & Architectural Highlights

### 1. Zero-Dependency WebGL Shader Engines
- **Wave Shader Engine (`src/components/ui/purp-wave-shader.tsx`)**:
  - Full-screen procedural fragment shader using fractional Brownian motion (FBM), domain warping, OKLab perceptual color interpolation, vignette grading, and organic film grain.
  - Zero external 3D libraries (Three.js/Babylon) — 100% pure native WebGL context lifecycle management with GPU memory safety and auto context release.
- **Silk Mesh Shader Engine (`src/components/ui/silk-mesh-shader-hero.tsx`)**:
  - Procedural liquid silk simulation with domain-warped normal maps, specular lighting highlights, pointer leaning physics, and reduced-motion fallbacks.

### 2. Liquid Glassmorphic Floating Navigation (`src/components/layout/Nav.tsx`)
- Floating transparent navigation bar sitting directly above the full-bleed WebGL shader canvas.
- Ultra-frosted multi-layer liquid glass styling (`backdrop-blur-xl`, `border-white/10`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]`).
- Dynamic scroll telemetry: seamlessly transitions from subtle ethereal glass over the hero to high-contrast opaque dark glass when traversing light editorial sections.
- Transparent vector SVG branding (`/brand/horizontal-white-on-black.svg`) engineered without background boxes.

### 3. Typography Architecture: Rajdhani 600
- Global brand typeface: **Rajdhani** (Google Fonts) configured at default **SemiBold 600** across headings, subheadings, interface controls, and body prose.
- Precision utility classes for editorial hierarchy:
  - `.rajdhani-light` (300)
  - `.rajdhani-regular` (400)
  - `.rajdhani-medium` (500)
  - `.rajdhani-semibold` (600) — Primary UI & Body weight
  - `.rajdhani-bold` (700) — Headline display weight
- Dual Next.js font optimization: High-performance local prefetch via `next/font/google` combined with fallback HTML `<link>` preconnects in `layout.tsx`.

### 4. Strict Monochrome Palette
```css
--color-sx-black:      #0A0A0A; /* Rich obsidian background */
--color-sx-soft:       #1A1A1A; /* Surface contrast */
--color-sx-dark:       #4A4A4A; /* Muted secondary text */
--color-sx-mid:        #9A9A9A; /* Captions & metadata */
--color-sx-light:      #E5E5E5; /* Structural borders */
--color-sx-off:        #F5F5F5; /* Card surfaces */
--color-sx-white:      #FFFFFF; /* Pure white text & CTAs */
```

---

## ✦ Application Routes & Architecture

```
src/
├── app/
│   ├── layout.tsx                # Root layout, Google Fonts, global metadata & providers
│   ├── page.tsx                  # Homepage composite orchestrator
│   ├── globals.css               # Tailwind v4 theme tokens & Rajdhani typographic scale
│   ├── not-found.tsx             # Bespoke 404 error experience
│   ├── about/page.tsx            # Agency narrative, founder manifesto & methodology
│   ├── services/page.tsx         # Disciplines, design packages & deliverables
│   ├── portfolio/
│   │   ├── page.tsx              # Editorial project showcase
│   │   ├── PortfolioView.tsx     # Filterable interactive portfolio grid
│   │   └── [slug]/page.tsx       # Dynamic project deep-dives with static prerendering
│   ├── pricing/page.tsx          # Upfront pricing transparency & service tiers
│   ├── blog/
│   │   ├── page.tsx              # Thought leadership and design engineering writing
│   │   └── [slug]/page.tsx       # Individual articles
│   ├── contact/page.tsx          # Client inquiry & project intake interface
│   ├── privacy-policy/page.tsx   # Legal & data transparency
│   └── terms-and-conditions/     # Engagement & service terms
├── components/
│   ├── layout/
│   │   ├── Nav.tsx               # Liquid glassmorphism fixed navbar with mobile drawer
│   │   └── Footer.tsx            # Multi-column editorial footer with status badge
│   ├── sections/
│   │   ├── HeroSection.tsx       # WebGL Wave Shader hero with Rajdhani typography
│   │   ├── IntroSection.tsx      # Agency manifesto statement
│   │   ├── ServicesSection.tsx   # Grid of agency core competencies
│   │   ├── SelectedWorkSection.tsx # Featured project carousel & cards
│   │   ├── WhySection.tsx        # Value proposition and architectural rigor
│   │   ├── ProcessSection.tsx    # 4-stage agency execution lifecycle
│   │   ├── TestimonialsSection.tsx # Verified testimonials layout
│   │   └── CtaSection.tsx        # High-conversion closing action block
│   └── ui/
│       ├── Button.tsx            # Reusable polymorphic button primitive
│       ├── purp-wave-shader.tsx  # Standalone 21st.dev procedural Wave Shader
│       ├── silk-mesh-shader-hero.tsx # Standalone liquid silk WebGL hero
│       ├── StudioXIntroOverlay.tsx # Liquid glass session intro reveal overlay
│       ├── ProjectVisualPreview.tsx # Dynamic vector mockups for project cards
│       ├── ServiceCard.tsx       # Interactive capability card
│       └── demo.tsx              # Visual showcase component demos
└── data/
    ├── navigation.ts             # Header and footer routing topology
    ├── services.ts               # Core capabilities data
    ├── projects.ts               # Case studies & sample work specifications
    └── pricing.ts                # Package matrices and quote variables
```

---

## ✦ Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | **Next.js 16 (App Router)** | Static site generation (SSG) with Partial Prerendering (PPR) |
| **Runtime** | **React 19** | Concurrent rendering, Server Actions & React Server Components |
| **Language** | **TypeScript 5** | Strict type safety across all components and configuration |
| **Styling** | **Tailwind CSS v4** | Next-generation engine with `@theme` CSS custom properties |
| **Graphics** | **Custom GLSL Shaders** | Direct WebGL API integration without bloated bundle overhead |
| **Icons** | **Lucide React** | Featherweight tree-shakeable SVG iconography |
| **Typography**| **Rajdhani (Google Fonts)** | Clean geometric industrial sans-serif set to SemiBold 600 |
| **Tooling** | **Turbopack & ESLint 9** | Ultra-fast local compilation and zero-warning lint gates |

---

## ✦ Getting Started

### Prerequisites
- **Node.js**: `v20.x` or later (LTS recommended)
- **Package Manager**: `npm` (v10+), `pnpm`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hamenath/studio-x.git
   cd studio-x
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application with Hot Module Replacement (HMR).

---

## ✦ Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **Development** | `npm run dev` | Starts Turbopack development server on `localhost:3000` |
| **Build** | `npm run build` | Compiles an optimized production build with static generation |
| **Start** | `npm run start` | Boots the compiled production server |
| **Lint** | `npm run lint` | Runs ESLint 9 across all application code |
| **Type Check** | `npm run type-check` | Runs `tsc --noEmit` to validate strict TypeScript types |

---

## ✦ Performance & Quality Standards

- **0 Lint Warnings / 0 TypeScript Errors**: Enforced by automated build scripts.
- **Accessibility (a11y)**:
  - Skip-to-content keyboard anchor.
  - Full screen-reader ARIA landmark mapping (`aria-labelledby`, `role="dialog"`, `aria-current="page"`).
  - Respects `prefers-reduced-motion`: WebGL animations and CSS transforms gracefully fall back to static layouts.
- **Search Engine Optimization (SEO)**:
  - Dynamic canonical URL generation (`https://studioxdesign.space`).
  - OpenGraph image resolution (1200×630).
  - Automated `sitemap.xml` and `robots.txt` generation.

---

## ✦ Deployment

### Vercel (Recommended)
The project is built natively for zero-configuration deployment on [Vercel](https://vercel.com):
```bash
npx vercel --prod
```

### Self-Hosted Node.js / Docker
```bash
npm run build
npm run start
```

---

## ✦ License & Ownership

Designed and developed by **Hamenath B** for **STUDIO X**.  
All rights reserved © 2026 Studio X.  
Domain: [https://studioxdesign.space](https://studioxdesign.space)

