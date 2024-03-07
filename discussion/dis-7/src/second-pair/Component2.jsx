import { useContext } from "react";
import { TextColorContext } from "../first-pair/TextColorContextProvider";
import { styled } from "styled-components";

const Component2 = () => {
  const color = useContext(TextColorContext);
  return <StyledH3 color={color}>Youngjin Shin</StyledH3>;
};

const StyledH3 = styled.h3`
  font-style: italic;
  color: ${(props) => props.color};
`;
export default Component2;
