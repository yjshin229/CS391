import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledDiv>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <StyledText>Youngjin Shin's Portfolio 👾</StyledText>
      </Link>
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
