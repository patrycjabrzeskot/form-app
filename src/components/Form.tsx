import { Card, CardContent, Container } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";
import Title from "./helpers/Title";
import RadioQuestion from "./inputs/Radio";

const Form = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Card
        className="Home-header"
        style={{ backgroundColor: theme.theme.background }}
      >
        <CardContent>
          <h3 style={{ color: theme.theme.text }}>Wypełnij krótką ankietę </h3>
          {/* <p>Odpowiedz na kilka pytań</p> */}
        </CardContent>
        <CardContent>
          <Title number={1} title="Zaznacz swoją płeć" />
          <RadioQuestion value={["Kobieta", "Mężczyzna"]} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
