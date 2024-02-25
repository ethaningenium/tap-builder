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

export const Text = (props: Brick) => {
  const params = ParseParams(props.params);

  return (
    <p
      className={cn(
        "text-sm font-light text-neutral-700 dark:text-white w-full text-balance text-center",
        {
          "text-left": params.align === "left",
          "text-center": params.align === "center",
          "text-right": params.align === "right",
        }
      )}
    >
      {props.payload}
    </p>
  );
};
