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
        <div className="w-full rounded-2xl p-2">
          <DialogClose className="flex gap-4 flex-wrap justify-center">
            <TitleAdd />
            <TextAdd />
            <AirAdd />
            <LineAdd />
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
      payload: "New Text, my text",
      params: "",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddTitle}>
      <h2 className="text-lg font-bold text-neutral-800 dark:text-white">
        AaBbCc
      </h2>
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
      payload: "New Title",
      params: "",
      children: [],
    });
  }
  return (
    <NewBrickParent onClick={AddTitle}>
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
        AaBb
      </h2>
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
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
        20 px
      </h2>
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
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
        ------
      </h2>
      <p className="text-sm font-light  text-neutral-800 dark:text-white">
        Line
      </p>
    </NewBrickParent>
  );
}
