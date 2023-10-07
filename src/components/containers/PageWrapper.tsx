"use client";
import { m, AnimatePresence } from "framer-motion";
import { DomAnimation } from "@/components/DomAnimation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

interface Prose extends PropsWithChildren {
  className?: string;
}

export const PageWrapper = ({ children, className }: Prose) => (
  <DomAnimation>
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
        className={cn("w-full h-full bg-primary", className)}
      >
        {children}
      </m.div>
    </AnimatePresence>
  </DomAnimation>
);
