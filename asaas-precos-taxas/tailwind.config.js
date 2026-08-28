/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0038E5',
          dark: '#002BB2',
          light: '#E8EEFF',
          surface: '#F2F5FF',
        },
        ink: '#111111',
        muted: '#5B6474',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Geist', 'sans-serif'],
      },
      maxWidth: {
        page: '1120px',
      },
    },
  },
  plugins: [],
}
