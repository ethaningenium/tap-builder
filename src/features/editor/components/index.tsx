import { Editing } from "./editing";
import { Header } from "./header";
import { useEditStore } from "../services/store";
import { useLayoutEffect } from "react";
import { v4 } from "uuid";

export const Editor = () => {
  const { setBricks } = useEditStore();

  useLayoutEffect(() => {
    setBricks([
      {
        id: v4(),
        type: "title",
        payload: "Проблемы",
        params: "",
        children: [],
      },
      {
        id: v4(),
        type: "title",
        payload: "Решения",
        params: "",
        children: [],
      },
      {
        id: v4(),
        type: "text",
        payload: "Вопросы и задачи для решения проблемы",
        params: "",
        children: [],
      },
    ]);
  }, []);
  return (
    <div className="w-full min-h-dvh bg-neutral-900">
      <Header />
      <Editing />
    </div>
  );
};
