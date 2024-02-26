"use client";

import { Preview, Save, useCurrent } from "@/features/brick-edit";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const { page } = useCurrent();
  return (
    <header className="w-full fixed border-b border-neutral-700 flex justify-center text-neutral-100 z-50 bg-neutral-900">
      <div className="flex w-full justify-between items-center px-4 container py-3">
        <Link
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition"
          href="/dashboard"
        >
          <ArrowLeft />
          <span className="hidden sm:flex">Dashboard</span>
        </Link>
        <h1>{page.title || "Editor"}</h1>
        <div className="flex items-center gap-4">
          <Save />
          <Preview />
        </div>
      </div>
    </header>
  );
};
