import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import { basePath } from "../App";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <StyledDiv>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <StyledText>Youngjin Shin's Portfolio 👾</StyledText>
        </Link>
        <TiThMenuOutline size={24} onClick={toggleMenu} />
      </StyledDiv>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledMenuContainer style={{ display: isOpen ? "flex" : "none" }}>
      <StyledMenu onClick={toggleMenu}>
        <StyledLink to={`${basePath}/`}>Home</StyledLink>
      </StyledMenu>
      <StyledMenu onClick={toggleMenu}>
        <StyledLink to={`${basePath}/projects`}>Projects</StyledLink>
      </StyledMenu>
    </StyledMenuContainer>
  );
};

export default Header;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #b58dca;
  padding: 0.2rem 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.h1`
  font-family: "Kode Mono", monospace;
  color: #474747;
`;

const StyledMenuContainer = styled.ul`
  font-family: "Kode Mono", monospace;
  flex-direction: column;
  background-color: beige;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  list-style-type: none;
  width: 200px;
  margin: 0;
  padding: 0;
`;

const StyledMenu = styled.li`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #faf0af;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem 0rem;
`;
