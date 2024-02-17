import { Brick } from "./Brick";

export type Page = {
  id: string;
  title: string;
  address: string;
};

export type PageWithBricks = Page & {
  bricks: Brick[];
};
