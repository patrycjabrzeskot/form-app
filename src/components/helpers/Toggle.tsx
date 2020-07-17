import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles, FormGroup, FormControlLabel } from "@material-ui/core";
import "../../index.css";
import { ThemeContext } from "../../contexts/theme";

function Toggle() {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const theme = useContext(ThemeContext);

  const ColoredSwitch = withStyles({
    switchBase: {
      color: theme.theme.elements,
      "&$checked": {
        color: theme.theme.elements,
      },
      "&$checked + $track": {
        backgroundColor: theme.theme.elements,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div style={{ float: "right", borderBottom: "none" }}>
      <FormGroup>
        <FormControlLabel
          control={
            <ColoredSwitch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label="Zmień styl"
        />
      </FormGroup>
    </div>
  );
}

export default Toggle;
