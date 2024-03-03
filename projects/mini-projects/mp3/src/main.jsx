import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "*",
      Component: App,
    },
  ],
  { basename: "/yjshin29/cs391/projects/mini-projects/mp3/dist" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
