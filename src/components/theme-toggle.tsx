import { cn } from "@/libs/cn";
import { useTheme } from "@/services/useTheme";
import { Sun, MoonStar } from "lucide-react";
import { useState } from "react";

type Props = {
  className?: string;
};

export const ThemeToggle = (props: Props) => {
  const { setDark, setLight, getTheme } = useTheme();
  const [currentTheme, setTheme] = useState<"dark" | "light">(getTheme());

  function toggleTheme() {
    const theme = getTheme();
    if (theme === "dark") {
      setLight();
      setTheme("light");
    } else if (theme === "light") {
      setDark();
      setTheme("dark");
    }
  }
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 transition rounded-xl border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white active:scale-95",
        props.className
      )}
    >
      {currentTheme === "dark" ? <MoonStar size={20} /> : <Sun size={20} />}
    </button>
  );
};
