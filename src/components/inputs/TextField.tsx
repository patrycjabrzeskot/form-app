// import React, { useContext } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import { ThemeContext } from "contexts/theme";
// import { TextField, Typography } from "@material-ui/core";

// function TextFieldQuestion(props) {
//   const theme = useContext(ThemeContext);

//   const ColoredTextField = withStyles({
//     // root: {
//     //   color: "white",
//     // },
//     // input: {
//     //   color: "white",
//     // },
//   })(TextField);

//   return (
//     <ColoredTextField
//       type="number"
//       //   className={classes.root}
//       InputProps={{
//         className: theme.theme.text,
//       }}
//     />
//   );
// }

// export default TextFieldQuestion;

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
      // "& label.Mui-focused": {
      //   color: theme.theme.text,
      // },
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
