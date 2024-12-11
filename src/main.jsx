import "./main.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import Providers from "./contexts/Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);