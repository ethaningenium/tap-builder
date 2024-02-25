import { Balance } from "@/features/brick-edit";
import { AddNewBrick } from "@/features/brick-edit";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCurrent } from "@/features/brick-edit";

export function CurrentBricks() {
  const { bricks, setDragBricks } = useCurrent();

  function getBrickPosition(id: string) {
    return bricks.findIndex((brick) => brick.id === id);
  }
  function handleDragend(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) return;
    setDragBricks((bricks) => {
      const oldIndex = getBrickPosition(String(active.id));
      const newIndex = getBrickPosition(String(over?.id));

      return arrayMove(bricks, oldIndex, newIndex);
    });
  }
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <div className=" w-full flex flex-col gap-2  bg-white dark:bg-neutral-900">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragend}
      >
        <SortableContext items={bricks} strategy={verticalListSortingStrategy}>
          {bricks.map((brick) => (
            <Balance key={brick.id} {...brick} />
          ))}
        </SortableContext>
      </DndContext>
      <AddNewBrick />
    </div>
  );
}
