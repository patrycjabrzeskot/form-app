import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography, withStyles } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";

interface RadioProps {
  options: string[];
  name: string;
  handleChange: (change: string) => void;
}
function RadioQuestion(props: RadioProps) {
  const theme = useContext(ThemeContext);

  const ColoredRadio = withStyles({
    root: {
      color: theme.theme.elements,
      "&$checked": {
        color: theme.theme.elements,
      },
    },
    checked: {},
  })(Radio);

  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={(event) => props.handleChange(event.target.value)}>
        {props.options.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            name={props.name}
            control={<ColoredRadio />}
            label={
              <Typography style={{ color: theme.theme.text }}>
                {item}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioQuestion;
