import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { styled } from "styled-components";
import axios from "axios";

function App() {
  useEffect(() => {}, []);

  return (
    <StyledContainer>
      <NavBar title={"Cat Facts"} />
      <StyledSubHeader>Fun Facts</StyledSubHeader>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledSubHeader = styled.h2`
  font-family: "Protest Guerrilla", sans-serif;
`;

// const Styled
