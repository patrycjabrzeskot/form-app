import React, { useState } from "react";
import "./Home.css";
import Toggle from "../components/helpers/Toggle";
import { theme, ThemeContext } from "../contexts/theme";
import Form from "../components/Form";

function Home() {
  const [myTheme, setTheme] = useState(theme.dark);
  const myToggleTheme = () => {
    state.theme === theme.dark ? setTheme(theme.light) : setTheme(theme.dark);
  };

  const state = {
    theme: myTheme,
    toggleTheme: myToggleTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={state}>
        <Toggle />
        <Form />
      </ThemeContext.Provider>
    </>
  );
}

export default Home;
