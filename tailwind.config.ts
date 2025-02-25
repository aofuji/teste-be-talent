import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_primary: "#0500ff",
        blue_10: "#edeffb",
        black: "#1c1c1c",
        gray_20: "#9e9e9e",
        gray_10: "#dfdfdf",
        gray_05: "#f5f5f5",
        gray_00: "#f0f0f0",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
