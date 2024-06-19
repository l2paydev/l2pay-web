/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require('lodash');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './views/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#eff6ff',
          2: '#FFCC76',
          3: '#5856F3',
          4: '#5955F2',
        },
        dark: {
          0: '#121212',
          1: '#060606',
          2: '#0F0F0F',
          3: '#343434',
        },
        gray: {
          1: '#E1DFEC',
          2: '#999999',
          3: '#666666',
        },
      },
      backgroundImage: {
        'linear-hero':
          'linear-gradient(180deg, rgba(25, 26, 35, 0) 0%, #191A23 72.83%)',
        'linear-1': 'linear-gradient(139.36deg, #FFCC76 39.5%, #C18437 100%)',
        'linear-2':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.568) 0%, rgba(18, 18, 18, 0.71) 100%)',
        'linear-3':
          'linear-gradient(54.51deg, rgba(255, 210, 163, 0.5) 0%, rgba(15, 18, 24, 0) 113.63%)',
        'linear-4': 'linear-gradient(90deg, #999999 0%, #666666 100%)',
        'card-linear-1':
          'linear-gradient(125.64deg, #0F0F0F 0%, rgba(153, 153, 153, 0.9) 101.36%)',
        nav: "url('/static/images/bg/nav.png')",
        hero: "url('/static/images/bg/hero.jpg')",
        'hero-overlay': "url('/static/images/bg/hero-overlay.jpg')",
        'banner-x': "url('/static/images/bg/x.jpg')",
        about: "url('/static/images/bg/about.png')",
        line: "url('/static/images/bg/line.png')",
        roadmap: "url('/static/images/bg/roadmap.png')",
        card: "url('/static/images/bg/card.png')",
        'card-suit': "url('/static/images/bg/card-suit.png')",
        'card-setup': "url('/static/images/setup/bg-card.png')",
        'card-setup-1': "url('/static/images/setup/bg-1.png')",
        'card-setup-2': "url('/static/images/setup/bg-2.png')",
      },
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/container-queries'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
