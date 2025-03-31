export const InfiniteScrollText = ({ text }: { text: string }) => {
  return (
    <div className="absolute inset-0 flex z-0 select-none w-screen overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-text">
        {Array.from({ length: 6 }).map((_, i) => (
          <p
            key={`first-${i}`}
            className="text-[10rem] lg:text-[20rem] italic font-semibold"
          >
            {text} &nbsp;
          </p>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <p
            key={`second-${i}`}
            className="text-[10rem] lg:text-[20rem] italic font-semibold"
          >
            {text} &nbsp;
          </p>
        ))}
      </div>
    </div>
  )
}
