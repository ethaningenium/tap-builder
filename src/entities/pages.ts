export type PageMeta = {
  id: string;
  title: string;
  address: string;
};

export type Page = PageMeta & {
  bricks: Brick[];
};

export type Brick = {
  id: string;
  type: string;
  payload: string;
  params: string;
  children: string[];
};
