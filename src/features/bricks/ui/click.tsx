"use client";

import { Brick } from "@/entities/pages";
import Link from "next/link";
import {
  Github,
  Web,
  Telegram,
  X,
  Tiktok,
  Instagram,
  Twitch,
  WhatsApp,
  Youtube,
  Facebook,
} from "../svg/icons";

const iconsLink = {
  github: ["https://github.com", "github.com"],
  telegram: ["https://t.me", "telegram.me", "t.me"],
  tiktok: ["https://www.tiktok.com", "tiktok.com"],
  instagram: ["https://www.instagram.com", "instagram.com"],
  twitch: ["https://www.twitch.tv", "twitch.tv"],
  whatsapp: ["https://wa.me", "whatsapp.com", "wa.me"],
  youtube: ["https://www.youtube.com", "youtube.com"],
  facebook: ["https://www.facebook.com", "facebook.com"],
  x: ["https://x.com", "x.com", "https://twitter.com", "twitter.com"],
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
    case "telegram":
      return <Telegram className="w-6 h-6" />;
    case "tiktok":
      return <Tiktok className="w-6 h-6" />;
    case "instagram":
      return <Instagram className="w-6 h-6" />;
    case "twitch":
      return <Twitch className="w-6 h-6" />;
    case "whatsapp":
      return <WhatsApp className="w-6 h-6" />;
    case "youtube":
      return <Youtube className="w-6 h-6" />;
    case "facebook":
      return <Facebook className="w-6 h-6" />;
    case "x":
      return <X className="w-6 h-6" />;
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
      className="cursor-pointer flex w-full transition duration-200 justify-center relative border border-neutral-600 rounded-full max-w-full px-12 py-4 items-center hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      <div className="p-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-2">
        <Balance url={params.url} />
      </div>
      <span className="text-xl font-medium text-neutral-800 dark:text-white">
        {props.payload}
      </span>
    </Link>
  );
}
