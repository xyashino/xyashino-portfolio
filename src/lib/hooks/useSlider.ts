import { useEffect, useState } from "react";

export const useSlider = (maxItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxItems ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxItems : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxItems ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, maxItems]);

  return { currentIndex, nextSlide, prevSlide };
};
