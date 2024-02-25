import { cn } from "@/shared/lib/utils";
import { useSave } from "../hooks/useSave";

export function Save() {
  const { shouldSave, isSaving, handleSave } = useSave();

  return (
    <button
      className={cn(
        "p-1 px-3 rounded-md border disabled:bg-neutral-900 border-neutral-600 cursor-pointer disabled:cursor-not-allowed transition bg-emerald-500 hover:bg-emerald-600"
      )}
      onClick={handleSave}
      disabled={!shouldSave || isSaving}
    >
      Save
    </button>
  );
}
