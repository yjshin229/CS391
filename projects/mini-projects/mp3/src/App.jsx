import { useState } from "react";
import Header from "./components/Header";
import { styled } from "styled-components";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <StyledContainer>
      <Header />
      <PersonalInfo />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
`;
