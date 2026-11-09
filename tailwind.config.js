/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Every colour resolves to a CSS variable defined in globals.css, so a
      // single set of classes covers light and dark — no `dark:` variants.
      colors: {
        shell: "var(--shell)",
        page: "var(--page)",
        card: "var(--card)",
        ink: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        side: {
          DEFAULT: "var(--side)",
          ink: "var(--side-ink)",
          muted: "var(--side-muted)",
          line: "var(--side-line)",
          hover: "var(--side-hover)",
        },
        sage: {
          DEFAULT: "var(--sage)",
          ink: "var(--sage-ink)",
          mid: "var(--sage-mid)",
          200: "var(--sage-200)",
          100: "var(--sage-100)",
          50: "var(--sage-50)",
        },
        sakura: {
          DEFAULT: "var(--sakura)",
          ink: "var(--sakura-ink)",
           200: "var(--sakura-200)",
          100: "var(--sakura-100)",
        },
        tape: "var(--tape)",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "Cambria", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "708px",      // Notion's default content width
        wide: "980px",      // a "full width" Notion page
      },
      boxShadow: {
        soft: "var(--shadow)",
        lift: "var(--shadow-hi)",
        paper: "-7px 0 26px -10px rgba(20, 30, 18, .22)",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1.05s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
