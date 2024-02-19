import { Brick } from "@/types/Brick";
import { Balancer } from "./balancer";
import { AddNew } from "./add";
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
import { usePage } from "../services/usePage";

export const List = (props: { bricks: Brick[] }) => {
  const { setDragBricks } = usePage();

  function getBrickPosition(id: string) {
    return props.bricks.findIndex((brick) => brick.id === id);
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
        <SortableContext
          items={props.bricks}
          strategy={verticalListSortingStrategy}
        >
          {props.bricks.map((brick) => (
            <Balancer key={brick.id} {...brick} />
          ))}
        </SortableContext>
      </DndContext>
      <AddNew />
    </div>
  );
};
