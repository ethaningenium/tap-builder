import { getOne } from "@/api/page";
import { Edit, Header } from "@/widgets/edit";

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const page = await getOne(id);

  return (
    <>
      <Header title={page.title} />
      <Edit page={page} />
    </>
  );
}
