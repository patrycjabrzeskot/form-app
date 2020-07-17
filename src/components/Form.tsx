import { Card, CardContent, Container, TextField } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";
import Title from "./helpers/Title";
import RadioQuestion from "./inputs/Radio";

const Form: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Card
        className="Home-header"
        style={{ backgroundColor: theme.theme.background }}
      >
        <CardContent>
          <h3 style={{ color: theme.theme.text }}>Wypełnij krótką ankietę </h3>
          <form noValidate autoComplete="off">
            <Title number={1} title="Zaznacz swoją płeć" />
            <RadioQuestion value={["Kobieta", "Mężczyzna"]} />
            <Title number={2} title="Ile masz lat?" />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Title number={3} title="Czy interesujesz się sportem?" />
            <Title
              number={4}
              title="Które z wymienionych sportów uprawiasz najczęściej?"
            />
            <Title number={5} title="Jak często uprawiasz sport?" />
            <Title number={6} title="Ile średnio trwa Twój jeden trening?" />
            <Title number={7} title="Gdzie najbardziej lubisz ćwiczyć?" />
            <Title
              number={8}
              title="Jak ważne są dla Ciebie poszczególne aspekty uprawiania sportu?"
            />
            <Title
              number={9}
              title="Czy kiedykolwiek miałeś/aś kontuzję z powodu uprawiania sportu?"
            />
            <Title
              number={10}
              title="Czy kiedykolwiek brałeś udział w zawodach sportowych?"
            />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
