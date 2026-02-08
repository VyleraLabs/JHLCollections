
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          gold: '#aea080',
          'gold-hover': '#dd9d4c',
          dark: '#0d1f2e',
          'off-white': '#fefef7',
          grey: '#deddd9'
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        luxury: ['var(--font-cinzel)', 'serif'],
        editorial: ['var(--font-cormorant)', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grow-width': {
          '0%': { width: '0' },
          '100%': { width: '6rem' }, // match w-24
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'grow-width': 'grow-width 1.5s ease-out forwards',
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
      }
    },
  },
  plugins: [],
};
export default config;
