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
        backgroundSecondary: "#ededed",
        prime: "#192d75",
      },
    },
    screens: {
      tablet: "720px",
      desktop: "1030px",
    },
  },
  plugins: [],
};
export default config;
