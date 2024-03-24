export async function getServerSideProps(context) {
  try {
    const { page } = context.query;

    const data = await fetch(
      `https://api.stackexchange.com/2.2/questions?${
        page ? `page=${page}&` : ""
      }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
    );
    if (!data.ok) {
      throw new Error(`Failed to fetch, status: ${data.status}`);
    }
    const result = await data.json();

    return {
      props: {
        questions: result.items,
        hasMore: result.has_more,
        page: page || 1,
      },
    };
  } catch (error) {
    console.error("Failed to fetch questions:", error);

    return {
      props: {
        questions: [],
        hasMore: false,
        page: page || 1,
        error: "Failed to load data",
      },
    };
  }
}
