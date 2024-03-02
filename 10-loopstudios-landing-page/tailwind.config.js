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
        deepEarth: "url('/src/assets/images/mobile/image-deep-earth.jpg')",
        nightArcade: "url('/src/assets/images/mobile/image-night-arcade.jpg')",
        soccerTeam: "url('/src/assets/images/mobile/image-soccer-team.jpg')",
        theGrid: "url('/src/assets/images/mobile/image-grid.jpg')",
        fromAbove: "url('/src/assets/images/mobile/image-from-above.jpg')",
        pocketBorealis:
          "url('/src/assets/images/mobile/image-pocket-borealis.jpg')",
        theCuriosity: "url('/src/assets/images/mobile/image-curiosity.jpg')",
        fisheye: "url('/src/assets/images/mobile/image-fisheye.jpg')",
      },
      textColor: {
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
};
