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

  return renderInfo();
};
export default PersonalInfo;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-style: dashed;
  border-color: #faf0af;
  padding: 1rem 2rem;
  margin-top: 1rem;
`;
