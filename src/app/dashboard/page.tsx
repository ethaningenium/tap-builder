import { getAll } from "@/api/page";
import { DashBoard, Header } from "@/widgets/dashboard";
import { headers } from "next/headers";

export default async function Pages() {
  const token = headers().get("Authorization");

  if (!token) throw new Error();
  const pages = await getAll(token);

  return (
    <>
      <Header />
      <DashBoard pages={pages} />
    </>
  );
}
