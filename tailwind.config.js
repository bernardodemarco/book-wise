/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      height: {
        'screen-height': 'calc(100vh - 40px)',
      },
      gridTemplateColumns: {
        app: '14.5rem 1fr',
        mediumApp: '6rem 1fr',
        smallApp: '3rem 1fr',
      },
      borderColor: {
        gradient: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    colors: {
      green: {
        100: '#50B2C0',
        200: '#255D6A',
        300: '#0A313C',
      },
      purple: {
        100: '#8381D9',
        200: '#2A2879',
      },
      gray: {
        100: '#F8F9FC',
        200: '#E6E8F2',
        300: '#D1D6E4',
        400: '#8D95AF',
        500: '#303F73',
        600: '#252D4A',
        700: '#181C2A',
        800: '#0E1116',
      },
      red: {
        500: '#F75A68',
      },
    },
    backgroundImage: {
      'gradient-horizontal': 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
      'gradient-vertical': 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      'background-gradient':
        'linear-gradient(0deg, rgba(42, 40, 121, 0.60) 0%, rgba(42, 40, 121, 0.60) 100%)',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
