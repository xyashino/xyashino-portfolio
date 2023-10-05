import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  download?: string;
  href: string;
}

export const DowloadResumeBtn = ({ text, download = "", href }: Props) => {
  return (
    <Link
      href={href}
      download={download}
      className="grow p-2 italic uppercase font-bold border-2 border-2-white text-center hover:bg-secondary hover:text-secondary-content transition-colors duration-300 ease-in-out hover:border-secondary"
    >
      {text}
    </Link>
  );
};
