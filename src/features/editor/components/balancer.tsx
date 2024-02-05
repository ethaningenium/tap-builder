import { TitleEditor } from "./blocks/title";
import { TextEditor } from "./blocks/text";
import { Brick } from "@/types/Brick";

export const Balancer = (props: Brick) => {
  switch (props.type) {
    case "title":
      return <TitleEditor {...props} />;
    case "text":
      return <TextEditor {...props} />;
    default:
      return null;
  }
};
