import { ArrowLeft, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { usePage } from "../services/usePage";
import { cn } from "@/libs/cn";
import { UpdatePage } from "../services/fetching";
import { useEditStore } from "../services/store";

export const Header = () => {
  const { onSave, isUpdated } = usePage();
  const { page } = useEditStore();
  function handleSave() {
    onSave((data) => {
      const token = localStorage.getItem("Authorization");
      if (!token) return;
      UpdatePage(token, data).catch(() => {
        window.alert("Something went wrong");
      });
    });
  }
  return (
    <header className="w-full fixed border-b border-neutral-700 flex justify-center text-neutral-100 z-50 bg-neutral-900">
      <div className="flex w-full justify-between items-center px-4 container py-3">
        <Link
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition"
          to="/"
        >
          <ArrowLeft />
          <span className="hidden sm:flex">Dashboard</span>
        </Link>
        <h1>{page.title || "Editor"}</h1>
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "p-1 px-3 rounded-md border border-neutral-600 hover:bg-neutral-700 transition",
              { "bg-emerald-500 hover:bg-emerald-600": isUpdated }
            )}
            onClick={handleSave}
          >
            Save
          </button>
          <button className="p-1 rounded-md border border-neutral-600 hover:bg-neutral-700 transition">
            <MoreVertical />
          </button>
        </div>
      </div>
    </header>
  );
};
