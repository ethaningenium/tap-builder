import React from "react";

export const ViewParent = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-8 border border-neutral-500 rounded-xl flex justify-center items-center bg-white dark:bg-neutral-800 relative">
      {props.children}
    </div>
  );
};
