import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export const TransitionBackdrop = () => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300 transition-transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="ease-in duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed inset-0 bg-secondary/80" />
    </Transition.Child>
  );
};
