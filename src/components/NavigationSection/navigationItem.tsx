"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/types/enum/navigation";
import { cn } from "@/lib/utils/cn";
import { useTheme } from "next-themes";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";

export interface NavigationItemProps {
  to: Navigation;
  className?: string;
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
  const { setTheme } = useTheme();
  const { push } = useRouter();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const changeColors = useCallback(() => {
    const id = setTimeout(() => {
      setTheme(selectedTheme);
    }, DURATION);
    setTimeoutId(id);
  }, [selectedTheme, setTheme]);

  const cancelColorChange = useCallback(() => {
    timeoutId && clearTimeout(timeoutId);
    setTimeoutId(null);
  }, [timeoutId]);

  useEffect(() => {
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <m.div
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
        "w-full h-full z-20 focus:outline-none text-primary-content hover:rounded-2xl focus:rounded-2xl duration-150 select-none cursor-pointer ring-2",
        className,
      )}
      onClick={() => {
        setTheme(selectedTheme);
        push(to);
      }}
    >
      <div className="flex items-center justify-evenly w-full mx-auto h-full flex-wrap italic p-1">
        <p className="text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-mono font-extrabold uppercase">
          {text}
        </p>
        {icon && (
          <span className="text-3xl lg:text-5xl xl:text-7xl">{icon}</span>
        )}
      </div>
    </m.div>
  );
};
