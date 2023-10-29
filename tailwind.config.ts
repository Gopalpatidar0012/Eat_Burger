import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   transparent: "transparent",
      //   current: "currentColor",
      //   white: "#ffffff",
      //   black: "#323336",
      //   gray: "#6B6D6F",
      //   red: "#EA3946",
      //   lightGray: "#C2C2C2",
      //   darkBackground: "#242424",
      // },
    },
  },
  plugins: [],
};
export default config;
