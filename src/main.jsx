import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import ContextsProvider from "./Contexts/ContextsProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextsProvider>
      <RouterProvider router={router} />
    </ContextsProvider>
  </React.StrictMode>
);