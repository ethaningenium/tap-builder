import { PageWithBricks } from "@/types/Page";
import { useEditStore } from "./store";
import { useEffect, useState } from "react";

export const usePage = () => {
  const { page, bricks } = useEditStore();
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(true);
  }, [bricks, page]);
  function onSave(cb: (page: PageWithBricks) => void) {
    cb({ ...page, bricks });
    setIsUpdated(false);
  }
  return { onSave, isUpdated };
};
