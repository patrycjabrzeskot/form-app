import { Card, CardContent, Container } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext, useReducer } from "react";
import Title from "../components/helpers/Title";
import CheckBoxQuestion from "../components/inputs/CheckBox";
import RadioQuestion from "../components/inputs/Radio";
import TextFieldQuestion from "../components/inputs/TextField";

const initialState = {
  gender: "", //
  age: "", //
  isInterested: "", //
  whichSport: [""],
  howOften: "", //
  howLong: "", //
  places: [""],
  mostImportant: [""],
  injury: "", //
  competition: "", //
};

const formActionTypes = {
  updateGender: "UPDATE_GENDER",
  updateAge: "UPDATE_AGE",
  updateIsInterested: "UPDATE_IS_INTERESTED",
  updateWhichSport: "UPDATE_WHICH_SPORT",
  updateHowOften: "UPDATE_HOW_OFTEN",
  updateHowLong: "UPDATE_HOW_LONG",
  updatePlaces: "UPDATE_PLACES",
  updateMostImportant: "UPDATE_MOST_IMPORTANT",
  updateInjury: "UPDATE_INJURY",
  updateCompetition: "UPDATE_COMPETITION",
};

function formReducer(prevState = initialState, action) {
  switch (action.type) {
    case formActionTypes.updateGender:
      return {
        ...prevState,
        name: action.payload,
      };
    case formActionTypes.updateAge:
      return {
        ...prevState,
        age: action.payload,
      };

    case formActionTypes.updateIsInterested:
      return {
        ...prevState,
        isInterested: action.payload,
      };
    case formActionTypes.updateWhichSport:
      return {
        ...prevState,
        whichSport: action.payload,
      };
    case formActionTypes.updateHowOften:
      return {
        ...prevState,
        howOften: action.payload,
      };
    case formActionTypes.updateHowLong:
      return {
        ...prevState,
        howLong: action.payload,
      };
    case formActionTypes.updatePlaces:
      return {
        ...prevState,
        places: action.payload,
      };
    case formActionTypes.updateMostImportant:
      return {
        ...prevState,
        mostImportant: action.payload,
      };
    case formActionTypes.updateInjury:
      return {
        ...prevState,
        injury: action.payload,
      };
    case formActionTypes.updateCompetition:
      return {
        ...prevState,
        competition: action.payload,
      };

    default:
      return prevState;
  }
}
const FormContainer: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [{ gender, age }, dispach] = useReducer(formReducer, initialState);

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
            <RadioQuestion
              options={["Kobieta", "Mężczyzna"]}
              name="gender"
              handleChange={(gender: string) =>
                dispach({
                  type: formActionTypes.updateGender,
                  payload: gender,
                })
              }
            />
            <Title number={2} title="Ile masz lat?" />
            <TextFieldQuestion
              type="number"
              name="age"
              value={age}
              handleChange={(age: string) =>
                dispach({
                  type: formActionTypes.updateAge,
                  payload: age,
                })
              }
            />
            <Title number={3} title="Czy interesujesz się sportem?" />
            <RadioQuestion
              options={[
                "Nie",
                "Tak, uprawiam sport",
                "Tak, jestem kibicem",
                "Tak, kibicuję i uprawiam sport",
              ]}
              name="isInterested"
              handleChange={(isInterested: string) =>
                dispach({
                  type: formActionTypes.updateIsInterested,
                  payload: isInterested,
                })
              }
            />
            <Title
              number={4}
              title="Które z wymienionych sportów uprawiasz najczęściej?"
            />
            <CheckBoxQuestion
              //whichSport
              options={[
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
              options={[
                "1 raz w miesiącu",
                "2 razy w miesiącu",
                "Raz w tygodniu",
                "Kilka razy w tygodniu",
                "Codziennie",
              ]}
              name="howOften"
              handleChange={(howOften: string) =>
                dispach({
                  type: formActionTypes.updateHowOften,
                  payload: howOften,
                })
              }
            />
            <Title number={6} title="Ile średnio trwa Twój jeden trening?" />
            <RadioQuestion
              options={[
                "Mniej niż 30 minut",
                "Mniej niż godzinę",
                "Więcej niż godzinę",
                "Więcej niż dwie godziny",
              ]}
              name="howLong"
              handleChange={(howLong: string) =>
                dispach({
                  type: formActionTypes.updateHowLong,
                  payload: howLong,
                })
              }
            />

            <Title number={7} title="Gdzie najbardziej lubisz ćwiczyć?" />
            <CheckBoxQuestion
              options={[
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
              options={[
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
            <RadioQuestion
              options={["Nie", "Tak. Jaką?"]}
              name="injury"
              handleChange={(injury: string) =>
                dispach({
                  type: formActionTypes.updateInjury,
                  payload: injury,
                })
              }
            />
            <Title
              number={10}
              title="Czy kiedykolwiek brałeś udział w zawodach sportowych?"
            />
            <RadioQuestion
              options={["Tak", "Nie"]}
              name="competition"
              handleChange={(competition: string) =>
                dispach({
                  type: formActionTypes.updateCompetition,
                  payload: competition,
                })
              }
            />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormContainer;
