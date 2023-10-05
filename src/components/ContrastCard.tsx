import React, { PropsWithChildren } from "react";

export const ContrastCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-black p-2 lg:w-11/12 mx-auto">
      <p className="text-sm md:text-xl lg:text-2xl  p-2 lg:p-8 text-center   font-semibold font-mono uppercase italic text-white border-2 border-white w-full">
        {children}
      </p>
    </div>
  );
};
