import Header from "./components/Header";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import ProjectScreen from "./screens/ProjectScreen";
import MainScreen from "./screens/MainScreen";

export const basePath =
  process.env.NODE_ENV === "production"
    ? "/cs391/projects/mini-projects/mp3/dist"
    : "";

function App() {
  return (
    <>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path={`${basePath}/`} element={<MainScreen />} />
          <Route path={`${basePath}/projects`} element={<ProjectScreen />} />
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
