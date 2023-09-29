import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";
import { GoHomeLink } from "@/components/GoHomeLink";

interface Props extends PropsWithChildren {
  className?: string;
  title?: string;
  linkClassName?: string;
  containerClassName?: string;
}

export const DefaultPageLayout = ({
  children,
  className,
  title,
  linkClassName,
  containerClassName,
}: Props) => {
  return (
    <main
      className={cn(
        "w-full h-full p-2 lg:p-8 bg-black-light z-40 selection:bg-yellow selection:text-black overflow-y-scroll lg:overflow-hidden",
        className,
      )}
    >
      <header className="w-full p-2 flex border-b-2 border-b-current items-center justify-around sticky">
        <h1 className="grow text-2xl lg:text-7xl uppercase  w-full mx-auto font-semibold font-mono italic break-words text-left ">
          {title}
        </h1>
        <GoHomeLink className={linkClassName} />
      </header>
      <div className={containerClassName}>{children}</div>
    </main>
  );
};
