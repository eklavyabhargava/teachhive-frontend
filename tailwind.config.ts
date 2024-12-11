import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgSecondary: "#c7c7c7",
        prime: "#192d75",
        secondaryColor: "#639983",
        "prime-hover": "#233d9f",
        "secondary-hover": "#69a88d",
      },
    },
    screens: {
      mobile: "640px",
      tablet: "820px",
      desktop: "1030px",
    },
  },
  plugins: [],
};
export default config;
