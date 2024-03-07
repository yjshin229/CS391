import { useContext } from "react";

import Component2 from "../second-pair/Component2";
import { BackgroundColorContext } from "../second-pair/BackgroundColorContextProvider";
import { styled } from "styled-components";

const Component1 = () => {
  const backgroundColor = useContext(BackgroundColorContext);
  return (
    <StyledDiv backgroundColor={backgroundColor}>
      <Component2 />
    </StyledDiv>
  );
};

export default Component1;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  margin: auto;
  border: coral solid 5px;
  background-color: ${(props) => props.backgroundColor};
`;
