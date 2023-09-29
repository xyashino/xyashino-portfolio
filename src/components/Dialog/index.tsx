"use client";
import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TransitionBackdrop } from "@/components/Dialog/transitionBackdrop";
import { cn } from "@/lib/utils/cn";
import { className } from "postcss-selector-parser";

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
          <TransitionBackdrop />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-20"
              >
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
