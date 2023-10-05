import React from "react";
import { DefaultPageLayout } from "@/components/containers/DefaultPageLayout";
import { EducationSlider } from "@/components/EducationSlider";
import { TextAnimation } from "@/components/TextAnimation";
import { About, EDUCATION_DESCRIPTION } from "@/config/constants/about";
import { PageWrapper } from "@/components/containers/PageWrapper";

export default function Projects() {
  return (
    <PageWrapper className="bg-blue">
      <DefaultPageLayout
        title="About"
        className="bg-blue text-white"
        linkClassName="hover:bg-white hover:border-white hover:text-blue transition-colors"
        headerClassName="bg-blue"
        containerClassName="flex flex-col justify-evenly items-center h-auto lg:h-full p-0 mb-4"
      >
        <section className="w-11/12 lg:w-5/6 mx-auto">
          <TextAnimation words={EDUCATION_DESCRIPTION.split(" ")} />
        </section>

        <EducationSlider slides={About} />
      </DefaultPageLayout>
    </PageWrapper>
  );
}
