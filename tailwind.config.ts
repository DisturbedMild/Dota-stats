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
        main: "#1B262C",
        secondary: "#0F4C75",
        "light-blue": "#3282B8",
        ice: "#BBE1FA",
        teal: "#00909E",
        error: "#E11640",
        green: "#A8DF8E",
        success: "#1Ba781",
        color_Red_0:"linear-gradient(to right, #993f42, #7c3a48",
        color_Red_1:"linear-gradient(to right, #9a6d5a, #6f463b",
        color_Red_2:"linear-gradient(to right, #904839, #6a3635",
        color_Green_0: "linear-gradient(to right, #93a63b, #608029",
        color_Green_1: "linear-gradient(to right, #73b1a2, #518273",
        color_Green_2: "linear-gradient(to right, #4f7f62, #3e6857",
        color_Green_3: "linear-gradient(to right, #8c9362, #5d6a46",
        color_Green_4: "linear-gradient(to right, #4f7f62, #6f775c",
        color_Yellow_0: "linear-gradient(to right, #bc9756, #986f3f",
        color_Yellow_1: "linear-gradient(to right, #b99754, #866a3a",
        color_Yellow_2: "linear-gradient(to right, #b6ae86, #817759",
        color_Yellow_3: "linear-gradient(to right, #b1998a, #80675b",
        color_Blue_0: "linear-gradient(to right, #6d75aa, #4f5080",
        color_Blue_1: "linear-gradient(to right, #5279a0, #466389",
        color_Blue_2: "linear-gradient(to right, #87a7ac, #5e8182",
        color_Blue_3: "linear-gradient(to right, #61a1ae, #418189",
        color_Purple_0: "linear-gradient(to right, #a66e83, #71486a",
        color_Purple_1: "linear-gradient(to right, #91699b, #674f7c",
        color_Purple_2: "linear-gradient(to right, #655aa6, #433973",
        color_Gray_0: "linear-gradient(to right, #52575c, #3e4147",
        color_Gray_1: "linear-gradient(to right, #64666d, #4c4c53",
        color_Gray_2: "linear-gradient(to right, #899ba3, #657279",
        color_Gray_3: "linear-gradient(to right, #9ea7ae, #757d81"
      },
      boxShadow: {
        center: "0 0px 15px -3px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "66-160": "66px, 160px",
        talents: "1fr 32px 1fr",
      },
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      xls: "13px",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "8xl": "4rem",
    },
  },
  plugins: [],
};
export default config;
