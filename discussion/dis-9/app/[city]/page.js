"use client";
import styles from "../page.module.css";
import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../components/WeatherCard";

const CityPage = () => {
  const params = useParams();

  const res = useSWR(`/api/getWeatherData?city=${params.city}`, (url) =>
    fetch(url).then((res) => res.json())
  );

  if (res.error) return <div>Failed to Load</div>;
  if (res.isLoading) return <div>Loading...</div>;

  const days = res.data.days;
  console.log(res);

  return (
    <main className={styles.main}>
      <h2 className={styles.h1}>{params.city}</h2>
      <div className={styles.card}>
        {days?.map((weather, i) => (
          <WeatherCard key={i} weather={weather} />
        ))}
      </div>
    </main>
  );
};

export default CityPage;
