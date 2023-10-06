"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/dialogs/Dialog";
import { useDialog } from "@/lib/hooks/useDialog";
import { Button } from "@/components/Button";
import { HighlightedText } from "./highlightedText";
import { LanguageSwitch } from "./languageSwitch";
import Link from "next/link";

interface Props {
  polishResumeUrl: string;
  englishResumeUrl: string;
}

export const ResumeDialog = ({ polishResumeUrl, englishResumeUrl }: Props) => {
  const { isOpen, handleOpen, handleClose } = useDialog();
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <>
      <Button
        className="mx-auto"
        onClick={handleOpen}
        textClassName="text-xl md:text-2xl lg:text-5xl"
      >
        Get my Resume
      </Button>
      <Dialog isOpen={isOpen} close={handleClose}>
        <div className="bg-accent p-8">
          <h3 className="text-xl lg:text-4xl font-extrabold font-mono leading-6  uppercase italic border-b-2 pb-2 select-none">
            Get my Resume
          </h3>
          <div className="flex-col flex items-center justify-center space-y-2 lg:space-y-4 m-2 max-w-11/12">
            <p className="text-md lg:text-3xl font-extrabold uppercase italic font-mono text-center">
              Select language of resume
            </p>
            <div className="flex justify-evenly items-center space-x-8 py-2 w-full">
              <HighlightedText highlight={!isEnglish} text="Polish 🇵🇱" />
              <LanguageSwitch
                isEnglish={isEnglish}
                setIsEnglish={setIsEnglish}
              />
              <HighlightedText highlight={isEnglish} text="English 🇬🇧" />
            </div>
            <Link
              href={isEnglish ? englishResumeUrl : polishResumeUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="block cursor-pointer py-2 px-8 lg:text-xl italic uppercase font-bold border-2 border-2-white text-center hover:bg-secondary hover:text-secondary-content transition-colors duration-300 ease-in-out hover:border-secondary"
            >
              Click to see my resume
            </Link>
          </div>
        </div>
      </Dialog>
    </>
  );
};
