import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Navigation } from "@/types/enum/navigation";
import { ProjectCardAnimation } from "@/components/ProjectCard/ProjectCardAnimation";
import { TagList } from "@/components/ProjectCard/TagList";
import { YoutubeIframe } from "@/components/YoutubeIframe";

interface Props extends ProjectMetadata {
  reverse?: boolean;
  fileName: string;
  index: number;
}

export const ProjectCard = ({
  title,
  tags,
  description,
  reverse = false,
  fileName,
  embedId,
  index,
}: Props) => {
  const reverseClass = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  return (
    <ProjectCardAnimation reverse={reverse} useDelay={index < 2}>
      <div
        className={cn(
          "border rounded-lg font-mono text-accent relative z-10 border-accent flex overflow-hidden flex-col",
          reverseClass,
        )}
      >
        <div className="w-full lg:w-1/2 aspect-video bg-accent relative flex items-center">
          <YoutubeIframe embedId={embedId} />
        </div>
        <div className="p-8 flex flex-col w-full lg:w-1/2 justify-between">
          <div>
            <h3 className="text-2xl lg:text-4xl font-extrabold uppercase italic">
              {title}
            </h3>
            <TagList tags={tags} />
          </div>
          <p className="lg:p-2 text-sm lg:text-xl">{description}</p>
          <Link
            className="mx-auto lg:text-2xl mt-4 uppercase italic font-extrabold border-2 py-2 px-12 border-black hover:bg-blue  hover:border-blue hover:text-white transition-all duration-300 ease-in-out"
            href={`${Navigation.Projects}/${fileName}`}
            draggable={false}
          >
            More
          </Link>
        </div>
      </div>
    </ProjectCardAnimation>
  );
};
