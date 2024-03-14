import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'ProximaNova-Regular';
    src: url('/fonts/ProximaNova-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'ProximaNova-Bold';
    src: url('/fonts/ProximaNova-Bold.woff') format('woff');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
