import { cn } from "@/libs/cn";
import React, { forwardRef, Ref } from "react";

export const Wrapper = forwardRef(
  (
    props: { children: React.ReactNode; className?: string },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full p-8 border border-neutral-700 rounded-xl flex justify-center items-center bg-white dark:bg-neutral-900 relative",
          props.className
        )}
      >
        {props.children}
      </div>
    );
  }
);
