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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};