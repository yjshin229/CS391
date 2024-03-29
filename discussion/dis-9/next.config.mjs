/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
