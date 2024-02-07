import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
]);
