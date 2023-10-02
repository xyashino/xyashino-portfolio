"use client";
import { PropsWithChildren, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  close: () => void;
  className?: string;
}

export const AnimatedDialog = ({ children, isOpen, close }: Props) => {
  const focusRef = useFocusTrap();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return (
    <div ref={focusRef}>
      <AnimatePresence initial={isOpen}>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
            }}
            exit={{ x: "100%" }}
            className="fixed inset-0 flex justify-center items-center bg-secondary/80 z-50"
            onClick={close}
          >
            <motion.div
              className="bg-accent w-full max-w-2xl transform overflow-hidden  p-8 text-left align-middle drop-shadow-lg shadow-black transition-all text-white selection:bg-yellow selection:text-black space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.2,
                delay: 0.2,
              }}
              onClick={(e) => e.stopPropagation()}
              tabIndex={0}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
