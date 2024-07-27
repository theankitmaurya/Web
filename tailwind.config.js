/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'custom': 'calc(33.33% - 10px)',
      },
      colors: {
        yellow: '#fffc54',
        grey: '#282828',
        green: '#52b788',
        blue: '#6cb8ff',
        white: '#ffffff',
        darkGrey: '#1a1a1a',
        lessWhite: '#fafafa',
        hrColor: '#000000',
        tagColor: '#828282',
      },
    },
  },
  plugins: [],
};
