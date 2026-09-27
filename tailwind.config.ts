import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "#FAFAF9",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
        slide: { from: { transform: "translateX(100%)" }, to: { transform: "none" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        slide: "slide .45s cubic-bezier(.2,.7,.2,1) both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
