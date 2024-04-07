import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use happy-dom for tests to simulate the browser environment
    environment: "happy-dom",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/test/specs/**", // Corrected path to exclude
    ],
  },
});
