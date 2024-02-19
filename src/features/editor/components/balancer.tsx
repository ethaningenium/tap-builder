import { TitleEditor } from "./blocks/title";
import { TextEditor } from "./blocks/text";
import { Brick } from "@/types/Brick";
import { AirEditor } from "./blocks/air";
import { LineEditor } from "./blocks/line";

export const Balancer = (props: Brick) => {
  switch (props.type) {
    case "title":
      return <TitleEditor {...props} />;
    case "text":
      return <TextEditor {...props} />;
    case "air":
      return <AirEditor {...props} />;
    case "line":
      return <LineEditor {...props} />;
    default:
      return null;
  }
};
