"use client";

import { Brick } from "@/entities/pages";
import Image from "next/image";
import React, { useEffect } from "react";

export function Picture(props: Brick & { maxHight?: number; url?: string }) {
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setError(false);
  }, [props.payload, props.url]);

  if (error) {
    return <div>There is no photo or error</div>;
  }
  return (
    <Image
      src={props.url ? props.url : props.payload}
      onError={() => setError(true)}
      alt={"image"}
      width={1280}
      height={720}
      priority
      className="max-w-full object-contain rounded-xl"
      style={{ maxHeight: props.maxHight }}
    />
  );
}
