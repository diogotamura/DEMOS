/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        santander: {
          DEFAULT: '#EC0000',
          dark: '#B00000',
          pale: '#FFF1F1',
        },
        ink: '#242424',
        muted: '#5C5C5C',
        sky: '#E9F6FF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
}
