import { Brick } from "@/entities/pages";
import { cn } from "@/shared/lib/utils";

type TextParams = {
  size: string;
  align: string;
};

export function ParseTextParams(params: string) {
  try {
    const parsedParams: TextParams = JSON.parse(params);
    return parsedParams;
  } catch (error) {
    const parsedParams: TextParams = { size: "medium", align: "center" };
    return parsedParams;
  }
}

export const Text = (props: Brick) => {
  const params = ParseTextParams(props.params);

  return (
    <p
      className={cn(
        "text-sm font-light text-neutral-700 dark:text-white w-full text-balance text-center",
        {
          "text-left": params.align === "left",
          "text-center": params.align === "center",
          "text-right": params.align === "right",
          "text-base": params.size === "large",
          "text-sm": params.size === "medium",
          "text-xs": params.size === "small",
        }
      )}
    >
      {props.payload}
    </p>
  );
};
