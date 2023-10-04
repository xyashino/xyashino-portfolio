import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleByFileName, getArticleNames } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Arrow } from "@/components/icons/Arrow";
import { PROJECTS_DIR_PATH } from "@/config/constants/md";
import { YoutubeIframe } from "@/components/YoutubeIframe";
import { TagList } from "@/components/ProjectCard/TagList";
import { Navigation } from "@/types/enum/navigation";

type ParamsWithName = {
  params: {
    name: string;
  };
};

export const generateStaticParams = async () =>
  getArticleNames(PROJECTS_DIR_PATH);

export default async function ArticlePage({
  params: { name },
}: ParamsWithName) {
  const article = await getArticleByFileName<ProjectMetadata>(
    name,
    PROJECTS_DIR_PATH,
  );

  if (!article) return notFound();

  const { content, data } = article;

  return (
    <div className="w-full h-full relative overflow-y-scroll no-scrollbar">
      <header className="w-full p-4 flex border-b-2 border-b-current items-center z-30 top-0 bg-white sticky">
        <Link
          href={Navigation.Projects}
          className="hover:bg-black hover:text-white border-black text-black text-7xl transition-colors duration-300 rounded-full"
        >
          <Arrow className="rotate-180" />
        </Link>
        <h1 className="ml-auto text-2xl lg:text-7xl uppercase  mx-auto font-semibold font-mono italic break-words text-left">
          {data.title}
        </h1>
      </header>
      <article className="container mx-auto  p-8">
        <div className="flex flex-col items-center">
          <YoutubeIframe embedId={data.embedId} className="w-3/4" />
          <TagList tags={data.tags} />
          <p className="p-4 text-2xl font-mono italic">{data.description}</p>
        </div>
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
