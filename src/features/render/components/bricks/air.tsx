type Props = {
  payload: string;
};

export function Air(props: Props) {
  let height = Number(props.payload);
  if (isNaN(height)) {
    height = 20;
  }

  return <div className="w-full" style={{ height: height + "px" }}></div>;
}
