/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'custom': 'calc(33.33% - 10px)',
      },
      translate: {
        '-1/2': '-50%',
      }
    },
  },
  plugins: [],
};
