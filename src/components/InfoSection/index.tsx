import { ResumeDialog } from "./resumeDialog";
import { InfiniteScrollText } from "@/components/InfiniteScrollText";
import { ANIMATE_TEXT } from "@/config/constants/common";
export const InfoSection = () => {
  return (
    <section className="w-full grow justify-center flex flex-col relative overflow-hidden">
      <ResumeDialog />
      <InfiniteScrollText text={ANIMATE_TEXT} />
    </section>
  );
};
