// import { useTheme } from "@/services/useTheme";

import { Title, Text } from "@/components/bricks";

export const Published: React.FC = () => {
  // const { setDark, setLight } = useTheme();
  return (
    <div className="w-full sticky min-h-dvh bg-neutral-900 flex justify-center items-start sm:py-12">
      <main className="flex flex-col gap-6 items-center w-full justify-start sm:w-[600px] bg-white dark:bg-neutral-900 min-h-dvh sm:min-h-[800px] p-6 sm:rounded-2xl">
        <Title title="Published" />
        <Text text="My name is TAP, and I am a developer. I am a developer. Who am I? Tell me more" />
      </main>
    </div>
  );
};
