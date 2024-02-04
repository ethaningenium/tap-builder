import { TitleEditor } from "./blocks/title";
import { BricksProps } from "../services/bricks-props-type";
import { TextEditor } from "./blocks/text";

export const BrickLoader = (props: BricksProps) => {
  switch (props.type) {
    case "title":
      return <TitleEditor {...props} position={props.position} />;
    case "text":
      return <TextEditor {...props} position={props.position} />;
    default:
      return null;
  }
};
