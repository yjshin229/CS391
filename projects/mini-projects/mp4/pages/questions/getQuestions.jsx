export async function getServerSideProps(context) {
  const { page } = context.query;

  const data = await fetch(
    `https://api.stackexchange.com/2.2/questions?${
      page ? `page=${page}&` : ""
    }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
  );
  const result = await data.json();
  console.log(data);
  if (!result) console.log("AHHH");
  return {
    props: {
      questions: result.items || null,
      hasMore: result.has_more || null,
      page: page || 1,
    },
  };
}
