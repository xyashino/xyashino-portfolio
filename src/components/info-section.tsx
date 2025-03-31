import { InfiniteScrollText } from '@/components/infinite-scroll-text'
import { StyledLink } from '@/components/styled-link'
const { NEXT_PUBLIC_BACKGROUND_ANIMATED_TEXT, NEXT_PUBLIC_RESUME_URL } =
  process.env

export const InfoSection = () => {
  return (
    <section className="w-full grow justify-center flex flex-col relative overflow-hidden">
      <StyledLink
        className="mx-auto"
        href={NEXT_PUBLIC_RESUME_URL as string}
        textClassName="text-xl md:text-2xl lg:text-5xl"
      >
        Get my Resume
      </StyledLink>
      <InfiniteScrollText
        text={NEXT_PUBLIC_BACKGROUND_ANIMATED_TEXT as string}
      />
    </section>
  )
}
