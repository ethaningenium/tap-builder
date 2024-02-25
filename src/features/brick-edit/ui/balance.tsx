import { TitleEditor } from "../editors/title";
import { TextEditor } from "../editors/text";
import { Brick } from "@/entities/pages";
import { AirEditor } from "../editors/air";
import { LineEditor } from "../editors/line";

export const Balance = (props: Brick) => {
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
