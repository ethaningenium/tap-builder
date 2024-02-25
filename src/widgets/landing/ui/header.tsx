import { headers } from "next/headers";
import Link from "next/link";

export function Header() {
  const token = headers().get("Authorization");
  return (
    <header className="w-full flex justify-center py-4">
      <div className="container flex justify-between items-center">
        <span className="text-3xl font-bold">Logo</span>
        <nav className="flex items-center gap-8">
          <Link href="#">Home</Link>
          <Link href="#">How it works</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About us</Link>
        </nav>
        <Link
          href="/dashboard"
          className="px-8 py-3 rounded-3xl hover:opacity-90 transition duration-200 bg-gradient-to-r from-emerald-400 border border-emerald-400 to-emerald-600 font-semibold"
        >
          Open an account
        </Link>
      </div>
    </header>
  );
}
