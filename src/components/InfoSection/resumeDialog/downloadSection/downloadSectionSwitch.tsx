import { Switch } from "@headlessui/react";
import { cn } from "@/lib/utils/cn";
import React from "react";

interface Props {
  isEnglish: boolean;
  setIsEnglish: (isEnglish: boolean) => void;
}

export const DownloadSectionSwitch = ({ isEnglish, setIsEnglish }: Props) => {
  return (
    <Switch
      checked={isEnglish}
      onChange={setIsEnglish}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary text-secondary-content"
    >
      <span className="sr-only">Select resume language</span>
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full transition bg-secondary-content",
          isEnglish ? "translate-x-6" : "translate-x-1",
        )}
      />
    </Switch>
  );
};
