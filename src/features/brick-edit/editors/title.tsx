import { Title, TitleParams, ParseTitleParams } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCurrent } from "../hooks/useCurrent";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const TitleEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [title, setTitle] = useState(props.payload);
  const [size, setSize] = useState("");
  const [align, setAlign] = useState("");

  useEffect(() => {
    const params = ParseTitleParams(props.params);
    setSize(params.size);
    setAlign(params.align);
  }, []);

  const handleSave = () => {
    const { payload, params, ...newBrick } = props;
    const newParams = JSON.stringify({ size, align });
    handleChangeBrick({ ...newBrick, payload: title, params: newParams });
  };

  const handleClose = () => {
    setTitle(props.payload);
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Title {...props} />
      <EditDialog title="Edit Title">
        <EditTitle value={title} handleChange={setTitle} />
        <EditSize value={size} handleChange={setSize} />
        <EditAlign value={align} handleChange={setAlign} />
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

function EditTitle({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">Title</label>
      <Input value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

function EditSize({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">Size</label>
      <Select
        value={value}
        onValueChange={(e) => handleChange(e)}
        defaultValue="small"
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Small</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="large">Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function EditAlign({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">Align</label>
      <Select
        value={value}
        onValueChange={(e) => handleChange(e)}
        defaultValue="center"
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a alignment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="left">Left</SelectItem>
          <SelectItem value="center">Center</SelectItem>
          <SelectItem value="right">Right</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
