/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      primary: '#ff6d00',
      primaryLight: '#ff8400ee',
      secondary: '#004540',
      secondaryLight: '#004540cf',
      neutral1: '#faf9f5',
      neutral2: '#efede3',
      neutral3: '#e8e9e9',
      neutral4: '#b9bdbc',
      neutral5: '#747c79',
      neutral6: '#2e3a35',
      neutral7: '#17241f',
      slate: '#708090',
      gray: '#808080',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
};
