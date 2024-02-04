import { Text } from "@/components/bricks";
import { BricksProps } from "../../services/bricks-props-type";
import { ViewParent } from "../view-parent";

export const TextEditor = (props: BricksProps) => {
  return (
    <ViewParent>
      <Text text={props.payload} />
    </ViewParent>
  );
};
