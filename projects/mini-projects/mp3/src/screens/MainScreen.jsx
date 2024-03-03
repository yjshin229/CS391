import styled from "styled-components";
import PersonalInfo from "../components/PersonalInfo";
import myPic from "../assets/YoungjinShin.png";

const MainScreen = () => {
  return (
    <StyledContainer>
      <h2>About Me</h2>
      <StyledPicContainer>
        <StyledPicture src={myPic} alt="Profile Picture" />
      </StyledPicContainer>
      <PersonalInfo />
    </StyledContainer>
  );
};

export default MainScreen;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;
const StyledPicContainer = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 100rem;
  height: 10rem;
  width: 10rem;
  margin-top: 1rem;
`;

const StyledPicture = styled.img`
  object-fit: cover;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
