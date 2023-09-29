import React from "react";
import { Button } from "@/components/Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export const ContactForm = () => {
  return (
    <div className="mt-4 p-4 lg:p-8 mx-2 lg:mx-auto flex flex-col items-center justify-around">
      <h3 className="font-extrabold uppercase text-2xl lg:text-6xl italic text-left border-b-2 lg:border-b-4 pb-4 border-current w-full">
        Send me a message
      </h3>
      <form action="" className="flex flex-col space-y-2 mx-auto w-full mt-4">
        <Input label="Name" id="name" placeholder="Type name..." />
        <Input label="Email" id="email" placeholder="Type emial..." />
        <TextArea label="Message" id="message" placeholder="Type Message..." />
        <Button
          className="bg-black text-white min-w-[300px] mx-auto mt-4"
          skewClassName="bg-black"
        >
          Send
        </Button>
      </form>
    </div>
  );
};
