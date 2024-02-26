import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <StyledContainer>
      <StyledTitle>About Me</StyledTitle>
      <p>HElloooo</p>
      <p>HElloooo</p>
      <p>HElloooo</p>
    </StyledContainer>
  );
};

export default PersonalInfo;

const StyledContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h3`
  font-family: "Kode Mono", monospace;
`;
