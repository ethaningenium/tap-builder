"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export function SetToken(token: string) {
  if (typeof document !== "undefined") {
    const currentDate = new Date();
    const expirationDate = new Date(
      currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
    );
    const expires = expirationDate.toUTCString();

    document.cookie = `Authorization=${token}; expires=${expires}; path=/`;
  }
}

export function SetTokenComp(props: { token: string }) {
  const router = useRouter();
  useLayoutEffect(() => {
    SetToken(props.token);
    router.push("/");
  }, []);

  return <div>Google Authorization</div>;
}
