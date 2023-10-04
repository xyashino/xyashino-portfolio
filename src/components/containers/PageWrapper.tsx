"use client";

import { m, AnimatePresence } from "framer-motion";
import { DomAnimation } from "@/components/DomAnimation";
import { PropsWithChildren } from "react";

export const PageWrapper = ({ children }: PropsWithChildren) => (
  <>
    <DomAnimation>
      <AnimatePresence mode="popLayout">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
          }}
          className="w-full h-full"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </DomAnimation>
  </>
);
