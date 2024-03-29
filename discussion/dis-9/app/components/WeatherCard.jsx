import { styled } from "styled-components";

const WeatherCard = ({ weather }) => {
  return (
    <WeatherCardWrapper>
      <h2>{weather.datetime}</h2>
      <h2>{weather.conditions}</h2>
      <h2>{weather.description}</h2>
      <h2>
        {weather.tempmin} - {weather.tempmax}
      </h2>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border: 1px solid white;
  margin: 1rem;
  width: 200px;
  border-radius: 10px;
`;
