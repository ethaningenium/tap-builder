import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./login";
import { PublishedPage } from "./published";
import { Editor } from "@/features/editor";
import { Dashboard } from "@/features/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/published",
    element: <PublishedPage />,
  },
  {
    path: "/edit",
    element: <Editor />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
