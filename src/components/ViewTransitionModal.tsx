"use client";

import useAnimatedRouter from "@/lib/hooks/useAnimatedRouter";
import { useDialog } from "@/lib/hooks/useDialog";
import { AnimatedDialog } from "@/components/Dialog";
import { Dialog } from "@headlessui/react";

export const ViewTransitionModal = () => {
  const { viewTransitionsStatus } = useAnimatedRouter();
  const data = sessionStorage.getItem("viewTransition");
  const { isOpen, handleClose } = useDialog(
    !data && !viewTransitionsStatus().isSupported,
  );

  const close = () => {
    sessionStorage.setItem("viewTransition", "true");
    handleClose();
  };

  return (
    <AnimatedDialog isOpen={isOpen} close={close} className="max-w-7xl">
      <Dialog.Title
        as="h3"
        className="text-xl lg:text-3xl font-extrabold font-mono leading-6  uppercase border-b-2 pb-2 italic"
      >
        View Transition not supported !
      </Dialog.Title>
      <p className="text-lg p-6 font-mono italic font-extrabold">
        This feature is not supported by your browser. For better experience
        please use a modern browser like Chrome , Edge or Opera.
      </p>
      <button
        onClick={close}
        className="border-white border-2  mx-auto font-bold py-2 px-4  uppercase w-full hover:bg-yellow hover:text-black hover:border-yellow transition-colors"
      >
        Ok
      </button>
    </AnimatedDialog>
  );
};
