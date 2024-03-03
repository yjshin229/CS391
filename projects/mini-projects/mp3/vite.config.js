import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production"
      ? "cs-people.bu.edu/yjshin229/cs391/projects/mini-projects/mp3/dist/"
      : "/",
});
