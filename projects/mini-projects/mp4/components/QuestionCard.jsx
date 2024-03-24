import { UnixToDate } from "@/utils/DateTimeConverter";
import { styled } from "styled-components";
import PropTypes from "prop-types";

const QuestionCard = ({
  id,
  title,
  views,
  displayName,
  ownerRep,
  tags,
  answers,
  date,
  isAnswered,
  isRelatedQuestion,
}) => {
  return (
    <StyledContainer isRelatedQuestion={isRelatedQuestion}>
      <CardHeaderFooter>
        <DisplayName>{`${displayName} | ⭐️ ${ownerRep}`}</DisplayName>
        <SmallGrey>{UnixToDate(date)}</SmallGrey>
      </CardHeaderFooter>
      <QuestionTitle>{title}</QuestionTitle>
      <TagContainer>
        {tags?.map((tag) => (
          <Tags key={tag.index} isRelatedQuestion={isRelatedQuestion}>
            {tag}
          </Tags>
        ))}
      </TagContainer>
      <Divider />
      <CardHeaderFooter>
        <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
        <SmallGrey>{`Question Id: ${id}`}</SmallGrey>
      </CardHeaderFooter>
      <Answered isAnswered={isAnswered}>{`Answered: ${
        isAnswered ? "True" : "False"
      }`}</Answered>
    </StyledContainer>
  );
};

export default QuestionCard;

QuestionCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  views: PropTypes.number,
  displayName: PropTypes.string,
  ownerRep: PropTypes.number,
  tags: PropTypes.array,
  answers: PropTypes.number,
  date: PropTypes.number,
  isAnswered: PropTypes.bool,
  isRelatedQuestion: PropTypes.bool,
};

const StyledContainer = styled.div`
  width: auto;
  background-color: ${(props) =>
    props.isRelatedQuestion ? "#d9d9d9" : "#ceed77"};
  border-radius: 12px;
  margin-bottom: calc(1rem + 1vw);
  padding: 1rem;
`;
const CardHeaderFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const DisplayName = styled.span`
  font-size: small;
`;

const SmallGrey = styled.span`
  font-size: small;
  color: grey;
`;

const QuestionTitle = styled.h3`
  color: black;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Tags = styled.div`
  background-color: ${(props) =>
    props.isRelatedQuestion ? "#bab9b9" : "#e7f6be"};
  border-radius: 12px;
  padding: 0.5rem;
  font-size: x-small;
`;

const Count = styled.span`
  color: grey;
  font-size: small;
`;

const Divider = styled.div`
  background-color: grey;
  height: 1px;
  margin-block: 1rem;
`;

const Answered = styled.div`
  margin-top: 10px;
  color: ${(props) => (!props.isAnswered ? "red" : "green")};
  font-size: small;
  @media (max-width: 450px) {
    display: none;
  }
`;
