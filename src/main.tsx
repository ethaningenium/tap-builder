import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./pages/router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./layouts/theme-provider";
import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

document.body.classList.add("mystyle2");
