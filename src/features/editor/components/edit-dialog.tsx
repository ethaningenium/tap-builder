import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

export const EditDialog = (props: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger className="p-2 border border-neutral-500 rounded-lg absolute top-2 right-2">
        <Pencil size={20} strokeWidth={1} />
      </DialogTrigger>
      <DialogContent className="flex flex-col items-start">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
        </DialogHeader>
        {props.children}
      </DialogContent>
    </Dialog>
  );
};
