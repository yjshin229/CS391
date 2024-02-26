import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledDiv>
      <StyledText>Youngjin Shin's Portfolio 👾</StyledText>
    </StyledDiv>
  );
};

export default Header;

const StyledDiv = styled.div`
  display: flex;
  background-color: #b58dca;
  padding: 0.2rem 1rem;
  justify-content: center;
`;

const StyledText = styled.h1`
  font-family: "Kode Mono", monospace;
  color: #474747;
`;
