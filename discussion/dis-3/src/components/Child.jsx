import styled from "styled-components";

export default function Child() {
  return (
    <StyledDiv>
      <StyledHeader>
        I am Youngjin Shin, a computer science major in BU.
      </StyledHeader>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 50%;
  height: 50%;
  background-color: beige;
`;

const StyledHeader = styled.h2`
  color: coral;
`;
