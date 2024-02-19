type Props = {
  payload: string;
};

export const Title = (props: Props) => {
  return (
    <h1 className="text-2xl font-bold w-full text-center text-neutral-800 dark:text-white">
      {props.payload}
    </h1>
  );
};