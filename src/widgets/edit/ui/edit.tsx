"use client";

import { Render } from "@/features/render";
import { Page } from "@/entities/pages";
import { useCurrent, usePreview } from "@/features/brick-edit";
import { useEffect } from "react";
import { CurrentBricks } from "./current-bricks";

export const Edit = (props: { page: Page }) => {
  const { bricks, setInitialPage } = useCurrent();
  const { isPreview } = usePreview();

  useEffect(() => {
    setInitialPage(props.page);
  }, [props.page]);

  return (
    <main className="pt-24 min-h-dvh w-full flex flex-col items-center justify-start">
      <div className="w-full mx-4 max-w-96 rounded-lg  flex flex-col justify-start gap-6">
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
