import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import {
  withStyles,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import "../../index.css";
import { ThemeContext } from "../../contexts/theme";

const Toggle: React.FC = () => {
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
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ float: "right", borderBottom: "none", marginLeft: 7 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <ColoredSwitch
                  checked={state.checkedA}
                  onChange={function (event) {
                    handleChange(event);
                    toggleTheme();
                  }}
                  name="checkedA"
                />
              }
              // label="Przełącz motyw"
              label={
                <Typography style={{ color: theme.text }}>
                  Przełącz motyw
                </Typography>
              }
            />
          </FormGroup>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Toggle;
