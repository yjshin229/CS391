import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { basePath } from "./App";
import App from "./App";

// const basename = process.env.PUBLIC_URL;

const path =
  process.env.NODE_ENV === "production" ? `${basePath}/` : `${basePath}*`;
const router = createBrowserRouter([
  {
    path: path,
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
