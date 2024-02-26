import { Edit, Header } from "@/widgets/edit";

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <>
      <Header />
      <Edit id={id} />
    </>
  );
}
