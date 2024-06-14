/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-universe":"url('/images/unrse.jpg')",
        "image-pastel":"url('/images/pastel.png')",
      },
      fontFamily:{
        alegreya: ['Alegreya Sans SC', 'sans-serif'],
        noto: ['Noto Serif Sinhala', 'serif'],
      },
      colors:{
        lilac: 'rgba(234, 194, 241, 0.226)'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  
};
