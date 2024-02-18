import styled from "styled-components";

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledImg src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cc95e3e-4d8a-4bf8-99c8-6166084d56ec/d99ey1q-e8cc1684-ceea-492a-b876-50ffc71201b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjYzk1ZTNlLTRkOGEtNGJmOC05OWM4LTYxNjYwODRkNTZlY1wvZDk5ZXkxcS1lOGNjMTY4NC1jZWVhLTQ5MmEtYjg3Ni01MGZmYzcxMjAxYjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gks3x3Ptj8uJ2DvKsrt2OtuYLz66u4tlU81X29NXzJ4"} />
      <p>Loading ...</p>
    </StyledLoadingContainer>
  );
};

export default Loading;

const StyledLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  top: 0;
  left: 0;
  object-fit: contain;
  width: 300px;
  display: flex;
  align-items: center;
`;
