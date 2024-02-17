import { Navigate, useLocation } from "react-router-dom";

export function GoogleCallback() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  if (token) {
    localStorage.setItem("Authorization", token);
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/" />;
}
