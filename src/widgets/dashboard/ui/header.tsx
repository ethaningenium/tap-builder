import { Profile } from "@/features/profile";

export function Header() {
  return (
    <header className="w-full flex justify-center border-b border-b-neutral-600 py-3">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl text-neutral-100">Dashboard</h1>
        <Profile />
      </div>
    </header>
  );
}
