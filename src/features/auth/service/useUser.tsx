import React from "react";
import { useUserStore } from "./userStore";

export function useUser() {
  const { user, setUser } = useUserStore();
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    if (user.email !== "" && user.name !== "") {
      setIsAuth(true);
    }
  }, [user]);

  return { user, setUser, isAuth };
}
