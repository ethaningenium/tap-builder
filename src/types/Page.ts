import { Brick } from "./Brick";

export type Page = {
  title: string;
  address: string;
};

export type PageWithBricks = Page & {
  bricks: Brick[];
};
