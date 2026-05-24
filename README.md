# Joshua Chavez Portfolio

Modern personal portfolio site built with React, Tailwind CSS, and Framer Motion.

## Tech stack

- React + Vite
- Tailwind CSS (v4)
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

- `src/components`: reusable UI components
- `src/data/portfolioData.js`: all profile content, links, projects, and contact details
- `src/App.jsx`: page layout and section composition
- `src/index.css`: Tailwind import and global styles
- `public/Joshua_Chavez_Resume_5-21.pdf`: resume asset used by download button

## Replace placeholders checklist

Update these values in `src/data/portfolioData.js`:

- [ ] `heroData.ctas` GitHub link
- [ ] `heroData.ctas` LinkedIn link
- [ ] `projects[].githubUrl` for each project
- [ ] `projects[].demoUrl` for each project
- [ ] `contactData.email`
- [ ] `contactData.linkedin`
- [ ] `contactData.github`

## Resume file note

The site currently uses `public/Joshua_Chavez_Resume_5-21.pdf`.
If you want to use a different file name, replace the file in `public/` and update:

- `heroData.ctas` resume link
- Resume download button path in `src/App.jsx`
