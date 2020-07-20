import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { ThemeContext } from "contexts/theme";
import { Typography } from "@material-ui/core";

interface CheckBoxProps {
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

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      {props.value.map((item) => (
        <FormControlLabel
          style={{ width: "24%" }}
          control={
            <StyledCheckbox
              checked={state.checkedA}
              onChange={handleChange}
              name={"checked" + item}
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
