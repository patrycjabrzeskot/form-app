import { Button, withStyles } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";

interface ButtonProps {
  text: string;
}
const StyledButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const ColorButton = withStyles(() => ({
    root: {
      color: theme.theme.text,
      backgroundColor: theme.theme.title,
      "&:hover": {
        backgroundColor: theme.theme.elements,
      },
    },
  }))(Button);

  return (
    <div>
      <ColorButton variant="contained" type="submit">
        {props.text}
      </ColorButton>
    </div>
  );
};

export default StyledButton;
