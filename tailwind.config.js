/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./static/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'selora-gold': '#C7AE6A',
        'selora-gold-dark': '#b99a45',
        'selora-gold-light': '#d5c28f',
        'selora-cream': '#e3d6b4',
        'selora-black': '#000000',
        'selora-charcoal': '#1a1a1a',
        'primary': '#C7AE6A',
        'primary-foreground': '#000000',
        'secondary': '#b99a45',
        'background': '#ffffff',
        'foreground': '#000000',
        'card': '#ffffff',
        'muted': '#f8f9fa',
        'muted-foreground': '#6b7280',
        'border': '#e5e7eb'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
      },
    }
  },
  plugins: []
}
