import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./pages/router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./layouts/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
