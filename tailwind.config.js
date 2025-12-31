/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb", // example color, same as gray-200
      },
    fontFamily: {
        pretendard: ['"IBM Plex Sans KR"', 'sans-serif'], // or the font you want
      },
  },
  },
  plugins: [],
};
