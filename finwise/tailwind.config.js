/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "finwise-green": "#00D09E",
        "finwise-white": "#F1FFF3",
        "input-bg": "#DFF7E2",
      },
    },
  },
  plugins: [],
}

