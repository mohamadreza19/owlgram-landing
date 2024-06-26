import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          teal: {
            50: '#EAEFF0',
            100: '#EAEFF0',
            200: '#0EB87A',
            300: '#0A8871',
            400: '#11BE7F',
            500: '#0C6252',
          },

          gray: {
            50: '#F7F7F8',
            100: '#EAEFF0',
            200: '#D4D5D6',
            300: '#A1A3A7',
            400: '#646B80',
            500: '#353A49',
            600: '#27272E',
            700: '#171717',
            800: '#EBEBEB94',
          },
        },
        'gray2-500': '#353A49',
        'teal2-400': '#0A8B73',
        'teal2-500': '#0C6252',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik_ar: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'container-1': "url('/asset/banner/container-1.png')",
        'container-2': "url('/asset/banner/container-2.png')",
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      'cs-1': '1412px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
