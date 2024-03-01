import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Image from "next/image";

export default function Home() {
  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data.results);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data.results.map((obj) => (
          <div key={obj.id}>
            <h2>{obj.name}</h2>
            <Image
              src={obj.image}
              alt="Rick and Morty"
              width={250}
              height={250}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
