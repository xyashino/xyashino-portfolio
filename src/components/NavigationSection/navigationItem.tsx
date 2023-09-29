"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "@/types/enum/navigation";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils/cn";
import useAnimatedRouter from "@/lib/hooks/useAnimatedRouter";
import { useTheme } from "next-themes";

export interface NavigationItemProps {
  to: Navigation;
  className?: ClassValue;
  theme: Theme;
  text: string;
  icon?: React.ReactNode;
}

const DURATION = 300;

export const NavigationItem = ({
  to,
  className,
  text,
  icon,
  theme: selectedTheme,
}: NavigationItemProps) => {
  const { theme, setTheme } = useTheme();
  const { animatedRoute } = useAnimatedRouter();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const changeColors = () => {
    const id = setTimeout(() => {
      setTheme(selectedTheme);
    }, DURATION);
    setTimeoutId(id);
  };

  const cancelColorChange = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };
  return (
    <>
      <button
        onMouseEnter={changeColors}
        onMouseLeave={cancelColorChange}
        onFocus={changeColors}
        onBlur={cancelColorChange}
        className={cn(
          "w-full h-full p-1 lg:p-4 flex flex-col z-20 focus:outline-none text-primary-content  ring-primary-content",
          "rounded-xl lg:hover:rounded-2xl lg:rounded-none focus:scale-95 focus:rounded-2xl lg:hover:scale-95 transition-all cursor-pointer italic duration-300 ease-in-out",
          theme === selectedTheme && "ring-4",
          className,
        )}
        role="navigation"
        onClick={() => animatedRoute(to)}
      >
        <div className="flex items-center justify-evenly w-full mx-auto h-full flex-wrap">
          <p className="text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-mono font-extrabold uppercase">
            {text}
          </p>
          {!!icon && (
            <span className="text-3xl lg:text-5xl xl:text-7xl">{icon}</span>
          )}
        </div>
      </button>
    </>
  );
};
