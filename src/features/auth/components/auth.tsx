import { useLayoutEffect } from "react";
import { useUser } from "../service/useUser";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GetMe } from "../service/fetching";

export function Auth({ children }: { children: React.ReactNode }) {
  const { setUser, isAuth } = useUser();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (!isAuth) {
      if (!token) {
        navigate("/login");
      } else {
        const decoded: {
          id: string;
          name: string;
          email: string;
        } = jwtDecode(token);
        GetMe(token)
          .then((res) => {
            return res.json();
          })
          .then((body: { email: string; name: string }) => {
            setUser({
              email: body.email,
              name: body.name,
            });
          });
        setUser({
          email: decoded.email,
          name: decoded.name,
        });
      }
    }
  }, []);

  if (!localStorage.getItem("Authorization")) return <Navigate to="/login" />;

  return children;
}
