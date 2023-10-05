"use client";
import { Dialog } from "@/components/Dialog";
import { useDialog } from "@/lib/hooks/useDialog";
import { DownloadSection, DownloadSectionProps } from "./downloadSection";
import { Button } from "@/components/Button";

export const ResumeDialog = (props: DownloadSectionProps) => {
  const { isOpen, handleOpen, handleClose } = useDialog();

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
          <DownloadSection {...props} />
        </div>
      </Dialog>
    </>
  );
};
