import React from "react";
import Switch from "@material-ui/core/Switch";
import { TableRow, TableCell } from "@material-ui/core";
import "../index.css";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{ float: "right", borderBottom: "none" }}>
      <TableRow>
        <TableCell>
          <p>Zmień styl</p>
        </TableCell>
        <TableCell align="right">
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </TableCell>
      </TableRow>

      {/* <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch inputProps={{ "aria-label": "primary checkbox" }} /> */}
    </div>
  );
}
