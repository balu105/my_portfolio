/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#020617',      /* Deep Slate/Black */
          indigo: '#0f172a',    /* Slate 900 */
          purple: '#3b82f6',    /* Blue 500 */
          violet: '#6366f1',    /* Indigo 500 */
          lavender: '#cbd5e1',  /* Slate 300 */
          cyan: {
            100: '#cffafe', 
            200: '#a5f3fc', 
            300: '#67e8f9', 
            400: '#22d3ee', 
            500: '#06b6d4', 
            600: '#0891b2',
          }
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse-slow': 'spin-reverse 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        shimmer: {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' },
        }
      }
    }
  },
  plugins: [],
}