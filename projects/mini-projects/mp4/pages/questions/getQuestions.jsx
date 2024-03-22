export async function getServerSideProps(context) {
  const { page } = context.query;
  try {
    const data = await fetch(
      `https://api.stackexchange.com/2.2/questions?${
        page ? `page=${page}&` : ""
      }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
    );
    const result = await data.json();
    return {
      props: {
        questions: result.items || null,
        hasMore: result.has_more || null,
        page: page || 1,
        isError: data.status === 400 ? data.status : null,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
