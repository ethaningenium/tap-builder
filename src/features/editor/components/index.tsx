import { Editing } from "./editing";
import { Header } from "./header";
import { useEditStore } from "../services/store";
import { useLayoutEffect } from "react";

export const Editor = () => {
  const { setBricks } = useEditStore();

  useLayoutEffect(() => {
    setBricks([
      {
        id: "1",
        type: "title",
        payload: "Проблемы",
        params: "",
        children: [],
      },
      {
        id: "2",
        type: "title",
        payload: "Решения",
        params: "",
        children: [],
      },
      {
        id: "3",
        type: "text",
        payload: "Вопросы и задачи для решения проблемы",
        params: "",
        children: [],
      },
    ]);
  }, []);
  return (
    <div className="w-full min-h-dvh bg-neutral-800">
      <Header />
      <Editing />
    </div>
  );
};
