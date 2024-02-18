import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CatFact = () => {
  useEffect(() => {
    getFacts();
  }, []);

  const [fact, setFact] = useState();
  const getFacts = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        setFact(response.data.fact);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StyledFactContainer>
      <StyledFunFact>Fun Fact:</StyledFunFact>
      <span>{fact}</span>
    </StyledFactContainer>
  );
};

export default CatFact;

const StyledFactContainer = styled.div`
  display: flex;
  padding: 0rem 2rem;
  align-items: center;
`;

const StyledFunFact = styled.h2`
  font-family: "Protest Guerrilla", sans-serif;
  margin-right: 1rem;
`;
