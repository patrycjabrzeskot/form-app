import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { ThemeContext } from "contexts/theme";
import { Typography } from "@material-ui/core";

interface CheckBoxProps {
  options: string[];
  name: string;
  handleChange: (change: string) => void;
  value: string[];
}

const CheckBoxQuestion: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const theme = useContext(ThemeContext);
  const StyledCheckbox = withStyles({
    root: {
      color: theme.theme.elements,
      "&$checked": {
        color: theme.theme.elements,
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  return (
    <FormGroup row>
      {props.options.map((item) => (
        <FormControlLabel
          key={item}
          style={{ width: "24%" }}
          control={
            <StyledCheckbox
              onChange={(event) => props.handleChange(item)}
              name={props.name + item}
              checked={props.value.includes(item)}
            />
          }
          label={
            <Typography style={{ color: theme.theme.text }}>{item}</Typography>
          }
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxQuestion;
