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
import { v4 } from "uuid";
import { usePageStore } from "../store/page";
import { create } from "@/api/page";
import { useMutation } from "react-query";
import { AddressChecker } from "@/features/check";
import { GetToken } from "@/shared/lib/token";
import { PageDialog } from "./dialog";

export function Add() {
  const [page, setPage] = useState<Page>({
    id: v4(),
    title: "",
    address: "",
    theme: "",
    favicon: "",
    bricks: [],
  });
  const { addPage } = usePageStore();
  const mutation = useMutation(
    (newPage: Page) => {
      const token = GetToken();
      if (!token) throw new Error();
      return create(token, newPage);
    },
    {
      onSuccess: (data) => {
        addPage(data);
      },
    }
  );

  function onSave(title: string, address: string, theme: string) {
    const newPage = { ...page, title, address, theme };
    setPage(newPage);
    mutation.mutate(newPage);
  }
  return (
    <PageDialog page={page} onSave={onSave}>
      <div className="flex-1 min-w-72 min-h-52 h-full rounded-lg border border-neutral-700 flex justify-center items-center hover:bg-neutral-800 transition cursor-pointer">
        <h1 className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent font-medium text-3xl">
          Add new page
        </h1>
      </div>
    </PageDialog>
  );
}
