import Link from "next/link";
import React, { useState } from "react";
import { HighlightedText } from "./highlightedText";
import { LanguageSwitch } from "./languageSwitch";

export interface DownloadSectionProps {
  englishResumeUrl: string;
  polishResumeUrl: string;
}

export const DownloadSection = ({
  polishResumeUrl,
  englishResumeUrl,
}: DownloadSectionProps) => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="flex-col flex items-center justify-center space-y-2 lg:space-y-4 m-2 max-w-11/12">
      <p className="text-md lg:text-3xl font-extrabold uppercase italic font-mono text-center">
        Select language of resume
      </p>
      <div className="flex justify-evenly items-center space-x-8 py-2 w-full">
        <HighlightedText highlight={!isEnglish} text="Polish 🇵🇱" />
        <LanguageSwitch isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
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
  );
};
