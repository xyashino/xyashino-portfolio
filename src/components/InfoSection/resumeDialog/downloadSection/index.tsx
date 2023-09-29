import React, { useState } from "react";
import { HighlightedText } from "./highlightedText";
import { DownloadSectionSwitch } from "./downloadSectionSwitch";
import { DowloadResumeBtn } from "./dowloadResumeBtn";

export const DownloadSection = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <div>
      <p className="text-2xl lg:text-3xl font-extrabold uppercase italic font-mono text-center">
        Select language of resume
      </p>
      <div className="flex justify-evenly items-center space-x-8 py-2 w-full">
        <HighlightedText highlight={!isEnglish} text="Polish 🇵🇱" />
        <DownloadSectionSwitch
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
        />
        <HighlightedText highlight={isEnglish} text="English 🇬🇧" />
      </div>
      <section>
        <div className="flex justify-between space-x-8 py-2">
          <DowloadResumeBtn
            text="Download"
            href="/resume.pdf"
            download="resume.pdf"
          />
          <DowloadResumeBtn
            text="Online"
            href="/resume.pdf"
            download="resume.pdf"
          />
        </div>
      </section>
    </div>
  );
};
