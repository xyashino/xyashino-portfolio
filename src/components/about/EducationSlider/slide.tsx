import React from 'react'
import Image from 'next/image'
import { SlideItem } from '@/types/slide'

export const Slide = ({ image, content, title, subtitle }: SlideItem) => {
  return (
    <blockquote className="flex flex-col justify-between bg-white p-4 shadow-sm sm:p-8 lg:p-12 w-full flex-none h-auto">
      <div className="grid grid-cols-2 grid-rows-2 ">
        <p className="text-2xl font-bold text-blue sm:text-3xl">{title}</p>
        <div className="row-span-2 h-12 lg:24 aspect-square justify-self-end relative rounded-full">
          {image && (
            <Image
              className="absolute object-cover  rounded-full"
              fill
              draggable={false}
              {...image}
            />
          )}
        </div>

        <p className="text-accent font-mono font-extrabold italic whitespace-nowrap ">
          {subtitle}
        </p>
      </div>
      <p className="text-left leading-relaxed text-accent grow">{content}</p>
    </blockquote>
  )
}
