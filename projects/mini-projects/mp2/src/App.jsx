import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { styled } from "styled-components";
import axios from "axios";
import CatList from "./components/CatList";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_hhf1mfp2yu3wpI5d5IU8hsWGL6SAxN9Uid7qL54ZV18CafjLoEtXq4K5FtWh0FLN"
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StyledContainer>
      <NavBar title={"Cat Facts"} />
      <StyledSubHeader>Fun Facts</StyledSubHeader>
      <CatList />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledSubHeader = styled.h2`
  font-family: "Protest Guerrilla", sans-serif;
  padding: 0rem 1rem;
`;
