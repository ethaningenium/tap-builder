// import { useTheme } from "@/services/useTheme";

import { Render } from "@/features/render";
import { ThemeToggle } from "@/shared/theme-toggle";
import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import { GetPage } from "../services/fetching";
import { useEffect, useState } from "react";
import { Brick } from "@/types/Brick";

export const Published: React.FC = () => {
  const { id } = useParams();
  const [bricks, setBricks] = useState<Brick[]>([]);
  const { data } = useQuery(["page", id], () => {
    if (!id) throw new Error("no id");
    return GetPage(id);
  });
  if (!id) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (!data) return;
    if (data.status === 200) {
      if (data.data) {
        setBricks(data.data.bricks);
      }
    }
  });
  return (
    <div className="w-full sticky min-h-dvh bg-neutral-900 flex justify-center items-start sm:py-12">
      <main className="flex flex-col gap-6 items-center w-full justify-start sm:w-[600px] bg-white dark:bg-neutral-900 min-h-dvh sm:min-h-[800px] sm:rounded-2xl">
        <ThemeToggle className="absolute right-4 top-4 bg-white dark:bg-neutral-900" />
        <Render bricks={bricks} />
      </main>
    </div>
  );
};
