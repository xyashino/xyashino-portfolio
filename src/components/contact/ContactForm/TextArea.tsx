import React from "react";

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export const TextArea = ({ label, ...props }: Props) => {
  return (
    <label htmlFor="message" className="mx-auto w-full lg:w-5/6">
      <p className="sm:text-2xl  mb-2 font-extrabold uppercase font-mono after:content-[':']">
        {label}
      </p>
      <div className="bg-black relative w-full p-1 lg:p-3">
        <textarea
          name={props.id}
          id={props.id}
          className="bg-black  lg:text-xl text-white w-full p-2 border-white border-2 font-mono placeholder:text-white/70 placeholder:italic selection:text-black selection:bg-yellow focus:outline-none focus:border-yellow min-h-[300px]"
          {...props}
        />
      </div>
    </label>
  );
};
