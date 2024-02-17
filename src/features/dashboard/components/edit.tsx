import { PageWithBricks } from "@/types/Page";
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
import { useState } from "react";
import { Edit as EditIcon } from "lucide-react";
import { useMutation } from "react-query";
import { UpdatePage } from "../services/fetching";
import { usePageStore } from "../services/pageStore";
import { AddressChecker } from "./address-checker";

type PageCardProps = {
  page: PageWithBricks;
};

export function Edit(props: PageCardProps) {
  const [page, setPage] = useState<PageWithBricks>(props.page);
  const mutation = useMutation(function () {
    const token = window.localStorage.getItem("Authorization");
    if (!token) throw new Error();
    return UpdatePage(token, page);
  });
  const { updatePage } = usePageStore();

  function handleEdit() {
    mutation.mutate();
    updatePage(page);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 rounded text-white hover:bg-neutral-700 flex gap-4 items-center">
          <EditIcon size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-6">
        <DialogHeader>
          <DialogTitle>Edit page information</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col gap-2">
          <span>Title</span>
          <Input
            value={page.title}
            onChange={(e) => {
              setPage({ ...page, title: e.target.value });
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
              value={page.address}
              className="pl-8"
              onChange={(e) => {
                setPage({ ...page, address: e.target.value });
              }}
            />
            <AddressChecker
              address={page.address}
              defaultAddress={props.page.address}
            />
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
              onClick={handleEdit}
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
