import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { Input } from "@/shared/ui/input";
import { Page } from "@/entities/pages";
import { useState } from "react";
import { AddressChecker } from "@/features/check";

type DialogProps = {
  page: Page;
  onSave: (title: string, address: string, theme: string) => void;
  children: React.ReactNode;
};

export function PageDialog(props: DialogProps) {
  const [title, setTitle] = useState(props.page.title);
  const [address, setAddress] = useState(props.page.address);
  const [theme, setTheme] = useState(props.page.theme);

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
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
            <AddressChecker
              address={address}
              defaultAddress={props.page.address}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span>Theme</span>
          <Select
            onValueChange={(value) => setTheme(value)}
            defaultValue={theme}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
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
              onClick={() => {
                props.onSave(title, address, theme);
              }}
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
