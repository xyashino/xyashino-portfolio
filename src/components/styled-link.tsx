import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  textClassName?: string
  skewClassName?: string
  href: string
  target?: string
}

export const StyledLink = ({
  children,
  className,
  skewClassName,
  textClassName,
  target,
  ...props
}: Props) => {
  return (
    <Link
      className={cn(
        'bg-secondary text-primary-content mx-auto relative px-12 py-4 text-2xl uppercase font-extrabold italic group transition-transform hover:scale-110 z-30 duration-300 border-2 border-secondary-content',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'bg-primary border-current border-2 m-2 font-extrabold   absolute inset-0 -skew-y-3 group-hover:skew-y-3 group-focus:skew-y-3 transition-transform duration-300 z-10',
          skewClassName
        )}
        data-testid="skew"
      />
      <span
        className={cn(
          'z-20 relative italic text-2xl uppercase leading-4',
          textClassName
        )}
      >
        {children}
      </span>
    </Link>
  )
}
