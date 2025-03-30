import { Variants } from 'framer-motion'

export const stackTitleVariant: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: delay
    }
  })
}

export const stackTileVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: delay
    }
  })
}
