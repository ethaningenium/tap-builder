import { ArrowLeft, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full fixed border-b border-neutral-700 flex justify-center text-neutral-100">
      <div className="flex w-full justify-between items-center px-4 container py-3">
        <Link
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition"
          to="/dashboard"
        >
          <ArrowLeft />
          <span className="hidden sm:flex">Dashboard</span>
        </Link>
        <h1>Editor</h1>
        <div className="flex items-center gap-4">
          <button className="p-1 px-3 rounded-md border border-neutral-600 hover:bg-neutral-700 transition">
            Save
          </button>
          <button className="p-1 rounded-md border border-neutral-600 hover:bg-neutral-700 transition">
            <MoreVertical />
          </button>
        </div>
      </div>
    </header>
  );
};
