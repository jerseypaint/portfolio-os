const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        xl: '3.5rem',
      },
    },
    typography: typographyStyles,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-mona-sans)',
      },
      boxShadow: {
        glow: '0px 7px 30px 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
