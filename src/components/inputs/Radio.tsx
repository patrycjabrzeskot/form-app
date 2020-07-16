import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioQuestion(props) {
  const [value, setValue] = React.useState("Female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  console.log(props);
  return (
    <FormControl component="fieldset">
      <RadioGroup
        // aria-label="gender"
        // name="gender1"
        value={value}
        onChange={handleChange}
      >
        {props.value.map((item) => (
          <FormControlLabel value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
