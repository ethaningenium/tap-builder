import { cn } from "@/shared/lib/utils";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/shared/ui/dialog";
import { useCurrent } from "../hooks/useCurrent";
import { v4 } from "uuid";
import { ComponentPropsWithoutRef } from "react";
import {
  AlignVerticalSpaceAround,
  Minus,
  Image,
  Link,
  Type,
  CaseSensitive,
} from "lucide-react";

export const AddNewBrick = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full p-8 border border-neutral-700 rounded-xl flex justify-center items-center relative border-none bg-neutral-800 dark:bg-white text-white dark:text-neutral-800">
          <p className="text-xl font-bold">Add new</p>
        </div>
      </DialogTrigger>
      <DialogContent
        className="w-full flex flex-col items-center"
        onFocus={(e) => e.target.blur()}
      >
        <DialogHeader>
          <span>Click to element to add</span>
        </DialogHeader>
        <div className="w-full rounded-2xl p-2 flex flex-col items-center">
          <DialogClose className="flex gap-8 flex-wrap justify-center">
            <div className="flex flex-col gap-2 items-center p-2">
              <h3>Texts</h3>
              <div className="flex flex-wrap gap-2">
                <TitleAdd />
                <TextAdd />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-2">
              <h3>Layouts</h3>
              <div className="flex flex-wrap gap-2">
                <AirAdd />
                <LineAdd />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-2">
              <h3>Images</h3>
              <div className="flex flex-wrap gap-2">
                <PictureAdd />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-2">
              <h3>Links</h3>
              <div className="flex flex-wrap gap-2">
                <ClickAdd />
              </div>
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface INewBrick extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

function NewBrickParent({ children, className, ...props }: INewBrick) {
  return (
    <div
      className={cn(
        "h-24 w-24 rounded-lg border border-neutral-500 p-2 flex items-center justify-center gap-2 flex-col dark:bg-transparent bg-white cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function TextAdd() {
  const { handleAddBrick } = useCurrent();
  function AddTitle() {
    handleAddBrick({
      id: v4(),
      type: "text",
      payload: "New Text, example text",
      params: '{"size": "medium", "align": "center"}',
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddTitle}>
      <CaseSensitive size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Default text
      </p>
    </NewBrickParent>
  );
}

function TitleAdd() {
  const { handleAddBrick } = useCurrent();
  function AddTitle() {
    handleAddBrick({
      id: v4(),
      type: "title",
      payload: "Example title",
      params: '{"size": "medium", "align": "center"}',
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddTitle}>
      <Type size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Title
      </p>
    </NewBrickParent>
  );
}

function AirAdd() {
  const { handleAddBrick } = useCurrent();
  function AddAir() {
    handleAddBrick({
      id: v4(),
      type: "air",
      payload: "20",
      params: "",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddAir}>
      <AlignVerticalSpaceAround size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Air
      </p>
    </NewBrickParent>
  );
}

function LineAdd() {
  const { handleAddBrick } = useCurrent();
  function AddAir() {
    handleAddBrick({
      id: v4(),
      type: "line",
      payload: "solid",
      params: "",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddAir}>
      <Minus size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Line
      </p>
    </NewBrickParent>
  );
}

function PictureAdd() {
  const { handleAddBrick } = useCurrent();
  function AddPicture() {
    handleAddBrick({
      id: v4(),
      type: "picture",
      payload: "",
      params: "",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddPicture}>
      <Image size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Picture
      </p>
    </NewBrickParent>
  );
}

function ClickAdd() {
  const { handleAddBrick } = useCurrent();
  function AddPicture() {
    handleAddBrick({
      id: v4(),
      type: "click",
      payload: "Example link",
      params: "#",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddPicture}>
      <Link size={40} />
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Link
      </p>
    </NewBrickParent>
  );
}
