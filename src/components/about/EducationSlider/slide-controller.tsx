import { Arrow } from '@/components/icons/arrow'

interface Props {
  changeSlide: () => void
  iconClasses?: string
}

export const SlideController = ({ changeSlide, iconClasses }: Props) => {
  return (
    <button
      onClick={changeSlide}
      className="p-4 border-white border rounded-full aspect-square hover:bg-white hover:text-blue  transition-colors duration-500"
    >
      <Arrow className={iconClasses} />
    </button>
  )
}
