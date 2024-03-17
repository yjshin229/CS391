import { UnixToDate } from "@/utils/DateTimeConverter";
import { styled } from "styled-components";
const Card = ({
  id,
  title,
  views,
  displayName,
  ownerRep,
  tags,
  answers,
  date,
}) => {
  return (
    <StyledContainer>
      <CardHeaderFooter>
        <DisplayName>{`${displayName} | ⭐️ ${ownerRep}`}</DisplayName>
        <SmallGrey>{UnixToDate(date)}</SmallGrey>
      </CardHeaderFooter>
      <QuestionTitle>{title}</QuestionTitle>
      <TagContainer>
        {tags.map((tag) => (
          <Tags key={tag.index}>{tag}</Tags>
        ))}
      </TagContainer>
      <Divider />
      <CardHeaderFooter>
        <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
        <SmallGrey>{`Question Id: ${id}`}</SmallGrey>
      </CardHeaderFooter>
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled.div`
  width: auto;
  background-color: #ceed77;
  border-radius: 12px;
  margin-bottom: 1rem;
  padding: 1rem;
`;
const CardHeaderFooter = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
const Tags = styled.div`
  background-color: #e7f6be;
  border-radius: 12px;
  padding: 0.5rem;
  font-size: x-small;
  margin-right: 1rem;
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
