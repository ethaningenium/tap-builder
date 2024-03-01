import { cn } from "@/shared/lib/utils";
import { CSSProperties, HtmlHTMLAttributes } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Wrapper = (
  props: HtmlHTMLAttributes<HTMLDivElement> & {
    id: string;
  }
) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({ id: props.id });

  const style: CSSProperties = {
    scale: isDragging ? 1.05 : 1,
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "w-full px-8 py-4 border select-none border-neutral-700 rounded-xl flex justify-center items-center bg-white dark:bg-neutral-900 relative",
        props.className
      )}
      {...props}
    >
      <div
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        className="touch-none absolute top-1/2 -translate-y-1/2 left-2 fill-neutral-500"
      >
        <svg viewBox="0 0 20 20" width="20" height="30">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </div>
      {props.children}
    </div>
  );
};
