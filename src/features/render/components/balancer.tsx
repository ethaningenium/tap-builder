import { Brick } from "@/types/Brick";
import { Air, Text, Title, Line } from "./bricks";

export const Balancer = (props: Brick) => {
  switch (props.type) {
    case "title":
      return <Title payload={props.payload} />;
    case "text":
      return <Text payload={props.payload} />;
    case "air":
      return <Air payload={props.payload} />;
    case "line":
      return <Line payload={props.payload} />;
    default:
      return null;
  }
};
