import { Brick } from "@/types/Brick";
import { Balancer } from "./balancer";
import { cn } from "@/libs/cn";

export const Render = (props: { bricks: Brick[]; className?: string }) => {
  return (
    <main
      className={cn(
        "flex flex-col gap-6 items-center w-full justify-start bg-white dark:bg-neutral-900 p-3 sm:rounded-2xl rounded-sm",
        props.className
      )}
    >
      {props.bricks.map((brick) => (
        <Balancer key={brick.id} {...brick} />
      ))}
    </main>
  );
};
