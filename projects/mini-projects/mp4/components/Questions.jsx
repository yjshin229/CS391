import styled from "styled-components";
import Card from "./Card";
import Link from "next/link";
import Pagination from "./Pagination";

const Questions = ({ questions, hasMore, page }) => {
  return (
    <QuestionContainer>
      <StyledTitle>Questions</StyledTitle>
      {questions.map((question) => (
        <CardLink
          href={`/questions/${question.question_id}`}
          key={question.question_id}
          passHref
        >
          <Card
            id={question.question_id}
            title={question.title}
            views={question.view_count}
            displayName={question.owner.display_name}
            ownerRep={question.owner.reputation}
            tags={question.tags}
            date={question.creation_date}
            answers={question.answer_count}
          />
        </CardLink>
      ))}
      <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
    </QuestionContainer>
  );
};

export default Questions;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const QuestionContainer = styled.div`
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
