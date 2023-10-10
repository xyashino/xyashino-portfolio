"use client";
import { PropsWithChildren, useRef } from "react";
import { useInView } from "framer-motion";

interface Props extends PropsWithChildren<any> {
  reverse: boolean;
  useDelay?: boolean;
}

export const ProjectCardAnimation = ({
  children,
  reverse,
  useDelay = false,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const opacityClass = isInView ? "opacity-100" : "opacity-0";
  const transformClass = reverse
    ? isInView
      ? "translate-x-0"
      : "translate-x-48"
    : isInView
    ? "translate-x-0"
    : "-translate-x-48";

  const delayClass = useDelay ? "lg:delay-500" : "";
  return (
    <div ref={ref} className="flex flex-col space-y-12 pb-12">
      <div
        className={` transition-all duration-700 ease-in-out  ${opacityClass} ${transformClass} ${delayClass}`}
      >
        {children}
      </div>
    </div>
  );
};
