/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--border-rgb) / <alpha-value>)",
        input: "rgb(var(--border-rgb) / <alpha-value>)",
        ring: "rgb(var(--accent-rgb) / <alpha-value>)",
        background: "rgb(var(--bg-rgb) / <alpha-value>)",
        foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          foreground: "var(--accent-ink)",
        },
        secondary: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--error-rgb) / <alpha-value>)",
          foreground: "rgb(var(--error-ink-rgb) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--bg-soft-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-secondary-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--surface-hover-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "rgb(var(--bg-soft-rgb) / <alpha-value>)",
          foreground: "rgb(var(--text-primary-rgb) / <alpha-value>)",
          primary: "rgb(var(--accent-rgb) / <alpha-value>)",
          "primary-foreground": "var(--accent-ink)",
          accent: "rgb(var(--surface-rgb) / <alpha-value>)",
          "accent-foreground": "rgb(var(--text-primary-rgb) / <alpha-value>)",
          border: "rgb(var(--border-rgb) / <alpha-value>)",
          ring: "rgb(var(--accent-rgb) / <alpha-value>)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
