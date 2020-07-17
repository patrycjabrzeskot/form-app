import React, { useState } from "react";
import { theme, ThemeContext } from "../contexts/theme";

const ThemeProvider: React.FC = ({ children }) => {
  const [myTheme, setTheme] = useState(theme.dark);
  const myToggleTheme = () => {
    state.theme === theme.dark ? setTheme(theme.light) : setTheme(theme.dark);
  };

  const state = {
    theme: myTheme,
    toggleTheme: myToggleTheme,
  };

  console.log("children");
  console.log(children);
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
