import Header from "@/components/Header";
import styled from "styled-components";
import { getServerSideProps as getServerSidePropsQuestions } from "../pages/api/questions";
import Questions from "../components/Questions";

export function getServerSideProps(context) {
  return getServerSidePropsQuestions(context);
}

export default function Home(props) {
  return (
    <>
      <Header />
      <Questions {...props} />
    </>
  );
}

const QuestionContainer = styled.div`
  font-family: "Kode Mono", monospace;
  display: flex;
  flex-direction: column;
  margin-inline: calc(5vw);
  margin-block: calc(2vh);
  background-color: red;
  height: 100vh;
`;
