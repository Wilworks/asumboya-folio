# Wilfred Asumboya — Biomedical AI Researcher Portfolio

This repository hosts the source code for the professional portfolio website of **Wilfred Asumboya**, a Biomedical AI Researcher at the University of Ghana. He builds intelligent, evidence-grounded clinical decision support systems designed for low-resource healthcare settings in Africa.

The site is built with **TanStack Start**, a full-stack meta-framework powered by Vite, React, and TanStack Router, styled with custom CSS and Tailwind CSS v4 variables.

## 🚀 Live Demo
The site is deployed and hosted on Vercel at: [asumboya-folio.vercel.app](https://asumboya-folio.vercel.app) (or your custom Vercel domain).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/start/overview) (React 19 + TanStack Router)
- **Tooling**: [Vite](https://vite.dev/) (standard plugin setup)
- **Styling**: Vanilla CSS structure leveraging [Tailwind CSS v4](https://tailwindcss.com/) theme tokens and animations
- **Routing**: File-based routing via TanStack Router
- **Development Language**: TypeScript
- **Package Manager**: npm (replaces Bun for local/CI compatibility)
- **Target Environments**: Cloudflare Pages / Vercel

---

## 📁 Repository Structure

```text
├── .git/                 # Git repository history
├── public/               # Static assets (robots.txt, icons)
├── src/
│   ├── assets/           # Portfolio images, logos, and figures
│   ├── components/       # Reusable components
│   │   ├── site/         # Header, Footer, Reveal-on-scroll animations
│   │   └── ui/           # Shared interface elements
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Error handling and helper utilities
│   ├── routes/           # TanStack Router file-based pages
│   │   ├── __root.tsx    # Layout shell, metadata, and styles
│   │   ├── index.tsx     # Home page
│   │   ├── about.tsx     # Narrative, bio, and awards
│   │   ├── projects.tsx  # Interactive systems index
│   │   ├── research.tsx  # Active research threads and publications
│   │   └── contact.tsx   # Professional inquiry form
│   ├── router.tsx        # Router configuration
│   ├── server.ts         # SSR entry point and error boundary handling
│   ├── start.ts          # Client entry point
│   └── styles.css        # Core design system stylesheet
├── package.json          # Node dependencies and project scripts
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.ts        # Vite build tool and plugins setup
```

---

## 💻 Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Wilworks/asumboya-folio.git
cd asumboya-folio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in the terminal) in your browser to view the application.

---

## 🔧 Build & Deployment

### Project Scripts

- **`npm run dev`**: Starts the local Vite development server.
- **`npm run build`**: Compiles the application for production deployment.
- **`npm run preview`**: Serves the compiled production build locally for verification.
- **`npm run lint`**: Lints the codebase using ESLint to enforce best practices.
- **`npm run format`**: Formats all files using Prettier.

### Deploying to Vercel

This repository is optimized for deployment on Vercel. You can deploy it using the Vercel CLI or via GitHub integration.

#### Option 1: Vercel CLI
Ensure you have the Vercel CLI installed:
```bash
npm install -g vercel
```
Then, execute the following commands in the project directory:
```bash
# Link the project to Vercel
vercel link

# Build and deploy to production
vercel --prod
```

#### Option 2: Automatic Git Deployment
1. Import this repository into your Vercel Dashboard.
2. Select **TanStack Start** or **Vite** as the framework preset (or let Vercel auto-detect the configuration).
3. Set the build command to `npm run build` and output directory to `.output` (or the default `.vinxi/build` folder depending on adapter version).
4. Every push to the `main` branch will automatically trigger a new deployment.

---

## 📜 License
This project is private and proprietary to Wilfred Asumboya. All rights reserved.
