import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CatList = () => {
  const [facts, setFacts] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_hhf1mfp2yu3wpI5d5IU8hsWGL6SAxN9Uid7qL54ZV18CafjLoEtXq4K5FtWh0FLN"
      )
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderInfo = (items) => {
    return (
      <StyledGrid>
        {items.map((item) => (
          <div key={item.id}>
            <StyledWhiteBox>
              <StyledImg src={item.url} alt={`Cat img id: ${item.id}`} />
            </StyledWhiteBox>
            <StyledInfoContainer>
              <StyledInfoTitle>Breed: </StyledInfoTitle>
              <span>
                {item.breeds[0]?.name ? item.breeds[0]?.name : "Unknown"}
              </span>
            </StyledInfoContainer>

            <StyledInfoTitle>Description:</StyledInfoTitle>
            <StyledDescription>
              <span>
                {item.breeds[0]?.description
                  ? item.breeds[0]?.description
                  : "N/A"}
              </span>
            </StyledDescription>
          </div>
        ))}
      </StyledGrid>
    );
  };

  return (
    <StyledContainer>
      <StyledHeader>Cats</StyledHeader>
      {renderInfo(info)}
    </StyledContainer>
  );
};

export default CatList;

const StyledContainer = styled.div`
  background-color: #cdcdcd;
  padding: 1rem 1rem;
`;

const StyledGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
  height: auto;
  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr 1fr;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
    width: auto;
    height: auto;
  }
`;

const StyledImg = styled.img`
  top: 0;
  left: 0;
  object-fit: contain;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledWhiteBox = styled.div`
  display: flex;
  background: white;
  width: 18rem;
  height: 18rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const StyledInfoContainer = styled.p`
  display: flex;
`;

const StyledInfoTitle = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;

const StyledDescription = styled.div`
  height: 5.5rem;
  width: 18rem;
  overflow: scroll;
  margin-top: 1rem;
`;

const StyledHeader = styled.h3`
  font-family: "Protest Guerrilla", sans-serif;
  padding: 0rem 1rem;
`;
