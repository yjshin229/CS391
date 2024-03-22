import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import styled from "styled-components";
import QuestionCard from "../../components/QuestionCard";

const QuestionDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        // Fetch question
        const questionResponse = await fetch(
          `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
        );
        const questionData = await questionResponse.json();
        console.log(questionData);

        // Fetch related questions
        const relatedResponse = await fetch(
          `https://api.stackexchange.com/2.2/questions/${id}/related?site=stackoverflow`
        );
        const relatedData = await relatedResponse.json();

        if (questionData && relatedData) {
          setQuestion(questionData.items[0]);
          setRelatedQuestions(relatedData.items);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return;
  return (
    <>
      <Head>
        <title>{question.title}</title>
      </Head>

      <Header title={"Community Detail Page"} isDetailedPage={true} />
      <QuestionDetailContainer>
        <StyledTitle>Question</StyledTitle>
        <QuestionCard
          id={question.question_id}
          title={question.title}
          views={question.view_count}
          displayName={question.owner.display_name}
          ownerRep={question.owner.reputation}
          tags={question.tags}
          date={question.creation_date}
          answers={question.answer_count}
          isAnswered={question.is_answered}
          isRelatedQuestion={false}
        />
        <StyledTitle>Related Questions</StyledTitle>
        {relatedQuestions.map((relatedQuestion) => (
          <CardLink
            href={`/questions/${relatedQuestion.question_id}`}
            key={question.question_id}
            passHref
          >
            <QuestionCard
              key={relatedQuestion.question_id}
              id={relatedQuestion.question_id}
              title={relatedQuestion.title}
              views={relatedQuestion.view_count}
              displayName={relatedQuestion.owner.display_name}
              ownerRep={relatedQuestion.owner.reputation}
              tags={relatedQuestion.tags}
              date={relatedQuestion.creation_date}
              answers={relatedQuestion.answer_count}
              isAnswered={relatedQuestion.is_answered}
              isRelatedQuestion={true}
            />
          </CardLink>
        ))}
      </QuestionDetailContainer>
    </>
  );
};

export default QuestionDetail;

const QuestionDetailContainer = styled.div`
  font-family: "Kode Mono", monospace;
  display: flex;
  flex-direction: column;
  margin-inline: calc(5vw);
  margin-block: calc(2vh);
`;

const StyledTitle = styled.h2`
  @media (max-width: 450px) {
    align-self: center;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
