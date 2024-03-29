import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.NEXT_WEATHER_API_KEY;

export const GET = async (request) => {
  const city = request.nextUrl.searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "No city provided!" }, { status: 500 });
  }

  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`
  );

  if (res.status !== 200) {
    return NextResponse.json(
      { error: "Failed to fetch data." },
      { status: 500 }
    );
  }

  const data = await res.json();
  console.log(res.json());

  return NextResponse.json(data);
};
