import React from 'react'
import { CONTACT_DATA } from '@/config/constants/contact'

export const ContactList = () => {
  return (
    <div
      className="flex flex-col lg:my-2 p-2  text-left"
      data-testid="contact-list"
    >
      {CONTACT_DATA.map(({ title, link, text }, i) => (
        <a
          key={i}
          href={link}
          tabIndex={0}
          role="link"
          className="hover:bg-black p-2 text-sm sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl uppercase text-black w-full mx-auto font-extrabold focus:text-yellow focus:bg-black font-mono italic hover:text-yellow duration-400"
        >
          {title}&nbsp;{text}
        </a>
      ))}
    </div>
  )
}
