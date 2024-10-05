/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./src/assets/hero.svg')",
      },
      keyframes: {
        borderPulse: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(255, 255, 255, 0.8)' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        borderPulse: 'borderPulse 2s infinite ease-in-out',
      },
      
    },
  },
  plugins: [],
}

