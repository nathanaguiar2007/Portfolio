# Nathan Aguiar — Portfolio

Personal portfolio website for Nathan Aguiar, a Computer Science student at Purdue University. Built with **React, TypeScript, Vite, React Router, and regular CSS**.

A warm, minimal design with large typography, rounded feature canvases, pale green and blue accents, and responsive layouts. CSS animations respect `prefers-reduced-motion`. Styling lives in one commented stylesheet; there is no utility CSS or animation framework.

## Featured Work

### Dormonomics

**Personal finance. Built for college.** An iOS personal-finance application designed around college life.

- Status: **Work in progress**
- Technologies: Swift, SwiftUI, Supabase, PostgreSQL, iOS

### AI / Food Recognition & Macronutrient Research

A computer-vision and machine-learning project focused on recognizing food and connecting predictions with nutritional and macronutrient information. This work contributed to research that was published and presented.

- Technologies: Python, Machine Learning, Neural Networks, Computer Vision

The additional-project cards are intentional placeholders. The phone frames, research display, and design-gallery shapes are illustrative placeholders, not actual screenshots or research results.

## Portfolio Sections

Software projects, artificial intelligence and machine learning, experience, technical skills, Fusion 360, Blender, 3D printing, physical builds, About, and Contact.

Primary programming languages: **Python · Java · Swift · C#**.

## Run Locally

Use Node.js **20.19+ on the 20.x line, or 22.12+**, and npm, matching the [Vite requirements](https://vite.dev/guide/). Replace `REPOSITORY_URL` with your actual clone URL:

```bash
git clone REPOSITORY_URL portfolio-website
cd portfolio-website
npm install
npm run dev
```

Open **http://localhost:5173**. Vite prints another port if 5173 is already occupied. For repeatable installations from the committed lockfile, use `npm ci`.

No environment variables, API keys, or service credentials are required. Supabase is part of the featured iOS project's stack, not this website's backend. Anything bundled into this frontend is public; keep private service credentials out of client code and `VITE_` variables.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development with hot reload |
| `npm run lint` | ESLint checks for TypeScript and React |
| `npm run build` | TypeScript check and production build into `dist/` |
| `npm run preview` | Preview the built site at http://localhost:4173 |
| `npm run build:github` | Build with relative assets and hash routing for GitHub Pages |
| `npm run test:e2e` | Browser checks for routes, content, navigation, assets, motion, and overflow |

`npm run preview` is a local preview, not a production server. Hosting providers serve the generated `dist/` files.

For browser tests, install Chromium once:

```bash
npx playwright install chromium
npm run test:e2e
```

Alternatively, use an installed Google Chrome with `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` on macOS/Linux. The test runner starts the development server automatically. Tests cover widths of 1440, 1024, 768, and 390 pixels. Generated traces and reports are ignored by Git.

## Structure

```text
src/
  components/       Shared navigation, hero, showcases, gallery, and sections
  data/portfolio.ts Project facts, experience, skills, About, and contact links
  pages/            Home, Project, Design, About, and NotFound
  App.tsx           Routes, page titles, focus, and section navigation
  main.tsx          React entry point and router selection
  styles.css        Commented CSS and design tokens
public/
  favicon.ico       Preserved site favicon
index.html          HTML metadata and application entry
vite.config.ts      Vite setup and GitHub Pages asset paths
tests/              Browser regression checks
```

Both project URLs share `pages/Project.tsx`, with their content selected from `data/portfolio.ts`. This keeps the detail-page layout consistent without duplicating markup.

### Editing the Site

- **Content:** Edit `src/data/portfolio.ts`. Both featured-project sections and detail pages read the same facts.
- **Styles:** Start with `:root` in `src/styles.css` for colors, spacing, typography, radii, shadows, and content widths. The following sections cover shared elements, navigation, hero, projects, experience, skills, gallery, About, contact, detail pages, and responsive rules.
- **Page composition:** Edit `src/pages/Home.tsx` to rearrange sections.
- **Images:** Add real project images to `public/images/` or `public/projects/`. Use `${import.meta.env.BASE_URL}images/your-image.jpg` for public asset URLs so they work on GitHub Pages too. Alternatively, import assets from a new `src/assets/` folder and let Vite resolve them.
- **Contact:** Fill the empty strings in `contact` with confirmed public details. Email accepts an address; the component adds `mailto:`. Empty fields display clearly unavailable controls instead of sending visitors to invented URLs.

## Routes

| Page | Normal deployment | GitHub Pages build |
| --- | --- | --- |
| Home | `/` | `/#/` |
| Dormonomics | `/projects/dormonomics` | `/#/projects/dormonomics` |
| Food research | `/projects/food-ai` | `/#/projects/food-ai` |
| Design | `/design` | `/#/design` |
| About | `/about` | `/#/about` |

Work and Experience navigation returns to the corresponding homepage section from any page. Unknown routes show a helpful fallback. Client-side page titles and descriptions update on navigation; social crawlers receive the shared metadata in `index.html`.

## Deployment

### Vercel

Import the GitHub repository and use the **Vite** preset. Build with `npm run build`; publish `dist/`. The included `vercel.json` provides a fallback to `index.html` for client routes while excluding the generated assets and favicon. No environment variables are required.

### Netlify

Import the GitHub repository. The included `netlify.toml` sets `npm run build`, publishes `dist/`, and configures a fallback for direct visits and refreshes on nested routes.

### GitHub Pages

Use `npm run build:github`. It enables React Router's `HashRouter` and relative asset URLs, so project pages work under both an account site and a repository subdirectory without server rewrites.

In repository **Settings → Pages**, choose **GitHub Actions**. Add the Pages workflow described in the [official Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages), use `npm ci` for installation, replace its build command with `npm run build:github`, and upload **`dist/`** as the Pages artifact. Use a Node.js version meeting the requirement above. This repository does not automatically publish or assume your final repository name.

The [React Router HashRouter documentation](https://reactrouter.com/api/declarative-routers/HashRouter) explains the hash-based URL behavior.

For other static hosts using the normal build, configure unknown application paths to serve `index.html`.

## Status and Remaining Placeholders

The portfolio is actively being developed and updated as new software, AI, and engineering projects are completed.

- Four additional-project cards await real projects.
- Dormonomics needs actual iPhone screenshots.
- Food research needs real images, prediction examples, nutritional output, charts, and publication/presentation details.
- Fusion 360, Blender, 3D printing, and physical builds need real project assets.
- About needs a professional photo.
- Robotics has a clean editable experience entry; add confirmed role, organization, dates, and details.
- Confirm the existing IT organization label and dates before publishing.
- Add email, GitHub, LinkedIn, and portfolio URLs in `src/data/portfolio.ts`.

## Contact

- GitHub: To be added
- LinkedIn: To be added
- Portfolio URL: To be added

## License

This repository contains personal portfolio code and original project content. No open-source license is granted at this time. Images, written material, renders, branding, and project assets remain the owner's content unless otherwise noted. Third-party dependencies retain their respective licenses.
