/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#1e3a5f',
          light: '#2a5080',
          dark: '#152944',
        },
        'slate-pro': {
          DEFAULT: '#2c3e50',
          light: '#34495e',
          dark: '#1a252f',
        }
      }
    },
  },
  plugins: [],
}