import { React } from "@/components/icons/stack";
import { cn } from "@/lib/utils/cn";

interface Props {
  embedId: string;
  className?: string;
}

export const YoutubeIframe = ({ embedId, className }: Props) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
    className={cn("aspect-video w-full", className)}
  />
);
