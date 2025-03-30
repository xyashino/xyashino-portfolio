import { Slide } from '@/components/about/EducationSlider/slide'
import { SlideItem } from '@/types/slide'
import { m } from 'framer-motion'

interface Props {
  currentIndex: number
  slides: SlideItem[]
}

export const DisplayAnimatedSlide = ({ slides, currentIndex }: Props) => {
  return (
    <m.div
      className="flex"
      animate={{ x: `-${100 * currentIndex}%` }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
    >
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </m.div>
  )
}
