import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import ComponentB from "./components/ComponentB";
import ComponentA from "./components/ComponentA";

function App() {
  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/path1" element={<ComponentA />} />
        <Route path="/path2" element={<ComponentB />} />
      </Routes>
    </>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default App;
