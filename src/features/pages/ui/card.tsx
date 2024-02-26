import { Page } from "@/entities/pages";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Edit } from "./edit";

export function Card(props: Page) {
  return (
    <div className="rounded-xl border border-neutral-700 flex p-6 flex-col gap-12 justify-between relative flex-1">
      <div className="w-full flex flex-wrap gap-4 items-center">
        <h1 className="text-neutral-100 text-2xl">{props.title}</h1>
        <Link
          target="_blank"
          className="flex items-center gap-4 px-6 py-3 rounded-xl hover:bg-neutral-700 transition"
          href={"/page/" + props.address}
        >
          <p className="text-xs font-light text-neutral-400">
            /{props.address}
          </p>
          <ExternalLink
            className="text-xs font-light text-neutral-400"
            size={16}
          />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <Edit {...props} />
        <Link
          href={"/edit/" + props.address}
          prefetch={false}
          scroll={false}
          className="px-8 text-nowrap flex justify-center items-center h-full bg-transparent hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-700 rounded shadow shadow-neutral-800 hover:shadow-2xl hover:shadow-emerald-400 text-white border border-neutral-700 hover:border-emarald-400 duration-300 "
        >
          Open Editor
        </Link>
      </div>
    </div>
  );
}
