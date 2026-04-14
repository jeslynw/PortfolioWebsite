# Portfolio Design System

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Page background | `#ffd6e4` | `bg-[#ffd6e4]` on `<main>` across all pages |
| Card gradient (lilac) | `rgba(234,194,241,0.226)` → `rgba(224,188,231,0.459)` | `.card` CSS class — HeroSection panel only |
| Primary accent | `#9dc5ee` | Headings, borders, button outlines, number badges |
| Secondary accent | `#6cb6ff` | CTA links, skill tag text, timeline icons |
| Skill tag background | `#eaf3fc` | Light tint of primary accent |
| White | `#ffffff` | Project card backgrounds, button text on hover |
| LinkedIn blue | `#0077b5` | LinkedIn button only |

## Typography

| Role | Font | Tailwind class |
|------|------|---------------|
| Headings / display | Alegreya Sans SC (700) | `font-alegreya` |
| Body / UI text | Noto Serif Sinhala | `font-noto` |

Both loaded via Google Fonts in `globals.css`.

## Component Patterns

### `.card` (CSS class — HeroSection only)
- Background: lilac gradient left → right
- Border radius: 40px
- **Do not use on project cards** — project cards use `bg-white`

### Project Cards
- Layout: `grid grid-cols-1 md:grid-cols-[3fr_2fr]` — content 60% left, image 40% right
- Border radius: `rounded-[20px]`
- Shadow: `shadow-[0_8px_32px_rgba(157,197,238,0.18)]`
- Hover shadow: `shadow-[0_12px_40px_rgba(157,197,238,0.35)]`
- **Number badge**: `w-10 h-10 rounded-full border-2 border-[#9dc5ee]`, `font-alegreya text-sm text-[#9dc5ee]`
- **Metadata**: `font-noto text-xs text-gray-400 uppercase tracking-widest` — `{year} • {category}`
- **Title**: `font-alegreya text-xl sm:text-2xl font-bold text-gray-900`
- **Description**: `font-noto text-sm text-gray-500 leading-relaxed` + `line-clamp-3` on homepage only
- **Skill tags**: `bg-[#eaf3fc] text-[#6cb6ff] border border-[#9dc5ee]/30 rounded-full text-xs px-3 py-1`
- **CTA link**: `text-[#6cb6ff] text-xs uppercase tracking-widest font-semibold hover:text-[#9dc5ee]`

### Framer Motion Conventions
- **Hero** (mount): `x: -500 → 0`, `opacity: 0 → 1`, duration 1s; spring for profile image
- **Section cards** (scroll): `y: 48 → 0`, `opacity: 0 → 1`, duration 0.5s, `easeOut`
- **Stagger**: `delay: index * 0.12` per card on homepage; `index * 0.08` on projects page
- **Viewport**: `whileInView`, `{ once: true, margin: "-80px" }`
- **Show More button**: `whileHover: { scale: 1.04 }`, `whileTap: { scale: 0.97 }`

## Routing

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.js` | Homepage — shows first 3 projects |
| `/projects` | `src/app/projects/page.js` | All projects page |

The Navbar `#projects` anchor link scrolls to the homepage section. The "Show More Projects" button navigates to `/projects`.

## Project Data Schema

```js
// src/app/data/projects.js
{
  number: string,        // "01"–"07", zero-padded display string
  year: string,          // "2023" | "2024" | "2025" | "2026"
  category: string,      // "Data Science" | "Cybersecurity" | "Web App" | "Hackathon" | "Systems" | "Coursework: ..."
  title: string,
  description: string | JSX,   // JSX allowed — file uses .js not .json
  pics: string[],        // array of image paths relative to /public — supports multi-image gallery
  skills: string[],      // [""] means no skills
  achievement?: string,  // optional — renders a gold trophy badge (e.g. "Ranked 1st in Class · A+")
  link?: string,         // optional — renders "View Full Project →" pill button; absent renders "Private / In Progress"
}
```

## File Structure

```
src/app/
  data/
    projects.js          ← single source of truth for all project data
  components/
    Projects.jsx         ← homepage section, shows first 3 with "Show More" button
    ProjectTemplate.jsx  ← retired/commented out, do not use
  projects/
    page.js              ← /projects route (server component)
    ProjectsGrid.jsx     ← "use client", renders all projects with Framer Motion
design.md                ← this file
```
