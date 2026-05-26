# Joshua Chavez Portfolio

Modern personal portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Sections are optimized for recruiters: clear story (About + education), skills, projects with live/demo links where available, timeline experience, embedded resume, and direct contact.

## What shipped in this version

For a **detailed, file-by-file breakdown** of layout, styling, data, mobile behavior, asset additions, and CSS build fixes, see [**CHANGELOG.md**](CHANGELOG.md).

To copy this codebase to a **brand-new GitHub repository** (separate from the current `origin`), follow [**NEW_REPO_SETUP.md**](NEW_REPO_SETUP.md).

## Tech stack

- React + Vite
- Tailwind CSS (v4 via `@import "tailwindcss"`)
- Framer Motion
- React Icons

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

| Path | Role |
| --- | --- |
| `src/components/` | Navbar, hero, cards, headings, animations |
| `src/data/portfolioData.js` | Profile copy, projects, links, education, skills, contact |
| `src/App.jsx` | Section composition, observers, responsive experience blocks |
| `src/index.css` | Tailwind import, decorative section backgrounds, hero mesh |
| `public/` | Resume PDF(s), raster photos (`joshua-headshot.png`, etc.) |

## Content checklist (when refreshing)

Most fields are filled in [`src/data/portfolioData.js`](src/data/portfolioData.js). Double-check whenever you rename files under `public/`:

- Hero photo path (`heroData.photoSrc`)
- Projects: `demoUrl`, `githubUrl`, `videoUrl`, custom labels (`demoLabel`, …)
- Contact: email, LinkedIn, GitHub (`contactData`)

## Resume file

The bundled PDF is **`public/Joshua_Chavez_Resume_5-21.pdf`**. Replace the binary and update any button/iframe URLs in **`App.jsx`** if the filename changes.
