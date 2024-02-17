import { Editing } from "./editing";
import { Header } from "./header";

export const Editor = () => {
  return (
    <div className="w-full min-h-dvh bg-neutral-900">
      <Header />
      <Editing />
    </div>
  );
};
