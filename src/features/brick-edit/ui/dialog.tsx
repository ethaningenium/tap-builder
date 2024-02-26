import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Pencil } from "lucide-react";

export const EditDialog = (props: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="p-2 border border-neutral-800 hover:border-neutral-600 transition rounded-lg absolute top-2 right-2">
        <Pencil size={20} strokeWidth={1} />
      </DialogTrigger>
      <DialogContent className="flex flex-col items-start">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        {props.children}
      </DialogContent>
    </Dialog>
  );
};
