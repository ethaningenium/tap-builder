type Props = {
  payload: string;
};

export function Line(props: Props) {
  const isDashed = props.payload === "dashed";

  if (isDashed) {
    return (
      <div className="w-full h-6 border-b mb-6 border-dashed border-neutral-800 dark:border-neutral-400"></div>
    );
  }
  return (
    <div className="w-full h-6 border-b mb-6 border-solid border-neutral-800 dark:border-neutral-400"></div>
  );
}
