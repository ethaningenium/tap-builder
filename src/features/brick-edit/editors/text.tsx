import { ParseTextParams, Text } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { useCurrent } from "../hooks/useCurrent";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

export const TextEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [text, setText] = useState(props.payload);
  const [size, setSize] = useState("");
  const [align, setAlign] = useState("");

  useEffect(() => {
    const params = ParseTextParams(props.params);
    setSize(params.size);
    setAlign(params.align);
  }, []);

  const handleSave = () => {
    const { payload, params, ...newBrick } = props;
    const newParams = JSON.stringify({ size, align });
    handleChangeBrick({ ...newBrick, payload: text, params: newParams });
  };

  const handleClose = () => {
    setText(props.payload);
    const params = ParseTextParams(props.params);
    setSize(params.size);
    setAlign(params.align);
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Text {...props} />
      <EditDialog title="Edit Text">
        <EditText value={text} handleChange={setText} />
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

function EditText({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">Text</label>
      <Textarea value={value} onChange={(e) => handleChange(e.target.value)} />
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
