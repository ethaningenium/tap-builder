import { createBrowserRouter } from "react-router-dom";
import { GoogleCallback, Login, Register } from "@/features/auth";
import { Published } from "@/features/published";
import { Editor } from "@/features/editor";
import { DashBoard } from "@/features/dashboard";
import { Auth } from "@/features/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <DashBoard />
      </Auth>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/page/:id",
    element: <Published />,
  },
  {
    path: "/edit/:id",
    element: <Editor />,
  },
  {
    path: "/google/calback",
    element: <GoogleCallback />,
  },
]);
