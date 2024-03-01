import { TitleEditor } from "../editors/title";
import { TextEditor } from "../editors/text";
import { Brick } from "@/entities/pages";
import { AirEditor } from "../editors/air";
import { LineEditor } from "../editors/line";
import { PictureEditor } from "../editors/picture";
import { ClickEditor } from "../editors/click";

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
    case "picture":
      return <PictureEditor {...props} />;
    case "click":
      return <ClickEditor {...props} />;
    default:
      return null;
  }
};
