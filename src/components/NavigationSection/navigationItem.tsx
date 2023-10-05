"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "@/types/enum/navigation";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils/cn";
import { useTheme } from "next-themes";
import { m } from "framer-motion";
import { DomAnimation } from "@/components/DomAnimation";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();
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
    <DomAnimation>
      <m.button
        whileHover={{ scale: 0.9 }}
        whileFocus={{ scale: 0.9 }}
        onMouseEnter={changeColors}
        onMouseLeave={cancelColorChange}
        onFocus={changeColors}
        onBlur={cancelColorChange}
        transition={{
          duration: DURATION / 1000,
          ease: "easeIn",
        }}
        className={cn(
          "w-full h-full p-1 lg:p-4 flex flex-col z-20 focus:outline-none text-primary-content  ring-primary-content select-none",
          "rounded-xl lg:rounded-none focus:scale-95 focus:rounded-2xl  hover:rounded-2xl cursor-pointer italic duration-300 ease-in-out",
          theme === selectedTheme && "ring-4",
          className,
        )}
        role="navigation"
        onClick={() => {
          setTheme(selectedTheme);
          push(to);
        }}
      >
        <div className="flex items-center justify-evenly w-full mx-auto h-full flex-wrap">
          <p className="text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-mono font-extrabold uppercase">
            {text}
          </p>
          {!!icon && (
            <span className="text-3xl lg:text-5xl xl:text-7xl">{icon}</span>
          )}
        </div>
      </m.button>
    </DomAnimation>
  );
};
