import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography, withStyles } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";

interface RadioProps {
  value: string[];
}
function RadioQuestion(props: RadioProps) {
  const [value, setValue] = React.useState("Female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  console.log(props);
  const theme = useContext(ThemeContext);

  const ColoredRadio = withStyles({
    root: {
      color: theme.theme.elements,
      "&$checked": {
        color: theme.theme.elements,
      },
    },
    checked: {},
    // })((props: RadioProps) => <Radio color="default" {...props} />);
  })(Radio);

  return (
    <FormControl component="fieldset">
      <RadioGroup value={value} onChange={handleChange}>
        {props.value.map((item) => (
          <FormControlLabel
            value={item}
            control={<ColoredRadio />}
            label={
              <Typography style={{ color: theme.theme.text }}>
                {item}
              </Typography>
            }
            color="white"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioQuestion;
