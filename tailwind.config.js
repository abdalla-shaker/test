/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "hsl(61, 70%, 52%)",
      },
      borderRadius: {
        "12xl": "120px",
      },
    },
  },
  plugins: [],
};
