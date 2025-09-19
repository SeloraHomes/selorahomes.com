# Selora Homes Marketing Website

Official marketing website for Selora Homes - Enterprise Home Assistant Solutions

**Live Site**: https://selorahomes.com

## Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (v0.120.0 or later)
- [Node.js](https://nodejs.org/) (v18 or later)

### Development Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build Tailwind CSS (optional):**

   Hugo already builds Tailwind v4 via its pipeline. If you want a standalone CSS build:

   ```bash
   npx @tailwindcss/cli -i ./assets/css/main.css -o ./static/css/style.css --minify
   ```

3. **Start development server:**

   ```bash
   hugo server
   ```

4. **View the site:**
   Open your browser to: `http://localhost:1313/`

### Production Build

1. **Build for production:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   Push to the `main` branch and GitHub Actions will automatically deploy to `gh-pages`.

## Project Structure

```
├── assets/css/           # Tailwind CSS source
├── content/             # Homepage content and data
├── layouts/             # Hugo templates
├── static/              # Static assets (images, CSS)
├── config.yaml          # Hugo configuration
└── assets/css/main.css  # Tailwind v4 theme + CSS
```

## Features

- ✅ Professional marketing website design
- ✅ Enterprise Home Assistant solution showcase
- ✅ Luxury gold brand aesthetic
- ✅ Mobile-responsive design
- ✅ SEO optimized with structured data
- ✅ Automated GitHub Pages deployment
- ✅ Conversion-focused landing pages

## Brand Colors

- **Primary Gold**: #C7AE6A (rich gold for headings and accents)
- **Secondary Gold**: #b99a45 (darker gold for interactive elements)
- **Light Gold**: #d5c28f (subtle backgrounds and highlights)
- **Cream**: #e3d6b4 (light backgrounds)
- **Primary Black**: #000000 (text and high contrast elements)
- **Charcoal**: #1a1a1a (secondary text and backgrounds)

## About Selora Homes

Selora Homes transforms Home Assistant from a DIY solution into an enterprise-grade platform, providing professional installers with reliable, managed smart home automation solutions. The company focuses on eliminating support headaches for installers while delivering premium smart home experiences to end customers.
