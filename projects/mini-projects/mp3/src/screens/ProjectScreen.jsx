import styled from "styled-components";
import Projects from "../components/Projects";

const ProjectScreen = () => {
  return (
    <StyledContainer>
      <h2>Projects</h2>
      <Projects />
    </StyledContainer>
  );
};

export default ProjectScreen;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;
