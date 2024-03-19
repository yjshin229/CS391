export async function getServerSideProps(context) {
  const { page } = context.query;

  const data = await fetch(
    `https://api.stackexchange.com/2.2/questions?${
      page ? `page=${page}&` : ""
    }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
  );
  const result = await data.json();
  return {
    props: {
      questions: result.items,
      hasMore: result.has_more,
      page: page || 1,
    },
  };
}
