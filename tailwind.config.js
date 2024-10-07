/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-main)'],
      serif: ['Garamond', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    screens: {
      all: '1px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        black: '#000000', 
        white: '#ffffff', 
        gold: {
          100: '#ffe3b3', 
          200: '#ffd54f', 
          300: '#ffca28', 
          400: '#ffb300', 
          500: '#ffa000', 
          600: '#ff8f00', 
          700: '#ff6f00', 
          800: '#ff5722',
          900: '#e65100', 
        },
        gray: {
          100: '#f5f5f5',  
          200: '#eeeeee',  
          300: '#e0e0e0', 
          400: '#bdbdbd',   
          500: '#9e9e9e',   
        },
      
      },
      fontSize: {
        xxs: '0.7rem',
        xs: '0.775rem',
        sm: '0.85rem',
        md: '0.95rem',
      },
      spacing: {
        88: '22rem',
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.20rem',
        DEFAULT: '0.30rem',
        md: '0.40rem',
        lg: '0.50rem',
        full: '9999px',
      },
      blur: {
        xs: '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      transitionProperty: {
        'height': 'height, max-height',
        'spacing': 'margin, padding',
      },
      maxWidth: {
        'xl-1': '39.5rem',
      },
    },
  },
  plugins: [],
};
