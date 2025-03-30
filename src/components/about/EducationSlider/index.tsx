"use client";
import {DisplayAnimatedSlide} from "@/components/about/EducationSlider/DisplayAnimatedSlide";
import {SlideController} from "@/components/about/EducationSlider/SlideController";
import {DomAnimation} from "@/components/dom-animation";
import {useSlider} from "@/lib/hooks/useSlider";
import {SlideItem} from "@/types/slide";
import {m} from "framer-motion";

interface Props {
  slides: SlideItem[];
}

export const EducationSlider = ({slides}: Props) => {
  const {nextSlide, prevSlide, currentIndex} = useSlider(slides.length - 1);

  return (
    <DomAnimation>
      <m.section
        className='w-11/12 lg:w-5/6 overflow-hidden'
        initial={{opacity: 0, translateY: "100%"}}
        animate={{opacity: 1, translateY: 0}}
        transition={{
          duration: 0.3,
          ease: "easeIn",
          delay: 0.3,
        }}
      >
        <div className='items-end justify-between flex sm:pe-6 lg:pe-8 mb-4'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Education
          </h2>
          <div className='mt-8 flex gap-4 lg:mt-0 select-none place-self-end text-xl'>
            <SlideController changeSlide={prevSlide} iconClasses='rotate-180' />
            <SlideController changeSlide={nextSlide} />
          </div>
        </div>
        <DisplayAnimatedSlide currentIndex={currentIndex} slides={slides} />
      </m.section>
    </DomAnimation>
  );
};
