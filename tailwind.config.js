/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'girlcode-pink': '#e94154',
        'white': '#ffffff',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        "hero-section": "url('/src/assets/hero-background.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

