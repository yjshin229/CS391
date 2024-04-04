"use client";
import styled from "styled-components";

const Header = ({ subTitle }) => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <h1>Hotel Reviews</h1>
      </StyledHeader>

      <StyledNavBar>
        <h2>somethijflsdj'ajd</h2>
      </StyledNavBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Kode Mono", monospace;
`;

const StyledHeader = styled.div`
  background-color: royalblue;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding-block: 2rem;
  color: white;
`;

const StyledNavBar = styled.div`
  background-color: cornflowerblue;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  padding-block: 1rem;
`;
