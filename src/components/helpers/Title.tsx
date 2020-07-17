import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

function Title(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p style={{ color: theme.theme.title, fontWeight: "bold" }}>
        {props.number}. {props.title}
      </p>
    </>
  );
}

export default Title;
