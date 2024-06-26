/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '815px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        primary: '#f13a01',
        
          'magenta': '#C035A2',
        
      },
    },
  },
  plugins: [],
};
