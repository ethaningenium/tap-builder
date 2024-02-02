type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return (
    <h1 className="text-3xl font-bold w-full text-center text-neutral-800 dark:text-white">
      {props.title}
    </h1>
  );
};
