import { useState } from "react";
import Header from "./components/Header";
import { styled } from "styled-components";
import PersonalInfo from "./components/PersonalInfo";
import { Route, Routes } from "react-router-dom";
import ProjectScreen from "./screens/ProjectScreen";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path="*" Component={MainScreen} />
          <Route path="/projects" Component={ProjectScreen} />
        </Routes>
      </StyledContainer>
    </>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Kode Mono", monospace;
  margin-top: 2rem;
`;
