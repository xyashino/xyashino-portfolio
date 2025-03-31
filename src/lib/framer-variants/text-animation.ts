import { Variants } from 'framer-motion'

export const textContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: i * 0.1
    }
  })
}

export const wordVariant: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
} as Variants
