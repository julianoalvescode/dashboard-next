"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/utils/format-bytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";

export function FileList() {
  const { files, onFileRemoved } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            onFileRemoved={onFileRemoved}
            file={file}
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        );
      })}
    </div>
  );
}
