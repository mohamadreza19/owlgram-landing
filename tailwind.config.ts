import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          teal: {
            50: "#EAEFF0",
            100: "#EAEFF0",
            200: "#0EB87A",
            300: "#0A8871",
            400: "#11BE7F",
          },
          gray: {
            50: "#F7F7F8",
            100: "#EAEFF0",
            200: "#D4D5D6",
            300: "#A1A3A7",
            400: "#646B80",
            500: "#353A49",
            600: "#27272E",
            700: "#171717",
            800: "#EBEBEB94",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "container-1": "url('/asset/banner/container-1.png')",
        "container-2": "url('/asset/banner/container-2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
