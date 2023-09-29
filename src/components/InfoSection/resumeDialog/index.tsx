"use client";
import { Dialog } from "@headlessui/react";
import { AnimatedDialog } from "@/components/Dialog";
import { useDialog } from "@/lib/hooks/useDialog";
import { DownloadSection } from "./downloadSection";
import { Button } from "@/components/Button";

export const ResumeDialog = () => {
  const { isOpen, handleOpen, handleClose } = useDialog();

  return (
    <>
      <Button
        className="mx-auto"
        onClick={handleOpen}
        textClassName="text-3xl md:text-4xl lg:text-5xl"
      >
        Get my Resume
      </Button>
      <AnimatedDialog isOpen={isOpen} close={handleClose}>
        <Dialog.Title
          as="h3"
          className="text-xl lg:text-4xl font-extrabold font-mono leading-6  uppercase italic border-b-2 pb-2"
        >
          Get my Resume
        </Dialog.Title>
        <DownloadSection />
      </AnimatedDialog>
    </>
  );
};
