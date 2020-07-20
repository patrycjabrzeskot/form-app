import { Card, CardContent, Container } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";
import Title from "./helpers/Title";
import CheckBoxQuestion from "./inputs/CheckBox";
import RadioQuestion from "./inputs/Radio";
import TextFieldQuestion from "./inputs/TextField";

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
            <TextFieldQuestion
            // id="standard-number"
            // label="Number"
            // type="number"
            // InputLabelProps={{
            //   shrink: true,
            // }}
            />
            <Title number={3} title="Czy interesujesz się sportem?" />
            <RadioQuestion
              value={[
                "Nie",
                "Tak, uprawiam sport",
                "Tak, jestem kibicem",
                "Tak, kibicuję i uprawiam sport",
              ]}
            />

            <Title
              number={4}
              title="Które z wymienionych sportów uprawiasz najczęściej?"
            />
            <CheckBoxQuestion
              value={[
                "piłka nożna",
                "bieganie",
                "siatkówka",
                "lekkoatletyka",
                "piłka ręczna",
                "koszykówka",
                "gimnastyka artystyczna",
                "narciarstwo",
                "tenis",
                "pływanie",
                "łyżwiarstwo",
                "taniec",
                "inne: jakie? ",
              ]}
            />
            <Title number={5} title="Jak często uprawiasz sport?" />
            <RadioQuestion
              value={[
                "1 raz w miesiącu",
                "2 razy w miesiącu",
                "Raz w tygodniu",
                "Kilka razy w tygodniu",
                "Codziennie",
              ]}
            />
            <Title number={6} title="Ile średnio trwa Twój jeden trening?" />
            <RadioQuestion
              value={[
                "Mniej niż 30 minut",
                "Mniej niż godzinę",
                "Więcej niż godzinę",
                "Więcej niż dwie godziny",
              ]}
            />

            <Title number={7} title="Gdzie najbardziej lubisz ćwiczyć?" />
            <CheckBoxQuestion
              value={[
                "na świeżym powietrzu",
                "na siłowni",
                "w domu",
                "jest to mi obojętne",
              ]}
            />

            <Title
              number={8}
              title="Które aspekty uprawiania sportu są dla Ciebie najważniejsze?"
            />
            <CheckBoxQuestion
              value={[
                "możliwość zrzucenia wagi",
                "możliwość wyrzeźbienia sylwetki",
                "zachowanie zdrowia",
                "poprawa kondycji",
                "sposób na spędzenie wolnego czasu",
                "sposób na relaks",
                "możliwość poznania nowych ludzi",
              ]}
            />
            <Title
              number={9}
              title="Czy kiedykolwiek miałeś/aś kontuzję z powodu uprawiania sportu?"
            />
            <RadioQuestion value={["Nie", "Tak. Jaką?"]} />
            <Title
              number={10}
              title="Czy kiedykolwiek brałeś udział w zawodach sportowych?"
            />
            <RadioQuestion value={["Tak", "Nie"]} />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
