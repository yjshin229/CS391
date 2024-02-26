import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <StyledContainer>
      <p>HElloooo</p>
      <p>HElloooo</p>
      <p>HElloooo</p>

      <span>HElloooo</span>
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
