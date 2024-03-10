import { Air } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCurrent } from "../hooks/useCurrent";
import { useLayoutEffect, useState } from "react";
import { Slider } from "@/shared/ui/slider";

export const AirEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    const notNan = Number(props.payload);
    if (!isNaN(notNan)) {
      setValue(notNan);
    }
  }, [props.payload]);

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    handleChangeBrick({ ...newBrick, payload: String(value) });
  };

  const handleClose = () => {
    const notNan = Number(props.payload);
    if (!isNaN(notNan)) {
      setValue(notNan);
    }
  };

  function Edithandle() {
    console.log(value);
  }

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Air {...props} />
      <EditDialog title="Edit Air">
        <span>{value} px</span>
        <button
          onClick={() => {
            setValue((prev) => prev + 10);
            console.log("click: ", value);
            Edithandle();
          }}
        >
          Edit
        </button>
        <Slider
          defaultValue={[20]}
          max={200}
          min={0}
          step={10}
          onValueChange={(value) => setValue(value[0])}
          value={[value]}
        />
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
