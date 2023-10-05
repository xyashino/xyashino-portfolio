import { domAnimation, LazyMotion } from "framer-motion";
import { PropsWithChildren } from "react";

export const DomAnimation = ({ children }: PropsWithChildren) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);
