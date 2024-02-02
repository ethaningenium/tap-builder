import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./login";
import { PublishedPage } from "./published";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/published",
    element: <PublishedPage />,
  },
]);
