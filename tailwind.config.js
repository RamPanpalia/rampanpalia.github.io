/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        card: "#131A22",
        accent: "#3B82F6",
        success: "#22C55E",
        ink: "#F8FAFC",
        muted: "#94A3B8",
        line: "#1E293B",
      },
      fontFamily: {
        sans: ["Geist", "IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
