import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1B262C',
        'secondary': '#0F4C75',
        'light-blue': '#3282B8',
        'ice': '#BBE1FA',
        'teal': '#00909E',
        'error': '#E11640',
        'green': '#A8DF8E',
        'success': '#1Ba781'
      },
      boxShadow: {
        'center': '0 0px 15px -3px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        '66-160':'66px, 160px',
        'talents': '1fr 32px 1fr'
      }
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      xls: "13px"
    }
  },
  plugins: [],
};
export default config;
