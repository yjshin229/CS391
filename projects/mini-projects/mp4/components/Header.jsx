import { styled } from "styled-components";
import Head from "next/head";
import { MdArrowBackIos } from "react-icons/md";
import PropTypes from "prop-types";

const Header = ({ title, isDetailedPage }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="This is a Community Feed project build with React"
        />
      </Head>
      <HeaderContainer>
        {isDetailedPage && (
          <BackButton href="/">
            <MdArrowBackIos size={"4vw"} />
          </BackButton>
        )}

        <HeaderTitle $isDetailedPage={isDetailedPage}>{title}</HeaderTitle>
      </HeaderContainer>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  isDetailedPage: PropTypes.bool,
};

const HeaderContainer = styled.div`
  display: flex;
  background-color: #c6e17d;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackButton = styled.a`
  position: absolute;
  left: 2rem;
  justify-self: start;
  color: black;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  color: ${(props) => (props.$isDetailedPage ? "black" : "white")};
  font-family: "Kode Mono", monospace;
  font-size: calc(4vw);
`;
