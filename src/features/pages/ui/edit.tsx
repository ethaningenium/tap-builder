import { Page, PageMeta } from "@/entities/pages";

import { useState } from "react";
import { Edit as EditIcon } from "lucide-react";
import { useMutation } from "react-query";
import { updateMeta } from "@/api/page";
import { usePageStore } from "../store/page";
import { GetToken } from "@/shared/lib/token";
import { PageDialog } from "./dialog";

export function Edit(props: Page) {
  const [page, setPage] = useState<PageMeta>(props);

  const mutation = useMutation(
    (newPage: PageMeta) => {
      const token = GetToken();
      if (!token) throw new Error();
      console.log(newPage);
      return updateMeta(token, newPage);
    },
    {
      onSuccess: (data) => {
        updatePage(data);
      },
    }
  );
  const { updatePage } = usePageStore();

  function handleEdit(title: string, address: string, theme: string) {
    const newPage = { ...page, title, address, theme };
    setPage(newPage);
    mutation.mutate(newPage);
  }
  return (
    <PageDialog page={{ ...page, bricks: [] }} onSave={handleEdit}>
      <button className="p-2 rounded text-white hover:bg-neutral-700 flex gap-4 items-center absolute top-2 right-2">
        <EditIcon size={20} />
      </button>
    </PageDialog>
  );
}
