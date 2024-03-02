import { Page } from "@/entities/pages";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Edit } from "./edit";

export function Card(props: Page) {
  return (
    <div className="rounded-xl border border-neutral-700 flex p-6 flex-col gap-12 justify-between relative flex-1">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-neutral-100 text-2xl">{props.title}</h1>
        <Link
          target="_blank"
          className="flex items-center gap-4  rounded-xl transition"
          href={"/page/" + props.address}
        >
          <p className="text-xs font-light text-neutral-400 hover:underline">
            /{props.address}
          </p>
          <ExternalLink
            className="text-xs font-light text-neutral-400"
            size={16}
          />
        </Link>
      </div>
      <Link
        href={"/edit/" + props.address}
        prefetch={false}
        scroll={false}
        className="px-8 py-2 text-nowrap flex justify-center items-center h-full bg-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-700 rounded     text-white border border-neutral-700 hover:border-emarald-400 duration-300 "
      >
        Open Editor
      </Link>
      <Edit {...props} />
    </div>
  );
}
