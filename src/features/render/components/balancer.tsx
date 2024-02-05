import { Brick } from "@/types/Brick";
import { Text, Title } from "./bricks";

export const Balancer = (props: Brick) => {
  switch (props.type) {
    case "title":
      return <Title title={props.payload} />;
    case "text":
      return <Text text={props.payload} />;
    default:
      return null;
  }
};
