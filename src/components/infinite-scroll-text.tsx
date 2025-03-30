export const InfiniteScrollText = ({ text }: { text: string }) => {
  return (
    <div className="absolute inset-0 flex z-0 select-none w-screen">
      <div className="flex whitespace-nowrap animate-scroll-text">
        {Array.from({ length: 3 }).map((_, i) => (
          <p
            key={i}
            className="text-[10rem] lg:text-[20rem] italic font-semibold w-1/2"
          >
            {text} &nbsp;
          </p>
        ))}
      </div>
    </div>
  );
};
