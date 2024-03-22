import Header from "@/components/Header";
import { getServerSideProps as getServerSidePropsQuestions } from "./questions/getQuestions";
import Questions from "./questions/Questions";

export function getServerSideProps(context) {
  return getServerSidePropsQuestions(context);
}

export default function Home(props) {
  return (
    <>
      <Header title={"Community Feed"} isDetailedPage={false} />
      <Questions {...props} />
    </>
  );
}
