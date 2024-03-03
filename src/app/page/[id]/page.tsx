import { getOne } from "@/api/page";
import { Render } from "@/features/render";
import { SetTheme } from "@/features/theme";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const page = await getOne(id);
  return {
    title: page.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const page = await getOne(id);
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-950">
      <div className="w-full min-h-screen sm:max-w-[450px] mx-6 rounded-none sm:rounded-xl sm:min-h-[800px] sm:h-auto bg-white dark:bg-neutral-950 relative px-3 py-12">
        <SetTheme theme={page.theme} />
        <Render bricks={page.bricks} />
      </div>
    </main>
  );
}
