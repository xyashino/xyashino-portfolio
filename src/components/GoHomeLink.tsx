"use client";
import useAnimatedRouter from "@/lib/hooks/useAnimatedRouter";
import { Navigation } from "@/types/enum/navigation";
import { Home } from "@/components/icons/navigation/Home";
import { cn } from "@/lib/utils/cn";

export const GoHomeLink = ({ className }: { className?: string }) => {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <button
      onClick={() => animatedRoute(Navigation.Home)}
      role="navigation"
      className={cn(
        "p-2 whitespace-nowrap hover:outline-2s lg:text-3xl mr-8 text-white flex lg:space-x-2 lg:mr-16 transition-colors duration-500 ease-in-out border-b-4 border-current",
        className,
      )}
    >
      <p className="uppercase font-extrabold font-mono mr-4 hidden lg:block">
        Go Home
      </p>
      <Home />
    </button>
  );
};
