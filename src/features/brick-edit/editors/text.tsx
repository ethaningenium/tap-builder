import { Text } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCurrent } from "../hooks/useCurrent";
import { useState } from "react";

export const TextEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [value, setValue] = useState(props.payload);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    handleChangeBrick({ ...newBrick, payload: value });
  };

  const handleClose = () => {
    setValue(props.payload);
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Text {...props} />
      <EditDialog title="Edit Text">
        <Input value={value} onChange={handleChange} />
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
