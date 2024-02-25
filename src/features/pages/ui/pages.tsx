import { useQuery } from "react-query";
import { getAll } from "@/api/page";
import { usePageStore } from "../store/page";
import { useEffect } from "react";
import { Add } from "./add";
import { GetToken } from "@/shared/lib/token";
import { Card } from "./card";
import { Page } from "@/entities/pages";

export function Pages(props: { pages: Page[] }) {
  const { pages, setPage } = usePageStore();
  useEffect(() => {
    if (props.pages && pages.length === 0) {
      setPage(props.pages);
    }
  }, [props.pages]);
  return (
    <div className="w-full flex flex-wrap gap-4">
      {pages.map((page) => {
        return <Card key={page.id} {...page} />;
      })}
      <Add />
    </div>
  );
}
