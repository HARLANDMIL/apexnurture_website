/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.svg',
    './public/**/*.png',
    './public/**/*.jpg',
    './public/**/*.jpeg',
    './src/Images/**/*.{svg,png,jpg,jpeg}',
  ], // Added image paths for purging unused CSS
  safelist: [
    'glass', 'glass-card', 'btn-primary', 'text-gradient', 'timeline-container',
    'animate-on-scroll', 'glassmorphism-container', 'glassmorphism-card', 'orbitron-glow',
    'pulse-cta', 'fade-in-on-scroll', 'neon-glow-badge', 'animate-spin-slow',
    'animate-glow-timeline', 'animate-glow-3s', 'animate-pulse-urgency', 'animate-glow-bg-cta',
    'animate-aurora', 'pricing-card-hover', 'holographic-shimmer'
  ], // Safelist custom classes used in index.css
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFFF',
          light: '#80FFFF',
          dark: '#00CCCC',
        },
        secondary: {
          DEFAULT: '#800080',
          light: '#C080C0',
          dark: '#600060',
        },
        accent: {
          DEFAULT: '#00FF00',
          light: '#80FF80',
          dark: '#00CC00',
        },
        background: {
          start: '#ffffff',
          mid: '#f8fafc',
          end: '#f1f5f9',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#86EFAC',
          dark: '#047857',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#B45309',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
          dark: '#B91C1C',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'aurora-slow': 'aurora 20s ease-in-out infinite',
        'aurora-reverse': 'aurora-reverse 25s ease-in-out infinite',
        'neonFlicker': 'neonFlicker 2s ease-in-out infinite',
        'holographic': 'holographic 6s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0, 0) scale(1.0)', opacity: 0.5 },
          '25%': { transform: 'translate(10%, 10%) scale(1.1)', opacity: 0.7 },
          '50%': { transform: 'translate(-5%, 15%) scale(1.2)', opacity: 0.5 },
          '75%': { transform: 'translate(-10%, 5%) scale(1.1)', opacity: 0.7 },
          '100%': { transform: 'translate(0, 0) scale(1.0)', opacity: 0.5 },
        },
        'aurora-reverse': {
          '0%': { transform: 'translate(0, 0) scale(1.0)', opacity: 0.5 },
          '25%': { transform: 'translate(-10%, -10%) scale(1.2)', opacity: 0.7 },
          '50%': { transform: 'translate(5%, -15%) scale(1.1)', opacity: 0.5 },
          '75%': { transform: 'translate(10%, -5%) scale(1.2)', opacity: 0.7 },
          '100%': { transform: 'translate(0, 0) scale(1.0)', opacity: 0.5 },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        holographic: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(50%) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
    },
  },
  plugins: [],
};