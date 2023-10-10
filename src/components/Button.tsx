import { HtmlHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  textClassName?: string;
  skewClassName?: string;
}

export const Button = ({
  children,
  className,
  skewClassName,
  textClassName,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        "bg-secondary text-primary-content mx-auto relative px-12 py-4 text-2xl uppercase font-extrabold italic group transition-transform hover:scale-110 z-30 duration-300 border-2 border-secondary-content",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "bg-primary border-current border-2 m-2 font-extrabold   absolute inset-0 -skew-y-3 group-hover:skew-y-3 group-focus:skew-y-3 transition-transform duration-300 z-10",
          skewClassName,
        )}
        data-testid="skew"
      />
      <span
        className={cn(
          "z-20 relative italic text-2xl uppercase leading-4",
          textClassName,
        )}
      >
        {children}
      </span>
    </button>
  );
};
