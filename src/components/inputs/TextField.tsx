import React, { useContext } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { ThemeContext } from "contexts/theme";

const TextFieldQuestion: React.FC = () => {
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
      "&.MuiInputBase-input": {
        color: "white",
      },
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
        className={classes.margin}
        id="custom-css-standard-input"
        inputProps={{
          className: classes.input,
        }}
        type="number"
      />
    </form>
  );
};

export default TextFieldQuestion;
