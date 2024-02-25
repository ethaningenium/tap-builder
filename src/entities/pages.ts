export type PageMeta = {
  id: string;
  title: string;
  address: string;
  theme: string;
  favicon: string;
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
