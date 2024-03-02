"use client";

import { Render } from "@/features/render";
import { Page } from "@/entities/pages";
import { useQuery } from "react-query";
import { useCurrent, usePreview } from "@/features/brick-edit";
import { useEffect } from "react";
import { CurrentBricks } from "./current-bricks";
import { getOne } from "@/api/page";

export const Edit = (props: { id: string }) => {
  const { data, isLoading } = useQuery(["page", props.id], () => {
    return getOne(props.id);
  });
  const { bricks, setInitialPage } = useCurrent();
  const { isPreview } = usePreview();

  useEffect(() => {
    if (data) {
      setInitialPage(data);
    }
  }, [data]);

  return (
    <main className="pt-24 min-h-dvh w-full flex flex-col items-center justify-start">
      <div className="w-full mx-4 max-w-[500px] px-3 rounded-lg  flex flex-col justify-start gap-6">
        {isLoading && <div>Loading...</div>}
        {isPreview ? (
          <Render
            bricks={bricks}
            className="dark:border border-neutral-700 py-12 px-4"
          />
        ) : (
          <CurrentBricks />
        )}
      </div>
    </main>
  );
};
