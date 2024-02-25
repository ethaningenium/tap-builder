import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="flex w-full justify-center gap-12">
      <div className="circle-gradient absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="mt-24 flex flex-col items-center gap-8">
        <h1 className="text-center text-3xl font-extrabold leading-tight md:text-5xl lg:text-[60px]">
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text font-bold text-transparent">
            Создай
          </span>{" "}
          веб-визитку
          <br />
          за{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text font-bold text-transparent">
            30
          </span>{" "}
          секунд
        </h1>
        <p className="items-center text-balance text-center text-xl font-thin text-zinc-400">
          Уникальный сервис для вашего профессионального
          <br />
          онлайн-присутствия
        </p>
        <div className="flex gap-6">
          <button className="rounded-3xl border border-emerald-400 bg-gradient-to-r from-emerald-400 from-20% to-emerald-600 to-100% px-8 py-3 font-semibold transition duration-200 hover:opacity-90">
            Try demo
          </button>
          <button className="flex items-center gap-2 rounded-3xl border border-neutral-500 px-8 py-3 font-semibold  transition duration-200 hover:opacity-90">
            How it works
            <Play size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
