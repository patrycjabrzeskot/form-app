import React, { useContext } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "contexts/theme";

interface TextFieldProps {
  type: string;
  name: string;
  handleChange: (age: string) => void;
  value: string;
}
const TextFieldQuestion: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const theme = useContext(ThemeContext);

  const useStyles = makeStyles((themes: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
      },
      input: { color: theme.theme.text },
      margin: {
        margin: themes.spacing(1),
      },
    })
  );

  const ColoredTextField = withStyles({
    root: {
      "& .MuiInput-underline:after": {
        borderBottomColor: theme.theme.elements,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
        "&:hover fieldset": {
          borderColor: theme.theme.elements,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.theme.elements,
        },
      },
      input: {
        "&.MuiInputBase-input": {
          color: theme.theme.text,
        },
      },
    },
  })(TextField);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ColoredTextField
        inputProps={{
          className: classes.input,
        }}
        className={classes.margin}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={(event) => props.handleChange(event.target.value)}
      />
    </form>
  );
};

export default TextFieldQuestion;
