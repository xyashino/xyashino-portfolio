import React from "react";
import { Slide } from "@/components/EducationSlider/Slide";
import { m } from "framer-motion";
import { SlideItem } from "@/types/slide";

interface Props {
  currentIndex: number;
  slides: SlideItem[];
}

export const DisplayAnimatedSlide = ({ slides, currentIndex }: Props) => {
  return (
    <m.div
      className="flex"
      animate={{ x: `-${100 * currentIndex}%` }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
    >
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </m.div>
  );
};
