/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#1F4A3F',
        mint: '#4AB89A',
        gold: '#D4A56A',
        cream: '#F5F2EB',
      },
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(31, 74, 63, 0.15)',
      }
    },
  },
  plugins: [],
}
