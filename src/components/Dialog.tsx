"use client";
import { PropsWithChildren, useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { DomAnimation } from "@/components/DomAnimation";
import { cn } from "@/lib/utils/cn";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  close: () => void;
  className?: string;
  bgClassName?: string;
}

export const Dialog = ({ children, isOpen, close, bgClassName }: Props) => {
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
      <DomAnimation>
        <AnimatePresence initial={isOpen}>
          {isOpen && (
            <m.div
              key="modal"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
              exit={{ x: "100%" }}
              className={cn(
                "fixed inset-0 flex justify-center items-center bg-secondary/80 z-50",
                bgClassName,
              )}
              onClick={close}
            >
              <m.div
                className="w-full max-w-2xl transform overflow-hidden  text-left align-middle drop-shadow-lg shadow-black transition-all text-white selection:bg-yellow selection:text-black space-y-4"
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
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </DomAnimation>
    </div>
  );
};
