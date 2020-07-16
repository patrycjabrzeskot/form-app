import { Container } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Toggle from "../components/Toggle";

function Home() {
  return (
    <>
      <Container>
        <Toggle />

        <div className="Home-header">
          <h3>Wypełnij krótką ankietę </h3>
        </div>
      </Container>
    </>
  );
}

export default Home;
