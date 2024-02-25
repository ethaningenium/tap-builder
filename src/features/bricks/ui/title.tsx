import { Brick } from "@/entities/pages";
import { cn } from "@/shared/lib/utils";

type Params = {
  size: string;
  align: string;
};

function ParseParams(params: string) {
  try {
    const parsedParams: Params = JSON.parse(params);
    return parsedParams;
  } catch (error) {
    const parsedParams: Params = { size: "1", align: "left" };
    return parsedParams;
  }
}

export const Title = (props: Brick) => {
  const params = ParseParams(props.params);
  return (
    <h1
      className={cn(
        "text-2xl font-bold w-full text-center text-neutral-800 dark:text-white",
        {
          "text-left": params.align === "left",
          "text-center": params.align === "center",
          "text-right": params.align === "right",
        }
      )}
    >
      {props.payload}
    </h1>
  );
};
