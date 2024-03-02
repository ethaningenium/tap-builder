"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-center">
          Something
          <br />
          went wrong
        </h1>
        <p>Please try again later</p>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-3xl hover:opacity-90 transition duration-200 bg-gradient-to-r from-emerald-400 border border-emerald-400 to-emerald-600 font-semibold"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
