"use client";

import { useTheme } from "next-themes";
import { useLayoutEffect } from "react";

export function SetTheme(props: { theme: string }): JSX.Element {
  const { setTheme } = useTheme();

  useLayoutEffect(() => {
    setTheme(props.theme);
  }, [props.theme]);

  return <></>;
}
