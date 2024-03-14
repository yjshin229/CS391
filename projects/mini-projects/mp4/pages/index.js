import { Exo_2 } from "next/font/google";
import styled from "styled-components";

const exo_2 = Exo_2({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <StyledHeader>HIHI</StyledHeader>
      <StyledHeader>HIHI</StyledHeader>
    </div>
  );
}

const StyledHeader = styled.h1`
  background-color: greenyellow;
`;
