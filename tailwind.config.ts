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
        background: "rgb(var(--bg-primary))",
        foreground: "rgb(var(--fg-primary))",
        bgSecondary: "rgb(var(--bg-secondary))",
        fgSecondary: "rgb(var(--fg-secondary))",
      },
      letterSpacing: {
        'extra-widest': '0.2em',
      },
      boxShadow: {
          glow: '0 2px 8px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
