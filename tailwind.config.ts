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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        spartan: ['var(--font-spartan)', 'sans-serif'],
        silkSerif: ['var(--font-silk-serif)', 'serif'],
        shalimar: ['var(--font-shalimar)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
