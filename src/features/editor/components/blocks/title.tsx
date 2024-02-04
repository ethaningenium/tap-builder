import { Title } from "@/components/bricks";
import { BricksProps } from "../../services/bricks-props-type";
import { ViewParent } from "../view-parent";
import { EditDialog } from "../edit-dialog";

export const TitleEditor = (props: BricksProps) => {
  return (
    <ViewParent>
      <Title title={props.payload} />
      <EditDialog>
        <Title title={props.payload} />
      </EditDialog>
    </ViewParent>
  );
};
