"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { sendEmail } from "@/lib/actions/send-email";
import {
  ResultDialog,
  ResultDialogProps,
} from "@/components/dialogs/ResultDialog";

export const ContactForm = () => {
  const [result, setResult] = useState<Omit<ResultDialogProps, "handleClose">>({
    isOpen: false,
    message: "",
    isLoading: false,
  });

  const handleAction = async (e: FormData) => {
    setResult({ isOpen: true, message: "Sending message...", isLoading: true });
    const result = await sendEmail(e);
    setResult({
      isOpen: true,
      message: result.error ?? result.message ?? "",
      isLoading: false,
    });
  };

  const handleClose = () => {
    setResult({ isOpen: false, message: "", isLoading: false });
  };

  return (
    <div className="mt-4 p-4 lg:p-8 mx-2 lg:mx-auto flex flex-col items-center justify-around w-full">
      <h3 className="font-extrabold uppercase text-2xl md:text-4xl lg:text-6xl italic text-left border-b-2 lg:border-b-4 pb-4 border-current w-full">
        Send me a message
      </h3>
      <form
        action={handleAction}
        className="flex flex-col space-y-2 mx-auto w-full mt-4"
      >
        <Input
          label="Name"
          id="name"
          placeholder="Type name..."
          autocomplete="given-name"
        />
        <Input
          label="Email"
          id="email"
          placeholder="Type emial..."
          autocomplete="email"
        />
        <TextArea label="Message" id="message" placeholder="Type Message..." />
        <Button
          className="bg-black text-white min-w-[300px] mx-auto mt-6"
          skewClassName="bg-black"
        >
          Send
        </Button>
      </form>
      <ResultDialog {...result} handleClose={handleClose} />
    </div>
  );
};
