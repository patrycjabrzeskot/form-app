import { Card, CardContent, Container } from "@material-ui/core";
import Toggle from "components/helpers/Toggle";
import { ThemeContext } from "contexts/theme";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
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
              Ups. Ta strona nie istenieje
            </h2>
            <p>
              <Link to="/" style={{ color: theme.theme.title }}>
                Powrót do strony głównej
              </Link>
            </p>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default NotFoundPage;
