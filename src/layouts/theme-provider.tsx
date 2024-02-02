import { useTheme } from "@/services/useTheme";
import { useLayoutEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setInitialTheme } = useTheme();
  useLayoutEffect(() => {
    setInitialTheme();
  }, []);
  return children;
}
