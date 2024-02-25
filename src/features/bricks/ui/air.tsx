import { Brick } from "@/entities/pages";

export function Air(props: Brick) {
  let height = Number(props.payload);
  if (isNaN(height)) {
    height = 20;
  }

  return <div className="w-full" style={{ height: height + "px" }}></div>;
}
