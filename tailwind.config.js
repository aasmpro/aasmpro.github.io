module.exports = {
  content: [
    "./src/data/*.js",
    "./src/views/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/Main.jsx",
    "./src/index.js",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      dark: {
        0: "#1d2021",
        1: "#282828",
        2: "#32302f",
        3: "#3c3836",
        4: "#504945",
        5: "#665c54",
      },
      light: {
        0: "#f9f5d7",
        1: "#fbf1c7",
        2: "#f2e5bc",
        3: "#ebdbb2",
        4: "#d5c4a1",
        5: "#bdae93",
      },
      gray: {
        0: "#7c6f64",
        1: "#928374",
        2: "#a89984",
      },
      red: {
        0: "#9d0006",
        1: "#cc241d",
        2: "#fb4934",
      },
      green: {
        0: "#79740e",
        1: "#98971a",
        2: "#b8bb26",
      },
      yellow: {
        0: "#b57614",
        1: "#d79921",
        2: "#fabd2f",
      },
      blue: {
        0: "#076678",
        1: "#458588",
        2: "#83a598",
      },
      purple: {
        0: "#8f3f71",
        1: "#b16286",
        2: "#d3869b",
      },
      aqua: {
        0: "#427b58",
        1: "#689d6a",
        2: "#8ec07c",
      },
      orange: {
        0: "#af3a03",
        1: "#d65d0e",
        2: "#fe8019",
      },
    },
    extend: {
      fontFamily: {
        JBM: ["JBM"],
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
