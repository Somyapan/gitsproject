/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 33.33%": { backgroundColor: "#1ebb24" },
          "33.33%, 66.66%": { backgroundColor: "#0c354a" },
          "66.66%, 100%": { backgroundColor: "#fe6b04" },
        },
      },
      animation: {
        "blink-link": "blink 1s ease infinite",
      },
    },
  },
  plugins: [],
};
