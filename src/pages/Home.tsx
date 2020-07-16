import { Container, Card, CardContent } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Toggle from "../components/helpers/Toggle";
import Title from "../components/helpers/Title";

import RadioQuestion from "components/inputs/Radio";

function Home() {
  return (
    <>
      <Toggle />

      <Container>
        <Card className="Home-header">
          <CardContent>
            <h3>Wypełnij krótką ankietę </h3>
            {/* <p>Odpowiedz na kilka pytań</p> */}
          </CardContent>
          <CardContent>
            <Title number={1} title="Zaznacz swoją płeć" />
            <RadioQuestion value={["Kobieta", "Mężczyzna"]} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Home;
