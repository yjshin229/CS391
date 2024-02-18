import { styled } from "styled-components";

const NavBar = ({ title }) => {
  return (
    <StyledNav>
      <StyledHeader>{title}</StyledHeader>
    </StyledNav>
  );
};
export default NavBar;

const StyledNav = styled.nav`
  background-color: #df8321;
  padding: 0rem 2rem;
`;

const StyledHeader = styled.h1`
  color: white;
  font-family: "Protest Guerrilla", sans-serif;
  font-size: 42px;
`;
