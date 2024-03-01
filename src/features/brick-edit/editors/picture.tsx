import { Picture } from "@/features/bricks";
import { Brick } from "@/entities/pages";
import { Wrapper } from "../ui/wrapper";
import { EditDialog } from "../ui/dialog";
import { DialogClose, DialogFooter } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { useCurrent } from "../hooks/useCurrent";
import { useEffect, useState } from "react";
import { Upload } from "@/features/upload";
import { Trash } from "lucide-react";

export const PictureEditor = (props: Brick) => {
  const { handleChangeBrick, handleDeleteBrick } = useCurrent();
  const [url, setUrl] = useState(props.payload);

  const handleSave = () => {
    const { payload, ...newBrick } = props;
    handleChangeBrick({ ...newBrick, payload: url });
  };

  const handleClose = () => {
    setUrl(props.payload);
  };

  const handleDelete = () => {
    handleDeleteBrick(props.id);
  };
  return (
    <Wrapper id={props.id}>
      <Picture {...props} />
      <EditDialog title="Edit Picture">
        {url ? (
          <DeletePicture handleChange={setUrl}>
            <Picture {...props} maxHight={500} url={url} />
          </DeletePicture>
        ) : (
          <UploadPicture value={url} handleChange={setUrl} />
        )}
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

function UploadPicture({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-neutral-400">Picture</label>
      <Upload label="Upload your picture" onUploadComplete={handleChange} />
    </div>
  );
}

function DeletePicture(props: {
  children: React.ReactNode;
  handleChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <div
        onClick={() => props.handleChange("")}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-2 bg-neutral-700 hover:bg-neutral-900"
      >
        <Trash className="text-white" />
      </div>
      {props.children}
    </div>
  );
}
