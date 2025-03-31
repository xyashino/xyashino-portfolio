'use client'
import { Navigation } from '@/lib/enum/navigation'
import { cn } from '@/lib/utils/cn'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import React from 'react'

export interface NavigationItemProps {
  to: Navigation
  className?: string
  theme: Theme
  text: string
  icon?: React.ReactNode
}

const DURATION = 300

export const NavigationItem = ({
  to,
  className,
  text,
  icon,
  theme: selectedTheme
}: NavigationItemProps) => {
  const { setTheme } = useTheme()
  const { push } = useRouter()

  const handleThemeChange = () => {
    setTheme(selectedTheme)
  }

  const handleClick = () => {
    setTheme(selectedTheme)
    push(to)
  }

  return (
    <button
      onMouseEnter={handleThemeChange}
      onFocus={handleThemeChange}
      className={cn(
        `w-full h-full z-20 focus:outline-none text-primary-content hover:rounded-2xl
        focus:rounded-2xl select-none cursor-pointer ring-2 focus:scale-90 hover:scale-90
        duration-${DURATION}`,
        className
      )}
      onClick={handleClick}
      role="button"
    >
      <div className="flex items-center justify-evenly w-full mx-auto h-full flex-wrap italic p-1">
        <p className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono font-extrabold uppercase">
          {text}
        </p>
        {icon && (
          <span className="text-3xl lg:text-5xl xl:text-7xl">{icon}</span>
        )}
      </div>
    </button>
  )
}
