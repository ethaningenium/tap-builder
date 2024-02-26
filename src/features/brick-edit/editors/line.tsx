import { Line } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { useCurrent } from "../hooks/useCurrent";
import { useState } from "react";

export const LineEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [isDashed, setDashed] = useState(props.payload === "dashed");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDashed(event.target.checked);
  };

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    handleChangeBrick({ ...newBrick, payload: isDashed ? "dashed" : "solid" });
  };

  const handleClose = () => {
    setDashed(props.payload === "dashed");
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Line {...props} />
      <EditDialog title="Edit Line">
        <div className="w-full flex items-center gap-2">
          <input
            type="checkbox"
            id="isdashed"
            className="accent-emerald-500"
            onChange={handleChange}
            checked={isDashed}
          />
          <label htmlFor="isdashed">Is dashed</label>
        </div>
        <DialogFooter className="w-full flex flex-row justify-between gap-2 sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogClose>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" variant="default" onClick={handleSave}>
                Save
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </EditDialog>
    </Wrapper>
  );
};
