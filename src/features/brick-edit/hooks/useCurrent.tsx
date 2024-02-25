import { Page, Brick } from "@/entities/pages";
import { useCurrentPage } from "../store/current-editing";
import { useSave } from "./useSave";

export function useCurrent() {
  const { bricks, setPage, setBricks, changeBrick, deleteBrick, addBrick } =
    useCurrentPage();
  const { BricksUpdated } = useSave();
  function setInitialPage(page: Page) {
    setPage(page);
    setBricks(page.bricks);
  }

  function handleAddBrick(brick: Brick) {
    addBrick(brick);
    BricksUpdated();
  }
  function setDragBricks(cb: (bricks: Brick[]) => Brick[]) {
    const newBricks = cb(bricks);
    setBricks(newBricks);
    BricksUpdated();
  }
  function handleChangeBrick(brick: Brick) {
    changeBrick(brick);
    BricksUpdated();
  }

  function handleDeleteBrick(id: string) {
    deleteBrick(id);
    BricksUpdated();
  }
  return {
    bricks,
    setInitialPage,
    setDragBricks,
    handleChangeBrick,
    handleDeleteBrick,
    handleAddBrick,
  };
}
