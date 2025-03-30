import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLInputElement>, DataTypeAttribute {
  label: string
  defaultValue: string
}

export const Input = ({ label, value, onChange, ...props }: Props) => {
  return (
    <label
      htmlFor={props.id}
      className="mx-auto w-full flex justify-evenly items-center border-b-2 pb-4 border-black"
    >
      <p className="sm:text-2xl uppercase font-mono font-extrabold italic after:content-[':']">
        {label}
      </p>
      <div className="bg-black relative">
        <input
          {...props}
          className="lg:text-xl bg-black text-white px-3 lg:px-6 py-1 lg:py-2 border-white border-2 m-1 font-mono placeholder:text-white/70 placeholder:italic selection:text-black selection:bg-yellow focus:outline-none focus:border-yellow "
        />
      </div>
    </label>
  )
}
