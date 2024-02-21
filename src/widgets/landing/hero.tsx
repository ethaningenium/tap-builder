import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full flex justify-center gap-12">
      <div className="circle-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="mt-24 flex flex-col gap-8 items-center">
        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-extrabold text-center leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent font-bold">
            Создай
          </span>{" "}
          веб-визитку
          <br />
          за{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-bold">
            30
          </span>{" "}
          секунд
        </h1>
        <p className="items-center text-balance font-thin text-xl text-zinc-400 text-center">
          Уникальный сервис для вашего профессионального
          <br />
          онлайн-присутствия
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-3 rounded-3xl hover:opacity-90 transition duration-200 bg-gradient-to-r from-emerald-400 from-20% to-100% border border-emerald-400 to-emerald-600 font-semibold">
            Try demo
          </button>
          <button className="px-8 py-3 flex items-center gap-2 rounded-3xl hover:opacity-90 transition duration-200  border border-neutral-500 font-semibold">
            How it works
            <Play size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
