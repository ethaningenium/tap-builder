import { Brick } from "@/entities/pages";
import Link from "next/link";
import { Github, Web } from "../svg/icons";

const iconsLink = {
  github: ["https://github.com", "github.com"],
  web: ["https://", "http://"],
};

function findIcon(url: string) {
  for (const [key, value] of Object.entries(iconsLink)) {
    for (let i = 0; i < value.length; i++) {
      if (url?.startsWith(value[i])) {
        return key;
      }
    }
  }
  return "web";
}

function Balance(props: { url: string }) {
  const icon = findIcon(props.url);
  switch (icon) {
    case "github":
      return <Github className="w-6 h-6" />;
    case "web":
      return <Web className="w-6 h-6" />;
    default:
      return null;
  }
}

export type ClickParams = {
  url: string;
};

export function ParseClickParams(params: string) {
  try {
    const parsedParams: ClickParams = JSON.parse(params);
    return parsedParams;
  } catch (error) {
    const parsedParams: ClickParams = { url: "/" };
    return parsedParams;
  }
}

export function Click(props: Brick) {
  const params = ParseClickParams(props.params);
  return (
    <Link
      href={params.url}
      target="_blank"
      className="cursor-pointer flex w-full transition duration-200 justify-center relative bg-neutral-800 rounded-full max-w-full px-12 py-4 items-center hover:bg-neutral-700"
    >
      <div className="p-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-2">
        <Balance url={params.url} />
      </div>
      <span className="text-xl font-medium">{props.payload}</span>
    </Link>
  );
}
