import React from "react";

export const theme = {
  light: {
    text: "black",
    title: "#8ec6c5",
    elements: "#6983aa",
    background: "#f4f4f4",
  },
  dark: {
    text: "white",
    title: "#A49BE1",
    elements: "#8D5BB4",
    background: "#4d4d4d",
  },
};

export const ThemeContext = React.createContext({
  theme: theme.light,
  toggleTheme: () => {},
});
