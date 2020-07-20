import React from "react";
import "./Home.css";
import Toggle from "../components/helpers/Toggle";
import FormContainer from "../containers/FormContainer";

const Home: React.FC = () => {
  return (
    <>
      <Toggle />
      <FormContainer />
    </>
  );
};

export default Home;
