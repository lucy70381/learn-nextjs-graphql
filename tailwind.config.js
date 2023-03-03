/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src//pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        lg: '56px',
      },
    },
    extend: {
      backgroundImage: {
        Taipei: './images/Taipei.png',
        logo: 'url("/images/logo.svg")',
      },
      boxShadow: {
        '3xl': '0 4px 3px 0 rgba(13, 11, 12, 0.2)',
      },
      content: {
        triangle: 'url("/icons/triangle.svg")',
        triangle2: 'url("/icons/triangle2.svg")',
        square: 'url("/icons/square.svg")',
        square2: 'url("/icons/square2.svg")',
        circle: 'url("/icons/circle.svg")',
      },
      colors: {
        primary: '#FF1D6C',
        secondary: '#FFB72C',
        green: '#007350',
        background: '#F6F7FB',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
