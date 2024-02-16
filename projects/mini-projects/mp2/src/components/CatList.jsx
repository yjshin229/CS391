import { useState } from "react";
import axios from "axios";

const CatList = () => {
  const [facts, setFacts] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getFacts = () => {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://catfact.ninja/fact")
        .then((response) => {
          setFacts([...facts, response.data.fact]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const getInfo = () => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_hhf1mfp2yu3wpI5d5IU8hsWGL6SAxN9Uid7qL54ZV18CafjLoEtXq4K5FtWh0FLN"
      )
      .then((response) => {
        console.log(response);
        setInfo(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <StyledDiv></StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: green;
  padding: 1rem 1rem;
`;
