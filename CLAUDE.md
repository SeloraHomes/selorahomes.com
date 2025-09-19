# Selora Homes Marketing Website

**Company**: Selora Homes
**Website**: https://selorahomes.com
**Industry**: Enterprise Home Assistant solutions and smart home automation
**Target Audience**: Smart home solution installers and integrators
**Goal**: Professional marketing website that converts visitors into Selora Homes customers

## Project Overview

This is the official marketing website for Selora Homes, built with Hugo and deployed on GitHub Pages. Selora Homes provides enterprise-grade Home Assistant solutions, transforming the DIY platform into a reliable, professionally-managed system that allows installers to focus on their clients rather than technical support issues.

**Key Value Proposition**: "Enterprise Home Assistant solutions for professional installers"

## Brand Guidelines

### Color Palette

- **Primary Gold**: #C7AE6A (rich gold for headings and accents)
- **Secondary Gold**: #b99a45 (darker gold for interactive elements)
- **Light Gold**: #d5c28f (subtle backgrounds and highlights)
- **Cream**: #e3d6b4 (light backgrounds)
- **Primary Black**: #000000 (text and high contrast elements)
- **Charcoal**: #1a1a1a (secondary text and backgrounds)

### Design Principles

- **Luxury feel**: Premium typography, generous spacing, sophisticated color usage
- **Harmony**: Balanced layouts with consistent spacing and proportions
- **Professional**: Clean, modern design that instills confidence in enterprise customers
- **Conversion-focused**: Clear CTAs and benefit-driven messaging

## Technical Stack

### Hugo Configuration

- **Static Site Generator**: Hugo (latest stable version)
- **CSS Framework**: Tailwind CSS with custom color configuration
- **Deployment**: GitHub Pages with automated GitHub Actions
- **SEO**: Structured data, meta tags, semantic HTML5
- **Performance**: Optimized images, minified assets, fast loading

### File Structure

```
├── content/
│   ├── _index.md (homepage content)
│   └── sections/ (page sections as separate files)
├── layouts/
│   ├── index.html (homepage template)
│   ├── partials/ (reusable components)
│   └── _default/ (default templates)
├── static/
│   ├── images/ (optimized logo and graphics)
│   └── css/ (additional custom styles if needed)
├── config.yaml (Hugo configuration)
└── tailwind.config.js (Tailwind customization)
```

### Tailwind Configuration

Custom color palette must be configured in `tailwind.config.js`:

```javascript
colors: {
  'selora-gold': '#C7AE6A',
  'selora-gold-dark': '#b99a45',
  'selora-gold-light': '#d5c28f',
  'selora-cream': '#e3d6b4',
  'selora-black': '#000000',
  'selora-charcoal': '#1a1a1a'
}
```

## Content Strategy

### Target Keywords

- "Home Assistant support"
- "Professional Home Assistant"
- "Enterprise home automation"
- "Home Assistant installer services"
- "Smart home professional solutions"

### Page Sections (in order)

1. **Hero Section**: Powerful headline about eliminating Home Assistant support worries
2. **Problem Statement**: The challenges installers face with DIY Home Assistant
3. **Solution Overview**: How Selora Homes transforms Home Assistant into enterprise-grade
4. **Benefits**: Specific advantages for installers (reliability, support, management tools)
5. **Social Proof**: Testimonials or case studies (if available)
6. **Call to Action**: Clear next steps for interested installers
7. **Footer**: Contact information and additional resources

### Tone & Messaging

- **Professional but approachable**: Speak to installers as industry peers
- **Benefit-focused**: Emphasize outcomes rather than features
- **Confidence-building**: Position as the reliable enterprise solution
- **Problem-solving**: Address installer pain points directly

## SEO Requirements

### Technical SEO

- **Semantic HTML5**: Proper heading hierarchy, structured markup
- **Meta Tags**: Title, description, Open Graph, Twitter Cards
- **Structured Data**: Organization, Product, and Service schemas
- **Performance**: Core Web Vitals optimization, image optimization
- **Mobile-first**: Responsive design, touch-friendly interactions

### Content SEO

- **Primary H1**: Focus on main value proposition
- **Keyword optimization**: Natural integration of target keywords
- **Internal linking**: Link to relevant service pages (future expansion)
- **Image optimization**: Alt text, proper file names, WebP format

## GitHub Pages Deployment

### GitHub Actions Workflow

- **Trigger**: Push to main branch
- **Build**: Hugo build with Tailwind CSS processing
- **Deploy**: Automatic deployment to gh-pages branch
- **Domain**: Custom domain configuration if needed

### Repository Structure

- **Source files**: Main branch contains all Hugo source files
- **Built site**: gh-pages branch (auto-generated, don't edit manually)
- **Actions**: `.github/workflows/hugo.yml` for automated deployment

## Development Guidelines

### Code Quality

- **Semantic HTML**: Use proper HTML5 elements and ARIA attributes
- **Responsive Design**: Mobile-first approach with breakpoint testing
- **Performance**: Optimize images, minimize CSS/JS, implement lazy loading
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation

### Content Management

- **Markdown**: Use frontmatter for meta information
- **Images**: Store in `static/images/` with descriptive filenames
- **Components**: Create reusable partials for repeated elements
- **Configuration**: Keep site settings in `config.yaml`

## Success Metrics

### Technical Metrics

- **PageSpeed Insights**: 90+ scores for performance, accessibility, SEO
- **Core Web Vitals**: Green scores for LCP, FID, CLS
- **Mobile Usability**: No mobile usability issues in Search Console

### Business Metrics

- **Conversion Rate**: Contact form submissions or consultation requests
- **Engagement**: Time on page, scroll depth, interaction rates
- **Search Performance**: Rankings for target keywords, organic traffic

---

**IMPORTANT NOTES FOR CLAUDE CODE:**

- Always maintain the luxury brand aesthetic with the specified color palette
- Ensure all content is benefit-driven and installer-focused
- Prioritize conversion optimization and SEO best practices
- Test responsive design across all major breakpoints
- Validate HTML and accessibility before deployment
