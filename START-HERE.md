# Start Here

## Aapko sirf in cheezon par dhyan dena hai

### Root folder me important files
- `src/` -> yahi main project folder hai
- `public/` -> images aur static files
- `package.json` -> project config
- `index.html` -> HTML entry file
- `vite.config.js` -> Vite config

### Root folder me jo folders ignore kar sakte ho
- `node_modules/` -> packages, isme kuch edit nahi karna
- `components.json` -> shadcn config, daily editing ke liye important nahi
- `package-lock.json` -> auto generated file
- `.gitignore` -> git ignore rules
- `postcss.config.mjs` -> styling config
- `jsconfig.json` -> path alias config

## `src` ke andar kya hai
- `pages/` -> alag alag page files
- `components/` -> reusable components
- `components/sections/` -> home page ke sections
- `data/` -> text, links, images ka content
- `styles/` -> global CSS
- `App.jsx` -> routing
- `main.jsx` -> app start file

## Sabse zyada kaunsi files kholni hain
- Home page: `src/pages/HomePage.jsx`
- Navbar: `src/components/navbar.jsx`
- Footer: `src/components/footer.jsx`
- Home sections: `src/components/sections/`
- Site content text: `src/data/site-content.js`
- Global CSS: `src/styles/globals.css`

## Agar sirf text change karna ho
- `src/data/site-content.js`

## Agar page ka layout change karna ho
- `src/pages/HomePage.jsx`
- `src/pages/ServicesPage.jsx`
- `src/pages/ProjectsPage.jsx`

## Agar design change karna ho
- `src/components/`
- `src/components/sections/`
- `src/styles/globals.css`
