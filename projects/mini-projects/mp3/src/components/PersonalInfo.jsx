import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
    console.log(data);
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
          <span>{data.boston}</span>
        </p>
      </StyledInfoContainer>
    );
  };

  return (
    <StyledContainer>
      <StyledTitle>About Me</StyledTitle>
      <img src="./assets/document.png" alt="Profile Picture" />
      <p>HElloooo</p>
      <p>HElloooo</p>
      <p>HElloooo</p>
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

const StyledTitle = styled.h3`
  font-family: "Kode Mono", monospace;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Kode Mono", monospace;
`;
