import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled(Link)`
  padding: 2%;
  margin: 1%;
  background: ${(props) => (!props.disabled ? "#c6e17d" : "lightGrey")};
  pointer-events: ${(props) => (!props.disabled ? "all" : "none")};
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
  cursor: pointer;
  color: ${(props) => (!props.disabled ? "black" : "white")};
  text-decoration: none;
  border-radius: 10px;
`;

function Pagination({ currentPage, hasMore }) {
  return (
    <PaginationContainer>
      <PaginationLink
        href={`?page=${parseInt(currentPage) - 1}`}
        disabled={currentPage <= 1}
      >
        Previous
      </PaginationLink>
      <PaginationLink
        href={`?page=${parseInt(currentPage) + 1}`}
        disabled={!hasMore}
      >
        Next
      </PaginationLink>
    </PaginationContainer>
  );
}

export default Pagination;
