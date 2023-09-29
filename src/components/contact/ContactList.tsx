import React from "react";
import { CONTACT_DATA } from "@/config/constants/contact";

export const ContactList = () => {
  return (
    <div className="flex flex-col my-2 p-2  text-left">
      {CONTACT_DATA.map(({ title, link, text }, i) => (
        <a
          key={i}
          href={link}
          tabIndex={0}
          className="hover:bg-black p-2 text-sm lg:text-4xl uppercase text-black w-full mx-auto font-extrabold focus:text-yellow focus:bg-black font-mono italic hover:text-yellow duration-400"
        >
          {title}&nbsp;{text}
        </a>
      ))}
    </div>
  );
};
