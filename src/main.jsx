import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { StudyArea } from "./pages/StudyArea";
import { Spaces } from "./pages/Spaces";
import { SubSpaces } from "./pages/SubSpaces";

const router = createBrowserRouter([
  //  { path: "/", element: <App /> },
  { path: "/", element: <StudyArea /> },
  { path: "/spaces", element: <Spaces /> },
  { path: "/subspaces", element: <SubSpaces /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
