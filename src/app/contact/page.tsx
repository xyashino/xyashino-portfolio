import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactList } from "@/components/contact/ContactList";
import { DefaultPageLayout } from "@/components/containers/DefaultPageLayout";
import { ContrastCard } from "@/components/ContrastCard";
import { PageWrapper } from "@/components/containers/PageWrapper";

export default function Projects() {
  return (
    <PageWrapper className="bg-yellow">
      <DefaultPageLayout
        title="Contact with me"
        className="text-black bg-yellow selection:bg-black selection:text-yellow"
        linkClassName="text-black hover:bg-black hover:border-black hover:text-yellow transition-colors"
        containerClassName="grid place-items-center justify-between lg:grid-cols-2 "
        headerClassName="bg-yellow"
      >
        <div className="lg:border-r-4 border-black flex flex-col justify-around h-5/6">
          <ContactList />
          <ContrastCard>
            I am currently looking for a job as a front-end developer. If you
            are interested in my profile, please contact me.
          </ContrastCard>
        </div>
        <ContactForm />
      </DefaultPageLayout>
    </PageWrapper>
  );
}
