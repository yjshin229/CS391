import { styled } from "styled-components";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Community Feed</title>
        <meta
          name="description"
          content="This is a Community Feed project build with React"
        />
      </Head>
      <HeaderContainer>
        <HeaderTitle>Community Feed</HeaderTitle>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c6e17d;
  padding: 1rem;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: white;
  font-family: "Kode Mono", monospace;
  font-size: calc(2vw + 2vh);
`;
