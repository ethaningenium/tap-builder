import { ThemeToggle } from "@/components/theme-toggle";
import { useEditStore } from "../services/store";
import { BrickLoader } from "./brick-loader";

export const Editing = () => {
  const { bricks } = useEditStore();

  return (
    <main className="pt-24 min-h-dvh w-full flex flex-col items-center justify-start">
      <div className="w-full mx-4 max-w-96 border rounded-lg border-neutral-700 flex flex-col justify-start p-3">
        <div className="w-full flex gap-4 items-start">
          <div className=" w-full h-9  rounded border border-neutral-600"></div>
          <ThemeToggle className="border-neutral-600 text-neutral-300 dark:text-neutral-300 rounded hover:bg-neutral-700" />
        </div>
        <div className=" w-full flex flex-col p-1 gap-2 mt-6  rounded-xl border border-neutral-600 bg-white dark:bg-neutral-800">
          {bricks.map((brick, i) => (
            <BrickLoader key={brick.id} {...brick} position={i} />
          ))}
        </div>
      </div>
    </main>
  );
};
