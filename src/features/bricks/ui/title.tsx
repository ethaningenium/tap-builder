import { Brick } from "@/entities/pages";
import { cn } from "@/shared/lib/utils";

export type TitleParams = {
  size: string;
  align: string;
};

export function ParseTitleParams(params: string) {
  try {
    const parsedParams: TitleParams = JSON.parse(params);
    return parsedParams;
  } catch (error) {
    const parsedParams: TitleParams = { size: "medium", align: "center" };
    return parsedParams;
  }
}

export const Title = (props: Brick) => {
  const params = ParseTitleParams(props.params);
  return (
    <h1
      className={cn(
        "text-2xl font-bold w-full text-center text-neutral-800 dark:text-white",
        {
          "text-left": params.align === "left",
          "text-center": params.align === "center",
          "text-right": params.align === "right",
          "text-3xl": params.size === "large",
          "text-2xl": params.size === "medium",
          "text-xl": params.size === "small",
        }
      )}
    >
      {props.payload}
    </h1>
  );
};
