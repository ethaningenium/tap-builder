import { Brick } from "@/entities/pages";
import { cn } from "@/shared/lib/utils";
import { Balance } from "./balance";

export const Render = (props: { bricks: Brick[]; className?: string }) => {
  return (
    <main
      className={cn(
        "flex flex-col gap-6 items-center w-full justify-start bg-white dark:bg-neutral-950 p-3 sm:rounded-2xl rounded-sm",
        props.className
      )}
    >
      {props.bricks.map((brick) => (
        <Balance key={brick.id} {...brick} />
      ))}
    </main>
  );
};
