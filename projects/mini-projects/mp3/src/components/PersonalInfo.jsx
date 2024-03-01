import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import myPic from "../assets/YoungjinShin.png";

const PersonalInfo = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const info = await axios.get(
        "https://my-json-server.typicode.com/yjshin229/cs391/personalInfo"
      );
      console.log(info.data);
      setData(info.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderInfo = () => {
    if (!data) {
      return <></>;
    }
    return (
      <StyledInfoContainer>
        <p>
          <span>Name: </span>
          <span>{data.name}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{data.email}</span>
        </p>
        <p>
          <span>Phone: </span>
          <span>{data.phone}</span>
        </p>
        <p>
          <span>Github: </span>
          <span>{data.github}</span>
        </p>
        <p>
          <span>Location: </span>
          <span>{data.location}</span>
        </p>
      </StyledInfoContainer>
    );
  };

  return (
    <StyledContainer>
      <h2>About Me</h2>
      <StyledPicContainer>
        <StyledPicture src={myPic} alt="Profile Picture" />
      </StyledPicContainer>
      {renderInfo()}
    </StyledContainer>
  );
};
export default PersonalInfo;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-style: dashed;
  border-color: #faf0af;
  padding: 1rem 2rem;
  margin-top: 1rem;
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
