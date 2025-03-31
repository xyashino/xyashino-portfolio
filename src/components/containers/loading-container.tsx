import { Loading } from '@/components/icons/loading'
import { cn } from '@/lib/utils/cn'

interface Props {
  className?: string
}
export const LoadingContainer = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-primary duration-150 transition-colors grid place-items-center z-50 text-primary-content text-9xl',
        className
      )}
    >
      <Loading />
    </div>
  )
}
