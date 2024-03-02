import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex w-full justify-center gap-12 flex-col items-center">
      <div className="circle-gradient absolute left-1/2 -top-32 md:top-0 -translate-x-1/2"></div>
      <div className="mt-24 flex flex-col items-center gap-8">
        <h1 className="text-center text-3xl font-extrabold text-balance max-w-3xl leading-tight md:text-5xl lg:text-[60px]">
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text font-bold text-transparent">
            Create
          </span>{" "}
          a web business card in{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text font-bold text-transparent">
            30
          </span>{" "}
          seconds
        </h1>
        <p className="items-center text-balance max-w-72 text-center text-sm sm:text-base lg:text-xl font-thin text-zinc-400">
          A unique service for your professional online presence
        </p>
        <div className="flex gap-6">
          <Link
            href="/dashboard"
            className="rounded-3xl border border-emerald-400 bg-gradient-to-r from-emerald-400 from-20% to-emerald-600 to-100% py-2 px-6 lg:px-8 lg:py-3 font-semibold transition duration-200 hover:opacity-90"
          >
            Try demo
          </Link>
          <Link
            href="#what"
            scroll={true}
            className="flex items-center gap-2 rounded-3xl border border-neutral-500 py-2 px-6 lg:px-8 lg:py-3 font-semibold  transition duration-200 hover:opacity-90"
          >
            How it works
            <Play size={18} />
          </Link>
        </div>
      </div>
      <Image
        alt="hero"
        src="/hero.png"
        width={500}
        height={500}
        className="w-5/6 rounded-2xl border-4 border-emerald-300/20"
        priority
      ></Image>
    </div>
  );
}
