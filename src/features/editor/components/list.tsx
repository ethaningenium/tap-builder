import { Brick } from "@/types/Brick";
import { Balancer } from "./balancer";
import { AddNew } from "./add";

export const List = (props: { bricks: Brick[] }) => {
  return (
    <div className=" w-full flex flex-col p-1 gap-2 rounded-xl border border-neutral-800 bg-white dark:bg-neutral-900">
      {props.bricks.map((brick) => (
        <Balancer key={brick.id} {...brick} />
      ))}
      <AddNew />
    </div>
  );
};
