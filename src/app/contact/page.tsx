import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactList } from "@/components/contact/ContactList";
import { DefaultPageLayout } from "@/components/containers/DefaultPageLayout";

export default function Projects() {
  return (
    <DefaultPageLayout
      title="Contact with me"
      className="text-black bg-yellow"
      linkClassName="text-black hover:bg-black hover:border-black hover:text-yellow transition-colors"
    >
      <div className="lg:border-r-4 border-black flex flex-col justify-around h-5/6">
        <ContactList />
        <div className="bg-black p-2 lg:w-11/12 mx-auto">
          <p className="text-sm lg:text-xl  p-2 lg:p-8 text-center   font-semibold font-mono uppercase italic text-white border-2 border-white w-full">
            I am currently looking for a job as a front-end developer. If you
            are interested in my profile, please contact me.
          </p>
        </div>
      </div>
      <ContactForm />
    </DefaultPageLayout>
  );
}
