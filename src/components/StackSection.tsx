import { motion } from "framer-motion";
import { React } from "@/components/icons/stack";
import { StackItem } from "@/types/stack";
import { cn } from "@/lib/utils/cn";

interface Props {
  title: string;
  items: StackItem[];
  titleClassName?: string;
  delay?: number;
}
export const StackSection = ({
  items,
  title,
  titleClassName,
  delay = 0,
}: Props) => {
  const FIRST_DELAY = delay;
  const SECOND_DELAY = delay + 0.5;

  return (
    <div className="flex flex-col justify-center p-8 font-mono font-extrabold uppercase italic">
      <motion.h3
        className={cn("text-2xl lg:text-6xl mx-auto", titleClassName)}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: FIRST_DELAY,
        }}
      >
        {title}
      </motion.h3>
      <ul className="text-xl lg:text-3xl overflow-hidden flex flex-col md:flex-row md:flex-wrap md:space-x-4 lg:space-x-8 items-center justify-center selection:text-white selection:bg-accent">
        {items.map(({ name, icon }, i) => (
          <motion.li
            className="flex w-full md:w-1/3 space-x-2 lg:space-x-4 justify-center items-center transition-all duration-500 ease-in-out bg-white  text-black my-2 py-4 px-12 lg:w-auto"
            key={`${name}-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 0.6, 1.3, 1.5, 1] }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: SECOND_DELAY + i * 0.2,
            }}
          >
            {icon} <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
