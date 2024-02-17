import { Text } from "@/features/render";
import { Brick } from "@/types/Brick";
import { Wrapper } from "../wrapper";

import { EditDialog } from "../dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useEditStore } from "../../services/store";
import { useState } from "react";

export const TextEditor = (props: Brick) => {
  const { changeBrick, deleteBrick } = useEditStore();
  const [value, setValue] = useState(props.payload);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    changeBrick({ ...newBrick, payload: value });
  };

  const handleClose = () => {
    setValue(props.payload);
  };

  const handleDelete = () => {
    deleteBrick(props.id);
  };
  return (
    <Wrapper>
      <Text text={props.payload} />
      <EditDialog>
        <Input value={value} onChange={handleChange} />
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
