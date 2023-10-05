import { cn } from "@/lib/utils/cn";
import React from "react";

interface Props {
  highlight: boolean;
  text: string;
}

export const HighlightedText = ({ text, highlight }: Props) => {
  return (
    <p
      className={cn(
        "text-md lg:text-xl font-extrabold uppercase italic font-mono transition-colors text-center",
        highlight && `bg-secondary text-secondary-content`,
      )}
    >
      {text}
    </p>
  );
};
