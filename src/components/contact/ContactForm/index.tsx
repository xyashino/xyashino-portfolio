"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { sendEmail } from "@/lib/actions/send-email";
import {
  EmailDialog,
  ResultDialogProps,
} from "@/components/dialogs/EmailDialog";

export const ContactForm = () => {
  const [result, setResult] = useState<Omit<ResultDialogProps, "handleClose">>({
    isOpen: false,
    messages: [],
    isLoading: false,
  });

  const handleAction = async (e: FormData) => {
    const result = await sendEmail(e);
    setResult({
      isOpen: true,
      messages: result.error ?? result.message ?? [],
      isLoading: false,
    });
  };

  const handleClose = () => {
    setResult({ isOpen: false, messages: [], isLoading: false });
  };

  const setLoadingState = () => {
    setResult({
      isOpen: true,
      messages: ["Sending a message..."],
      isLoading: true,
    });
  };

  return (
    <div className="mt-4 p-4 lg:p-8 mx-2 lg:mx-auto flex flex-col items-center justify-around w-full">
      <h3 className="font-extrabold uppercase text-2xl md:text-4xl lg:text-6xl italic text-left border-b-2 lg:border-b-4 pb-4 border-current w-full">
        Send me a message
      </h3>
      <form
        action={handleAction}
        onSubmit={setLoadingState}
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
      <EmailDialog {...result} handleClose={handleClose} />
    </div>
  );
};
