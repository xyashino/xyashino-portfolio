import React from 'react'
import { ImageProps } from 'next/image'

interface SlideItem {
  title: string
  subtitle: string
  content: string | React.ReactNode
  image?: Overwrite<
    ImageProps,
    {
      alt: string
    } & DataTypeAttribute
  >
}
