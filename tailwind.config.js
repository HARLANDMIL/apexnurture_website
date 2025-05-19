/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
          start: '#0F0C29',
          mid: '#302B63',
          end: '#24243E',
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
        'noise': 'noise 1s steps(2) infinite',
        neonFlicker: 'neonFlicker 2s ease-in-out infinite',
        holographic: 'holographic 6s linear infinite',
        orbit: 'orbit 10s linear infinite',
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
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(10%, 5%)' },
          '30%': { transform: 'translate(-5%, 10%)' },
          '40%': { transform: 'translate(7%, -7%)' },
          '50%': { transform: 'translate(-10%, 10%)' },
          '60%': { transform: 'translate(5%, 5%)' },
          '70%': { transform: 'translate(-7%, 7%)' },
          '80%': { transform: 'translate(10%, -5%)' },
          '90%': { transform: 'translate(-10%, -10%)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'radial-gradient': 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
    },
  },
  plugins: [],
};