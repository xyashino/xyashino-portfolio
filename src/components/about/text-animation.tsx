'use client'
import { DomAnimation } from '@/components/dom-animation'
import {
  textContainerVariant,
  wordVariant
} from '@/lib/framer-variants/text-animation'
import { m } from 'framer-motion'

interface Props {
  words: string[]
}

export const TextAnimation = ({ words }: Props) => {
  return (
    <DomAnimation>
      <m.div
        className="flex text-xl lg:text-4xl font-extrabold flex-wrap p-4"
        variants={textContainerVariant}
        initial="hidden"
        animate="visible"
        data-testid="text-animation"
      >
        {words.map((letter, i) => (
          <m.span key={i} variants={wordVariant} className="mr-3">
            {letter === ' ' ? '\u00A0' : letter}
          </m.span>
        ))}
      </m.div>
    </DomAnimation>
  )
}
