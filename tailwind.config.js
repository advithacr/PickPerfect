/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ['Lalezar', 'cursive'], // Existing font
        corben: ['Corben', 'cursive'],   // New Corben font added
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.35)',
        },
        '.inner-shadow': {
          boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.25)',
        },
      });
    },
  ],
};
