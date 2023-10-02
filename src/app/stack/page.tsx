"use client";
import { DefaultPageLayout } from "@/components/containers/DefaultPageLayout";
import { StackSection } from "@/components/StackSection";
import {
  MAIN_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
} from "@/config/constants/stack";

export default function Projects() {
  return (
    <DefaultPageLayout
      title="Stack"
      className="text-white bg-black"
      linkClassName="hover:bg-yellow hover:text-black hover:border-yellow"
      containerClassName="lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-8 w-full lg:mb-24"
      headerClassName="bg-accent"
    >
      <StackSection
        items={MAIN_TECHNOLOGIES}
        title="In my projects I use"
        delay={0.3}
      />
      <StackSection
        title="I also used"
        items={OTHER_TECHNOLOGIES}
        titleClassName="lg:text-5xl"
        delay={MAIN_TECHNOLOGIES.length * 0.2 + 1.3}
      />
    </DefaultPageLayout>
  );
}
