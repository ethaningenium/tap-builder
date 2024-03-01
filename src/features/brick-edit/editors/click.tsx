import { Click, ParseClickParams } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCurrent } from "../hooks/useCurrent";
import { useEffect, useState } from "react";

export const ClickEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [text, setText] = useState(props.payload);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const params = ParseClickParams(props.params);
    setUrl(params.url);
  }, []);

  const handleSave = () => {
    const { payload, params, ...newBrick } = props;
    const newParams = JSON.stringify({ url: url });
    handleChangeBrick({ ...newBrick, payload: text, params: newParams });
  };

  const handleClose = () => {
    const params = ParseClickParams(props.params);
    setText(props.payload);
    setUrl(params.url);
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Click {...props} />
      <EditDialog title="Edit Title">
        <EditText value={text} handleChange={setText} />
        <EditUrl value={url} handleChange={setUrl} />
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
      <Input value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

function EditUrl({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">URL address</label>
      <Input value={value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}
