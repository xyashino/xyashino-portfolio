import { ResumeDialog } from "@/components/dialogs/ResumeDialog";
import { InfiniteScrollText } from "@/components/infinite-scroll-text";

const {
  NEXT_PUBLIC_BACKGROUND_ANIMATED_TEXT,
  NEXT_PUBLIC_RESUME_URL_PL,
  NEXT_PUBLIC_RESUME_URL_EN,
} = process.env;

if (!NEXT_PUBLIC_RESUME_URL_PL || !NEXT_PUBLIC_RESUME_URL_EN) {
  throw new Error("Missing resume url");
}
if (!NEXT_PUBLIC_BACKGROUND_ANIMATED_TEXT)
  throw new Error("Missing background text");

export const InfoSection = () => {
  return (
    <section className="w-full grow justify-center flex flex-col relative overflow-hidden">
      <ResumeDialog
        polishResumeUrl={NEXT_PUBLIC_RESUME_URL_PL}
        englishResumeUrl={NEXT_PUBLIC_RESUME_URL_EN}
      />
      <InfiniteScrollText text={NEXT_PUBLIC_BACKGROUND_ANIMATED_TEXT} />
    </section>
  );
};
