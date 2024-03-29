"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        Find the weather of last 30 days in any city!
      </h1>
      <p className={styles.p}>Enter a city name below.</p>
      <input
        type="text"
        value={city}
        placeholder="Boston"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <Link href={`/${city}`}>Get Weather</Link>
    </main>
  );
}
