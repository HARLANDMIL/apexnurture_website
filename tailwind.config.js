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
        aurora: 'aurora 8s ease-in-out infinite',
        neonFlicker: 'neonFlicker 2s ease-in-out infinite',
        holographic: 'holographic 6s linear infinite',
        orbit: 'orbit 10s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(180deg)' },
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
          '50%': { transform: 'translateY(-5px)' },
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
    },
  },
  plugins: [],
};