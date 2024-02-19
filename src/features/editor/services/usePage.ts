import { PageWithBricks } from "@/types/Page";
import { useEditStore } from "./store";
import { useEffect, useState } from "react";
import { Brick } from "@/types/Brick";

export const usePage = () => {
  const { page, bricks, setBricks } = useEditStore();
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(true);
  }, [bricks, page]);

  function setDragBricks(cb: (bricks: Brick[]) => Brick[]) {
    const newBricks = cb(bricks);
    setBricks(newBricks);
  }

  function onSave(cb: (page: PageWithBricks) => void) {
    cb({ ...page, bricks });
    setIsUpdated(false);
  }
  return { onSave, isUpdated, setDragBricks };
};
