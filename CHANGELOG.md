# Changelog — portfolio refresh (Spring 2026)

This document records the major changes bundled in this release: layout and visual polish, content updates, responsiveness, and tooling/build fixes.

## Summary

The site was refactored from a simpler single-scroll layout into a **recruiter-focused portfolio** with clear section boundaries (About, Skills, Projects, Experience, Resume, Contact), stronger card styling and motion, **mobile-first navigation**, and content aligned with live GitHub repos and demos. Assets were swapped to current headshots/personal imagery, contact details were centralized in data, and **invalid CSS URLs** used for decorative SVG backgrounds were corrected so production builds remain clean.

---

## Navigation and page structure (`src/App.jsx`)

- **Section model**: Main content mirrors `SECTION_META`: Home hero plus About, Skills, Projects, Experience, Resume, and Contact anchors used by both the navbar and intersection-based active state.
- **IntersectionObserver-driven active section**: Highlights the current section in navigation while scrolling within the main scroll container (`root: mainRef.current`), tuned with thresholds suited to full-viewport-ish sections.
- **Experience UX**:
  - **Wide screens**: Horizontal scroll carousel for timeline cards with synced selection and smooth centering (`scrollExperienceToIndex`).
  - **Narrow screens**: Vertical list of experience cards matching the same data for comfortable reading without forced horizontal gestures.
- **Resume**: Embedded iframe (desktop-friendly) plus download/link affordances wired to resume assets in `public/`.
- **Contact**: Reduced to durable channels (mail, LinkedIn, GitHub phone) with data from `contactData`; the previous contact **form flow was removed** to avoid maintenance and backend coupling for a static portfolio.

## Visual design and motion

- **Card “pop”**: Shared **`PANEL` / `PANEL_PAD`** utility classes compose gradient panels, bordered glassy surfaces, heavier shadows, and a **radial hover glow** via a `before:` overlay that fades in on hover.
- **Hero**: **Headshot-led** hero (`HeroSection`) driven by `heroData.photoSrc` (`/joshua-headshot.png`) with framing, subtle glow (`hero-portrait__glow`), and layered mesh background (`hero-mesh` in CSS).
- **Section decoration** (`src/index.css`):
  - **`.section-decor`**: Base layer for repeatable, non-interactive **SVG icon watermarks** at low opacity (~0.14) with screen blend plus soft **multi-stop radial washes** (~0.25) behind content for depth without hurting readability.
  - **Modifiers** — section-specific tiling patterns:

    | Class | Intended motif |
    | --- | --- |
    | `.section-decor--about` | Academic cap / persona |
    | `.section-decor--skills` | Code / editor |
    | `.section-decor--projects` | Folder / artifact |
    | `.section-decor--experience` | Briefcase |
    | `.section-decor--resume` | Document |
    | `.section-decor--contact` | Envelope |

- **Safeguards**: Inline `data:image/svg+xml` URLs must use valid CSS quoting (`url("data:…")`). Escaped `\"` wrappers were **invalid** for the bundler/lightning-css pipeline and triggered **BadUrl** warnings until corrected.

## Content and data (`src/data/portfolioData.js`)

- **Hero**: Name, titles, introductory copy, photo path centralized.
- **About**: Paragraph array suitable for staggered typography; aligns with dual CS + IT-support narrative.
- **Education**: `educationData.status` surfaced as **“College Graduate”** with CSUMB summary.
- **Skills**: Expanded groups spanning languages, frontend/mobile (including Jetpack Compose, Vite, Framer Motion), backend Firebase/Spring cues, deployment (Render/GitHub), and IT stack (Microsoft 365, Active Directory).
- **Projects**: Portfolio lists **five primary showcase repos** aligned with coursework and personal work (`Personal Portfolio`, `Meal Match`, `Recipe Tracker & Meal Planner`, `Video Game Recommender`, `Gym Log`, etc.) plus Java **Roulette Game** homework; bullets emphasize stack, demos (Render where applicable), and video walk-throughs (`videoUrl`) when helpful.
- **Experience**: Timeline bullets mirror résumé-style outcomes; Present role at CSUMB IT Specialist prioritized.
- **Contact**: **`raiderjoshjc81@gmail.com`**, phone, LinkedIn, GitHub homepage under `Affirmingfour61`.

## Component tweaks

- **`FeaturedProject.jsx`**: Conditionally hides **Live Demo** (or equivalent demo CTA) when `demoUrl` is absent — cleaner cards for repos that are GitHub-only.
- **`SectionHeading.jsx`**: Typography and accent treatment unified with section cards.
- **Mobile nav**: `NavBar.jsx` exposes a **hamburger + overlay** wired to smooth `onNavigate`; desktop keeps inline links.

## Responsive behavior & scrolling

- **Mobile scroll**: Eliminated brittle full-viewport snapping on small breakpoints; **`min-height`** section rhythm and natural document-style scroll reduce “trapped height” frustrations on phones.
- **Safe areas & polish**: Reduced aggressive motion density on narrow viewports where appropriate; iframe and padding tuned for thumb reach.

## Assets (`public/`)

- Added/standardized raster imagery used by the refreshed layout:

  - `joshua-headshot.png` — hero portrait.
  - `joshua-about.png` — supporting About imagery (IBM-aligned photo workflow from design discussions).
  - `joshua-chavez.png` — additional branded portrait asset retained for reuse (see site wiring in `App` / data if swapped later).

Ensure licenses and likeness usage stay appropriate before public deploy.

## Builds

- **`npm run build`**: Validates Vite/Lightning pipeline; malformed `background-image` URLs caused dropped rules — **now fixed**.

---

## File map (quick reference)

| Area | Primary files |
| --- | --- |
| Layout / sections | `src/App.jsx` |
| Global styles | `src/index.css` |
| Domain copy & links | `src/data/portfolioData.js` |
| Hero UI | `src/components/HeroSection.jsx` |
| Project cards | `src/components/FeaturedProject.jsx` |
| Heading styling | `src/components/SectionHeading.jsx` |
| Navigation | `src/components/NavBar.jsx` |
| Docs | `README.md`, `CHANGELOG.md`, `NEW_REPO_SETUP.md` |

---

## Maintenance reminders

After deploying or renaming assets, update **`portfolioData.js`** and any hard-coded `public/` paths referenced in **`App.jsx`**. When adding new patterned sections, reuse `.section-decor` + modifier pattern and encode SVG fragments with **`url("data:image/svg+xml,…")`** (no stray backslashes).

