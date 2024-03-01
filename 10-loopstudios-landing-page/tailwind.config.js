/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        heroPattern: "url('src/assets/images/mobile/image-hero.jpg')",
      },
      textColor: {
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
};
