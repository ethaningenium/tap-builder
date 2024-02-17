import { useQuery } from "react-query";
import { GetPages } from "../services/fetching";
import { PageCard } from "./page-card";
import { usePageStore } from "../services/pageStore";
import { useEffect } from "react";
import { Add } from "./add";

export function Pages() {
  const { data, isLoading } = useQuery("pages", () => {
    const token = window.localStorage.getItem("Authorization");
    if (!token) throw new Error();
    return GetPages(token);
  });
  const { pages, setPage } = usePageStore();
  useEffect(() => {
    if (data?.data) {
      setPage(data.data);
    }
  }, [data, setPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full flex flex-wrap gap-4">
      {pages?.map((page) => {
        return <PageCard key={page.id} page={page} />;
      })}
      <Add />
    </div>
  );
}
