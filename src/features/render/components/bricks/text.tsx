type Props = {
  payload: string;
};

export const Text = (props: Props) => {
  return (
    <p className="text-sm font-light text-neutral-700 dark:text-white w-full text-balance text-center">
      {props.payload}
    </p>
  );
};
