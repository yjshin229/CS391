import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use happy-dom for tests to simulate the browser environment
    environment: "happy-dom",
  },
});
