import { Eye } from "lucide-react";
import { ThemeToggle } from "@/shared/theme-toggle";
import { useEditStore } from "../services/store";
import { Render } from "@/features/render";
import { useEffect, useState } from "react";
import { cn } from "@/libs/cn";
import { List } from "./list";
import { GetPage } from "../services/fetching";
import { useParams } from "react-router-dom";

export const Editing = () => {
  const [isPreview, setIsPreview] = useState(false);
  const { bricks, setBricks, setPage } = useEditStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      GetPage(id).then((res) => {
        if (res.status === 200) {
          if (res.data) {
            setBricks(res.data.bricks);
            setPage({
              id: res.data.id,
              title: res.data.title,
              address: res.data.address,
            });
          }
        }
      });
    }
  }, []);

  function togglePreview() {
    setIsPreview(!isPreview);
  }
  return (
    <main className="pt-24 min-h-dvh w-full flex flex-col items-center justify-start">
      <div className="w-full mx-4 max-w-96 border rounded-lg border-neutral-700 flex flex-col justify-start p-3 gap-6">
        <div className="w-full flex gap-4 items-start ">
          <div className=" w-full h-9  rounded border border-neutral-600">
            <button
              onClick={togglePreview}
              className={cn(
                "w-full h-full hover:bg-neutral-700 transition flex justify-center gap-2 items-center text-white",
                { "bg-emerald-500 hover:bg-emerald-600": isPreview }
              )}
            >
              <Eye size={20} strokeWidth={1} />
              <span>Show preview</span>
            </button>
          </div>
          <ThemeToggle className="border-neutral-600 text-neutral-300 dark:text-neutral-300 rounded hover:bg-neutral-700" />
        </div>
        {isPreview ? (
          <Render bricks={bricks} className="dark:border border-neutral-700" />
        ) : (
          <List bricks={bricks} />
        )}
      </div>
    </main>
  );
};
