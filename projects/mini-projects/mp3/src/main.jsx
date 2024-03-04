import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { basePath } from "./App";
import App from "./App";

// const basename = process.env.PUBLIC_URL;
const router = createBrowserRouter([
  {
    path: `${basePath}*`,
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
