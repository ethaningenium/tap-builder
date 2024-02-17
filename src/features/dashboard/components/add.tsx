import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { PageWithBricks } from "@/types/Page";
import { useState } from "react";
import { v4 } from "uuid";
import { usePageStore } from "../services/pageStore";
import { AddPage } from "../services/fetching";
import { useMutation } from "react-query";
import { AddressChecker } from "./address-checker";

export function Add() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const { addPage } = usePageStore();
  const mutation = useMutation(
    () => {
      const token = window.localStorage.getItem("Authorization");
      if (!token) throw new Error();
      const page: PageWithBricks = {
        id: v4(),
        title,
        address,
        bricks: [],
      };
      return AddPage(token, page);
    },
    {
      onSuccess: (data) => {
        addPage(data.data);
      },
    }
  );

  function onCreate() {
    mutation.mutate();
    setTitle("");
    setAddress("");
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex-1 min-w-72 min-h-56 h-full rounded-lg border border-neutral-700 flex justify-center items-center hover:bg-neutral-800 transition cursor-pointer">
          <h1 className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent font-medium text-3xl">
            Add new page
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-6">
        <DialogHeader>
          <DialogTitle>Add new page</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col gap-2">
          <span>Title</span>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <span>Address</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
              /
            </span>
            <Input
              value={address}
              className="pl-8"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <AddressChecker address={address} />
          </div>
        </div>
        <DialogFooter className="flex justify-end gap-6 w-full items-center">
          <DialogClose asChild>
            <button className="px-8 py-2 rounded bg-neutral-700 text-neutral-100">
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              className="px-8 py-2 rounded bg-white text-neutral-900"
              onClick={onCreate}
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
