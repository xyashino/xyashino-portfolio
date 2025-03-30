'use client'
import { DomAnimation } from '@/components/dom-animation'
import {
  stackTileVariant,
  stackTitleVariant
} from '@/lib/framer-variants/stack'
import { cn } from '@/lib/utils/cn'
import { StackItem } from '@/types/stack'
import { m } from 'framer-motion'

interface Props {
  title: string
  items: StackItem[]
  titleClassName?: string
  delay?: number
}

export const StackSection = ({
  items,
  title,
  titleClassName,
  delay = 0
}: Props) => {
  const FIRST_DELAY = delay
  const SECOND_DELAY = delay + 0.5

  return (
    <DomAnimation>
      <m.div
        layout
        className="flex flex-col justify-center p-8 font-mono font-extrabold uppercase italic"
      >
        <m.h3
          className={cn('text-2xl lg:text-6xl mx-auto', titleClassName)}
          variants={stackTitleVariant}
          initial="hidden"
          animate="visible"
          custom={FIRST_DELAY}
        >
          {title}
        </m.h3>

        <ul className="text-xl lg:text-3xl overflow-hidden flex flex-col md:flex-row md:flex-wrap md:space-x-4 lg:space-x-8 items-center justify-center ">
          {items.map(({ name, icon }, i) => (
            <m.li
              key={`${name}-${i}`}
              className="flex w-full md:w-1/3 space-x-2 lg:space-x-4 justify-center items-center transition-all duration-500 ease-in-out bg-white  text-black my-2 py-4 px-12 lg:w-auto"
              variants={stackTileVariant}
              initial="hidden"
              animate="visible"
              custom={SECOND_DELAY + i * 0.2}
            >
              {icon} <span>{name}</span>
            </m.li>
          ))}
        </ul>
      </m.div>
    </DomAnimation>
  )
}
