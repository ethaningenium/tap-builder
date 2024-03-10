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
import { cn } from "@/shared/lib/utils";
import { z } from "zod";

type DialogProps = {
  page: Page;
  onSave: (title: string, address: string, theme: string) => void;
  children: React.ReactNode;
  onDelete?: (address: string) => void;
};

const TitleSchema = z.string().min(3, { message: "Title is required" });
const AddressSchema = z.string().min(3, { message: "Address is required" });

export function PageDialog(props: DialogProps) {
  const [title, setTitle] = useState(props.page.title);
  const [address, setAddress] = useState(props.page.address);
  const [theme, setTheme] = useState(props.page.theme);
  const [error, setError] = useState<{
    title: string;
    address: string;
  }>({
    title: "",
    address: "",
  });

  function validateTitle(value: string) {
    const result = TitleSchema.safeParse(value);
    if (!result.success) {
      const ErrorMsg = JSON.parse(result.error.message);
      setError((prev) => ({ ...prev, title: ErrorMsg[0].message }));
      return;
    }
    setError((prev) => ({ ...prev, title: "" }));
  }

  function validateAddress(value: string) {
    const result = AddressSchema.safeParse(value);
    if (!result.success) {
      const ErrorMsg = JSON.parse(result.error.message);
      setError((prev) => ({ ...prev, address: ErrorMsg[0].message }));
      return;
    }
    setError((prev) => ({ ...prev, address: "" }));
  }

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
              validateTitle(e.target.value);
            }}
          />
          <ErrorMessage error={error.title} />
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
                validateAddress(e.target.value);
              }}
            />
            <AddressChecker
              address={address}
              defaultAddress={props.page.address}
            />
          </div>
          <ErrorMessage error={error.address} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <span>Theme</span>
          <Select
            onValueChange={(value) => {
              setTheme(value);
            }}
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
        <DialogFooter
          className={cn(
            "flex flex-row justify-between sm:justify-between gap-6 w-full items-center",
            {
              "justify-end sm:justify-end": !props.onDelete,
            }
          )}
        >
          {props.onDelete && (
            <DialogClose asChild>
              <button
                className="px-8 py-2 rounded bg-red-500 text-neutral-100 hover:bg-red-600"
                onClick={() => {
                  if (!props.onDelete) return;
                  props.onDelete(address);
                }}
              >
                Delete
              </button>
            </DialogClose>
          )}
          <div className="flex gap-2">
            <DialogClose asChild>
              <button className="px-8 py-2 rounded bg-neutral-700 text-neutral-100">
                Cancel
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button
                className="px-8 py-2 rounded bg-white text-neutral-900 disabled:bg-neutral-400"
                onClick={() => {
                  props.onSave(title, address, theme);
                }}
                disabled={
                  error.title.length !== 0 ||
                  error.address.length !== 0 ||
                  address.length < 3 ||
                  title.length < 3
                }
              >
                Save
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ErrorMessage({ error }: { error: string }) {
  if (!error) return null;
  return <div className="text-red-500 text-sm">{error}</div>;
}
