import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

interface TitleProps {
  number: number;
  title: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p style={{ color: theme.theme.title, fontWeight: "bold" }}>
        {props.number}. {props.title}
      </p>
    </>
  );
};

export default Title;
