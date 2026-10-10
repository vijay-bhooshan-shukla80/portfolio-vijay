# Vijay Bhooshan Shukla Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

The development server runs at http://127.0.0.1:3000.

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to a static host. Configure an SPA fallback to `index.html` so direct visits to routes such as `/about` and `/contact` work.

## Project structure

- `src/pages/HomePage.jsx`: portfolio layout and sections
- `src/data/`: portfolio content and links
- `src/components/`: reusable components
- `src/styles/`: styles
- `public/`: images, resume PDFs, and other static assets

Keep environment files out of Git. The contact form supports `VITE_WEB3FORMS_ACCESS_KEY`; values prefixed with `VITE_` are included in the public browser build.
