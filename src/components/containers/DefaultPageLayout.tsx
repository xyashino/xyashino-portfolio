import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";
import { GoHomeLink } from "@/components/GoHomeLink";

interface Props extends PropsWithChildren {
  className?: string;
  title?: string;
  linkClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
}

export const DefaultPageLayout = ({
  children,
  className,
  title,
  linkClassName,
  containerClassName,
  headerClassName,
}: Props) => {
  return (
    <main
      className={cn(
        "w-full h-full  bg-black-light z-40 selection:bg-yellow selection:text-black overflow-y-scroll lg:overflow-hidden relative page-animation",
        className,
      )}
      style={{
        viewTransitionName: "page",
      }}
    >
      <header
        className={cn(
          "w-full p-4 flex border-b-2 border-b-current items-center justify-around sticky z-30 top-0 bg-black",
          headerClassName,
        )}
      >
        <h1 className="grow text-2xl lg:text-7xl uppercase  w-full mx-auto font-semibold font-mono italic break-words text-left">
          {title}
        </h1>
        <GoHomeLink className={linkClassName} />
      </header>
      <div className={cn("p-2 lg:p-8", containerClassName)}>{children}</div>
    </main>
  );
};
