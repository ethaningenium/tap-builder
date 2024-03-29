import { Brick } from "@/entities/pages";
import { Air, Text, Title, Line, Picture, Click } from "@/features/bricks";

export const Balance = (props: Brick) => {
  switch (props.type) {
    case "title":
      return <Title {...props} />;
    case "text":
      return <Text {...props} />;
    case "air":
      return <Air {...props} />;
    case "line":
      return <Line {...props} />;
    case "picture":
      return <Picture {...props} />;
    case "click":
      return <Click {...props} />;
    default:
      throw new Error("Invalid type");
  }
};
