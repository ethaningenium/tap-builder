"use client";

import { useUser } from "@/features/auth";

export function Header() {
  const { user } = useUser();
  return (
    <header className="w-full flex justify-center border-b border-b-neutral-600 py-3">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl text-neutral-100">Dashboard</h1>
        <p className="text-neutral-300">{user.email}</p>
      </div>
    </header>
  );
}
