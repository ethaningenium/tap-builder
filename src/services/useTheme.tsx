import { useLayoutEffect } from "react";

export function useTheme() {
  useLayoutEffect(() => {
    const theme = localStorage.getItem("TAP_THEME");
    if (!theme) {
      localStorage.setItem("TAP_THEME", "light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function setDark() {
    localStorage.setItem("TAP_THEME", "dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }

  function setLight() {
    localStorage.setItem("TAP_THEME", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }

  function getTheme() {
    const theme = localStorage.getItem("TAP_THEME");
    if (theme === "dark") {
      return "dark";
    } else if (theme === "light") {
      return "light";
    }
    return "light";
  }

  return {
    setDark,
    setLight,
    getTheme,
  };
}
