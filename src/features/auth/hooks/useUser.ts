"use client";

import React from "react";
import { useUserStore } from "../store/useUserStore";
import { me } from "@/api/auth";

export function useUser() {
  const { user, setUser } = useUserStore();
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    if (user.email !== "" && user.name !== "") return;
    const token = localStorage.getItem("Authorization");
    if (!token) return;
    me(token).then((data) => {
      setUser({
        email: data.email,
        name: data.name,
      });
    });
  }, []);

  React.useEffect(() => {
    if (user.email !== "" && user.name !== "") {
      setIsAuth(true);
    }
  }, [user]);

  return { user, setUser, isAuth };
}
