import { Brick } from "@/types/Brick";
import { Wrapper } from "../wrapper";

import { EditDialog } from "../dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";

import { useEditStore } from "../../services/store";
import { useState } from "react";
import { Line } from "@/features/render/components/bricks";

export const LineEditor = (props: Brick) => {
  const { changeBrick, deleteBrick } = useEditStore();
  const [isDashed, setDashed] = useState(props.payload === "dashed");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDashed(event.target.checked);
  };

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    changeBrick({ ...newBrick, payload: isDashed ? "dashed" : "solid" });
  };

  const handleClose = () => {
    setDashed(props.payload === "dashed");
  };

  const handleDelete = () => {
    deleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Line payload={props.payload} />
      <EditDialog>
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
        <DialogFooter className="w-full flex flex-row justify-between gap-2 sm:gap-3">
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
