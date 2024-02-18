import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const CatList = () => {
  const API = `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_hhf1mfp2yu3wpI5d5IU8hsWGL6SAxN9Uid7qL54ZV18CafjLoEtXq4K5FtWh0FLN`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(API, fetcher);
  if (error) return <h2>failed to load</h2>;
  if (isLoading) return <h2>loading...</h2>;
  if (data) console.log(data[0]);

  const info = data.map((d) => <img src={d.url} height={100} />);
  return <div style={{ display: "flex", flexDirection: "column" }}>{info}</div>;
};

export default CatList;
