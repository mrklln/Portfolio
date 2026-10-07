# Mark Allen C. Salomon | Portfolio

A responsive personal portfolio website showcasing my background, skills, and projects. Built with React, Vite, and Tailwind CSS.

## Live Demo

* **Vercel:** https://salomon-my-portfolio.vercel.app
* **GitHub Pages:** https://mrklln.github.io/Portfolio/

## About

I'm a 3rd year BS Information Technology student at Cavite State University - Tanza Campus. This portfolio presents my education, experience, tech stack, and the projects I've built.

## Features

* Responsive layout that works on mobile, tablet, and desktop
* Light/Dark mode toggle
* Sections for Home, About, Resume, Tech Stack, Projects, and Contact
* Resume timeline for education and experience, with a skills list
* Downloadable CV
* Projects pulled live from my GitHub
* Scroll reveal animations and hover effects
* Smooth transitions between light and dark themes

## Tech Stack

* [React](https://react.dev/)
* [Vite](https://vite.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* Hosted on [Vercel](https://vercel.com/) and [GitHub Pages](https://pages.github.com/)

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) 18 or newer
* npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mrklln/Portfolio.git

# Go into the project folder
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```text
Portfolio
├── .github/workflows    # GitHub Pages deploy workflow
├── public               # Static files (favicon, resume PDF)
├── src
│   ├── assets           # Images and other imported assets
│   ├── components       # About, Contact, Footer, Home, Navbar,
│   │                    # Projects, Resume, Reveal, Techstack
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

One `git push` to `main` updates both sites.

* **Vercel** rebuilds automatically on every push using the default build (`base: '/'`).
* **GitHub Pages** is deployed by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs `vite build --mode ghpages`, which sets `base: '/Portfolio/'` in `vite.config.js`.

For the GitHub Pages deploy to work, set **Settings → Pages → Source** to **GitHub Actions** in the repository.

## Contact

* GitHub: [@mrklln](https://github.com/mrklln)
