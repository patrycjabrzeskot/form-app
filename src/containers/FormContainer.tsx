import { Card, CardContent, Container } from "@material-ui/core";
import { ThemeContext } from "contexts/theme";
import React, { useContext, useReducer } from "react";
import Title from "../components/helpers/Title";
import CheckBoxQuestion from "../components/inputs/CheckBox";
import RadioQuestion from "../components/inputs/Radio";
import TextFieldQuestion from "../components/inputs/TextField";
import StyledButton from "../components/inputs/StyledButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialState = {
  gender: "",
  age: "",
  isInterested: "",
  whichSport: [""],
  howOften: "",
  howLong: "",
  places: [""],
  mostImportant: [""],
  injury: "",
  competition: "",
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
        gender: action.payload,
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
      var updatedSports = [...prevState.whichSport];
      if (updatedSports.includes(action.payload)) {
        var index = prevState.whichSport.indexOf(action.payload);
        updatedSports.splice(index, 1);
      } else {
        updatedSports.push(action.payload);
      }
      return {
        ...prevState,
        whichSport: updatedSports,
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
      var updatedPlaces = [...prevState.places];
      if (updatedPlaces.includes(action.payload)) {
        var index = prevState.places.indexOf(action.payload);
        updatedPlaces.splice(index, 1);
      } else {
        updatedPlaces.push(action.payload);
      }
      return {
        ...prevState,
        places: updatedPlaces,
      };
    case formActionTypes.updateMostImportant:
      var updatedMostImportant = [...prevState.mostImportant];
      if (updatedMostImportant.includes(action.payload)) {
        var index = prevState.mostImportant.indexOf(action.payload);
        updatedMostImportant.splice(index, 1);
      } else {
        updatedMostImportant.push(action.payload);
      }
      return {
        ...prevState,
        mostImportant: updatedMostImportant,
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
const FormContainer: React.FC = (props) => {
  const theme = useContext(ThemeContext);
  let history = useHistory();

  const [
    {
      gender,
      age,
      isInterested,
      whichSport,
      howOften,
      howLong,
      places,
      mostImportant,
      injury,
      competition,
    },
    dispach,
  ] = useReducer(formReducer, initialState);

  const FormSchema = Yup.object().shape({
    gender: Yup.string().required("To pole jest wymagane"),
    age: Yup.string().required("To pole jest wymagane. Wpisz liczbę"),
    isInterested: Yup.string().required("To pole jest wymagane"),
    whichSport: Yup.array()
      .required("To pole jest wymagane")
      .min(2, "Zaznacz co najmniej jedną opcję"),
    howOften: Yup.string().required("To pole jest wymagane"),
    howLong: Yup.string().required("To pole jest wymagane"),
    places: Yup.array()
      .required("To pole jest wymagane")
      .min(2, "Zaznacz co najmniej jedną opcję"),
    mostImportant: Yup.array()
      .required("To pole jest wymagane")
      .min(2, "Zaznacz co najmniej jedną opcję"),
    injury: Yup.string().required("To pole jest wymagane"),
    competition: Yup.string().required("To pole jest wymagane"),
  });

  return (
    <Container>
      <Card
        className="Home-header"
        style={{ backgroundColor: theme.theme.background }}
      >
        <CardContent>
          <h3 style={{ color: theme.theme.text }}>Wypełnij krótką ankietę </h3>
          <Formik
            enableReinitialize
            initialValues={{
              gender,
              age,
              isInterested,
              whichSport,
              howOften,
              howLong,
              places,
              mostImportant,
              injury,
              competition,
            }}
            validationSchema={FormSchema}
            onSubmit={(values) => {
              console.log(values);
              console.log(props);
              history.push("/summary");
            }}
          >
            {({ errors, touched }) => (
              <Form>
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
                {errors.gender && touched.gender ? (
                  <div style={{ color: "red" }}>{errors.gender}</div>
                ) : null}
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
                {errors.age && touched.age ? (
                  <div style={{ color: "red" }}>{errors.age}</div>
                ) : null}
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
                {errors.isInterested && touched.isInterested ? (
                  <div style={{ color: "red" }}>{errors.isInterested}</div>
                ) : null}
                <Title
                  number={4}
                  title="Które z wymienionych sportów uprawiasz najczęściej?"
                />
                <CheckBoxQuestion
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
                  ]}
                  name="whichSport"
                  value={whichSport}
                  handleChange={(newSport: string) => {
                    dispach({
                      type: formActionTypes.updateWhichSport,
                      payload: newSport,
                    });
                  }}
                />
                {errors.whichSport && touched.whichSport ? (
                  <div style={{ color: "red" }}>{errors.whichSport}</div>
                ) : null}
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
                {errors.howOften && touched.howOften ? (
                  <div style={{ color: "red" }}>{errors.howOften}</div>
                ) : null}
                <Title
                  number={6}
                  title="Ile średnio trwa Twój jeden trening?"
                />
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
                {errors.howLong && touched.howLong ? (
                  <div style={{ color: "red" }}>{errors.howLong}</div>
                ) : null}
                <Title number={7} title="Gdzie najbardziej lubisz ćwiczyć?" />
                <CheckBoxQuestion
                  options={[
                    "na świeżym powietrzu",
                    "na siłowni",
                    "w domu",
                    "jest to mi obojętne",
                  ]}
                  name="places"
                  value={places}
                  handleChange={(newPlace: string) => {
                    dispach({
                      type: formActionTypes.updatePlaces,
                      payload: newPlace,
                    });
                  }}
                />
                {errors.places && touched.places ? (
                  <div style={{ color: "red" }}>{errors.places}</div>
                ) : null}
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
                  name="mostImportant"
                  value={mostImportant}
                  handleChange={(newImportant: string) => {
                    dispach({
                      type: formActionTypes.updateMostImportant,
                      payload: newImportant,
                    });
                  }}
                />
                {errors.mostImportant && touched.mostImportant ? (
                  <div style={{ color: "red" }}>{errors.mostImportant}</div>
                ) : null}
                <Title
                  number={9}
                  title="Czy kiedykolwiek miałeś/aś kontuzję z powodu uprawiania sportu?"
                />
                <RadioQuestion
                  options={["Tak", "Nie"]}
                  name="injury"
                  handleChange={(injury: string) =>
                    dispach({
                      type: formActionTypes.updateInjury,
                      payload: injury,
                    })
                  }
                />
                {errors.injury && touched.injury ? (
                  <div style={{ color: "red" }}>{errors.injury}</div>
                ) : null}
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
                {errors.competition && touched.competition ? (
                  <div style={{ color: "red" }}>{errors.competition}</div>
                ) : null}
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "40%",
                  }}
                >
                  <StyledButton text="OK" />
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormContainer;
