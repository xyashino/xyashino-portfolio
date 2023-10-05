import { DefaultPageLayout } from "@/components/containers/DefaultPageLayout";
import { PageWrapper } from "@/components/containers/PageWrapper";
import { StackSection } from "@/components/StackSection";
import {
  MAIN_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
} from "@/config/constants/stack";

export default function Projects() {
  return (
    <PageWrapper className="bg-accent">
      <DefaultPageLayout
        title="Stack"
        className="text-white bg-accent"
        linkClassName="hover:bg-yellow hover:text-black hover:border-yellow"
        containerClassName="lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-8 w-full lg:mb-24"
        headerClassName="bg-accent"
      >
        <StackSection
          items={MAIN_TECHNOLOGIES}
          title="I worked with"
          delay={0.3}
        />
        <StackSection
          title="and also with (but not so much)"
          items={OTHER_TECHNOLOGIES}
          titleClassName="lg:text-5xl"
          delay={MAIN_TECHNOLOGIES.length * 0.2 + 1.3}
        />
      </DefaultPageLayout>
    </PageWrapper>
  );
}
