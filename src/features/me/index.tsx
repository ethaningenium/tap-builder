import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function Me({ children }: { children: React.ReactNode }) {
  return children;
}
