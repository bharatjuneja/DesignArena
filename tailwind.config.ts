import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        foreground: "#e5e7eb",
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#0f172a"
        },
        card: "#020617",
        borderSoft: "#1f2933",
        success: "#22c55e",
        danger: "#ef4444",
        warning: "#eab308"
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.65)"
      }
    }
  },
  plugins: []
};

export default config;

