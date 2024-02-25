import { Eye } from "lucide-react";
import { usePreview } from "../store/preview";
import { cn } from "@/shared/lib/utils";

export function Preview() {
  const { isPreview, togglePreview } = usePreview();
  return (
    <button
      className={cn(
        "p-1 rounded-md border border-neutral-700 hover:bg-neutral-800 transition text-neutral-500",
        {
          "text-neutral-100": isPreview,
        }
      )}
      onClick={togglePreview}
    >
      <Eye />
    </button>
  );
}
