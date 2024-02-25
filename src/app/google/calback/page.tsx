import { SetTokenComp } from "@/shared/lib/set-token";
import { redirect } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  if (!searchParams.token) {
    redirect("/");
  }

  return <SetTokenComp token={searchParams.token} />;
}
