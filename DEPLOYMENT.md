# Selora Homes - GitHub Pages Deployment Guide

## Automated Deployment Setup

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch will trigger a new deployment.

### Prerequisites

1. **Repository Settings**
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `gh-pages` (will be auto-created by Actions)
   - Folder: `/ (root)`

2. **GitHub Actions Permissions**
   - Go to repository Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

### Workflow Features

The GitHub Actions workflow (`/.github/workflows/hugo.yml`) includes:

- **Hugo Extended**: Latest stable version with Sass support
- **Node.js 18**: For Tailwind CSS processing
- **Tailwind CSS**: Automatic build and minification
- **Asset Optimization**: Image processing and minification
- **SEO Optimization**: Sitemap generation and meta tags
- **Performance**: Built-in Hugo minification and compression
- **Verification**: Post-deployment accessibility checks

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   # Site available at http://localhost:1313
   ```

3. **Build Tailwind CSS (if needed)**
   ```bash
   npm run css:build    # One-time build
   npm run css:watch    # Watch for changes
   ```

4. **Build Production Site**
   ```bash
   npm run build
   ```

### Custom Domain Setup (Optional)

1. **Configure Domain**
   - Edit `/static/CNAME` file with your domain name
   - Update `baseURL` in `/config.yaml`

2. **DNS Configuration**
   - Point your domain's CNAME to: `username.github.io`
   - Or use A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **SSL Certificate**
   - GitHub automatically provisions Let's Encrypt certificates
   - Enable "Enforce HTTPS" in repository Pages settings

### Deployment Process

1. **Make Changes**
   - Edit content files, layouts, or styles
   - Test locally using `npm run dev`

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: update content"
   git push origin main
   ```

3. **Automatic Deployment**
   - GitHub Actions builds the site
   - Processes Tailwind CSS
   - Optimizes assets
   - Deploys to GitHub Pages
   - Verifies deployment success

### Performance Optimization

The deployment includes several performance optimizations:

- **CSS Minification**: Tailwind CSS built with `--minify`
- **HTML Minification**: Hugo's built-in minification
- **Asset Optimization**: Image processing and compression
- **Caching**: Proper cache headers for static assets
- **Security**: Content Security Policy headers

### Monitoring and Troubleshooting

1. **Build Status**
   - Check Actions tab for build status
   - Review build logs for any errors

2. **Site Health**
   - Monitor site availability at deployment URL
   - Use browser dev tools to check for issues

3. **Performance**
   - Test with Google PageSpeed Insights
   - Monitor Core Web Vitals metrics

### Environment Variables (if needed)

Set in repository Settings → Secrets and variables → Actions:

- `HUGO_VERSION`: Override Hugo version (default: 0.120.4)
- `NODE_VERSION`: Override Node.js version (default: 18)

### File Structure

```
├── .github/workflows/hugo.yml    # GitHub Actions workflow
├── assets/css/input.css          # Tailwind CSS source
├── config.yaml                   # Hugo configuration
├── package.json                  # Node.js dependencies
├── tailwind.config.js            # Tailwind configuration
├── static/CNAME                  # Custom domain (optional)
├── content/                      # Site content
├── layouts/                      # Hugo templates
└── static/                       # Static assets
```

### Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify all required files are present
3. Ensure repository permissions are correct
4. Test local build first

The deployment is designed to be robust and reliable, with automatic error detection and recovery mechanisms built in.