# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with next/core-web-vitals
```

No test suite is configured.

## Deployed on 
https://portfolio-website-lake-sigma.vercel.app/#projects 

## Repo
https://github.com/jeslynw/PortfolioWebsite

## Architecture

Single-page portfolio site using Next.js 14 App Router. All code lives under `src/app/`.

**Page layout** (`src/app/page.js`): Navbar → HeroSection → CloudDecoration → AboutMe → Skills → Projects → Footer. Sections use anchor IDs for scroll-based navigation.

**Component patterns:**
- All interactive components use `"use client"` directive
- Animations via Framer Motion (staggered children pattern in HeroSection, Reveal utility wrapper)
- Smooth scroll navigation uses `react-scroll` + a custom `smoothScroll.js` helper
- `Reveal.jsx` is a reusable wrapper for scroll-triggered reveal animations

**Styling:**
- Tailwind CSS with custom fonts (`alegreya`: Alegreya Sans SC, `noto`: Noto Serif Sinhala) and color `lilac` defined in `tailwind.config.js`
- Background images `image-universe` and `image-pastel` are registered as Tailwind utilities
- Global styles in `globals.css`; Flowbite plugin added to Tailwind for the Skills tabs

**Key files:**
- `src/app/components/Projects.jsx` — project data is a hardcoded array of objects (`title`, `description`, `pics`, `skills`); add new projects here
- `src/app/components/Skills.jsx` — large file (~79 KB) due to inline SVG icons; tab-based layout with "Tech" and "Soft" categories using Flowbite Tabs
- `src/app/components/AboutMe.jsx` — contains education timeline and CV/social links; PDF resume is at `public/Jeslynwangsa_resume.pdf`
- `src/app/components/ProjectTemplate.jsx` — entirely commented out; not in use

**Path alias:** `@/*` → `./src/*` (configured in `jsconfig.json`)

**Public assets:** Profile image at `public/images/me.png`; project images under `public/images/`
