"use client";
import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils/cn";
import { className } from "postcss-selector-parser";
import {
  MODAL_BACKGROUND_TRANSITION,
  MODAL_CONTENT_TRANSITION,
} from "@/config/constants/transitions";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  close: () => void;
  className?: string;
}

export const AnimatedDialog = ({ children, isOpen, close }: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={close} className="relative z-30" as="div">
          {/*Backdrop*/}
          <Transition.Child as={Fragment} {...MODAL_BACKGROUND_TRANSITION}>
            <div className="fixed inset-0 bg-secondary/80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} {...MODAL_CONTENT_TRANSITION}>
                <Dialog.Panel
                  className={cn(
                    "bg-accent w-full max-w-2xl transform overflow-hidden  p-8 text-left align-middle drop-shadow-lg shadow-black transition-all text-white selection:bg-yellow selection:text-black space-y-4",
                    className,
                  )}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
