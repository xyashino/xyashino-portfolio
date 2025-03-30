import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils/cn'
import { Navigation } from '@/types/enum/navigation'
import { Home } from '@/components/icons/navigation/Home'

interface Props extends PropsWithChildren {
  className?: string
  title?: string
  linkClassName?: string
  containerClassName?: string
  headerClassName?: string
}

export const DefaultPageLayout = ({
  children,
  className,
  title,
  linkClassName,
  containerClassName,
  headerClassName
}: Props) => {
  return (
    <main
      className={cn(
        'w-full h-full  bg-black-light z-40 selection:bg-yellow selection:text-black overflow-y-scroll lg:overflow-hidden relative',
        className
      )}
      style={{ viewTransitionName: 'page-vertical , page-horizontal' }}
    >
      <header
        className={cn(
          'w-full p-4 flex border-b-2 border-b-current items-center justify-around sticky z-30 top-0 bg-black',
          headerClassName
        )}
      >
        <h1 className="grow text-2xl lg:text-7xl uppercase  w-full mx-auto font-semibold font-mono italic break-words text-left">
          {title}
        </h1>

        <Link
          role="navigation"
          className={cn(
            'p-2 whitespace-nowrap hover:outline-2s lg:text-3xl mr-8 text-white flex lg:space-x-2 lg:mr-16 transition-colors duration-500 ease-in-out border-b-4 border-current',
            linkClassName
          )}
          href={Navigation.Home}
        >
          <p className="uppercase font-extrabold font-mono mr-4 hidden lg:block">
            Go Home
          </p>
          <Home />
        </Link>
      </header>
      <div className={cn('p-2 lg:p-8', containerClassName)}>{children}</div>
    </main>
  )
}
