import styled from "styled-components";
import jumpingCat from "../assets/jumpingCat.png";

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledImg src={jumpingCat} />
      <p>Loading ...</p>
    </StyledLoadingContainer>
  );
};

export default Loading;

const StyledLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  top: 0;
  left: 0;
  object-fit: contain;
  width: 300px;
  display: flex;
  align-items: center;
`;
