import {
  Card,
  CardContent,
  Container,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Toggle from "components/helpers/Toggle";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";
import List from "@material-ui/core/List";

const Summary: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Toggle />

      <Container>
        <Card
          className="Home-header"
          style={{ backgroundColor: theme.theme.background }}
        >
          <CardContent>
            <h2 style={{ color: theme.theme.text }}>
              Dziękujemy za wypełnienie ankiety!
            </h2>
            <h4 style={{ color: theme.theme.text }}>Twoje odpowiedzi: </h4>
            <List>
              <ListItem>
                <p style={{ color: theme.theme.title }}>1. Płeć : </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>2. Wiek : </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  3. Czy interesujesz się sportem? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  4. Które z wymienionych sportów uprawiasz najczęściej? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  5. Jak często uprawiasz sport? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  6. Ile średnio trwa Twój jeden trening? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  7. Gdzie najbardziej lubisz ćwiczyć? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  8. Które aspekty uprawiania sportu są dla Ciebie
                  najważniejsze? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  9. Czy kiedykolwiek miałeś/aś kontuzję z powodu uprawiania
                  sportu? :
                </p>
              </ListItem>
              <ListItem>
                <p style={{ color: theme.theme.title }}>
                  10. Czy kiedykolwiek brałeś udział w zawodach sportowych? :
                </p>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Summary;
