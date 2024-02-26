"use client";

import { UploadDropzone } from "./upload";

type UploadProps = {
  onUploadComplete: (url: string) => void;
  label: string;
};

export function Upload(props: UploadProps) {
  return (
    <UploadDropzone
      content={{
        label: props.label,
      }}
      className={` text-neutral-100 ut-label:text-white ut-button:bg-white
          ut-button:after:bg-emerald-500
         ut-button:text-neutral-950 border border-neutral-400 ut-uploading:ut-button:bg-neutral-300`}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        props.onUploadComplete(res[0].url);
      }}
      onUploadError={(e) => {
        alert(`Upload failed, reason: ${e.cause}`);
      }}
      onUploadProgress={() => {}}
    />
  );
}
