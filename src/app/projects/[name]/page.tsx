import { ContrastCard } from '@/components/contrast-card'
import { Arrow } from '@/components/icons/Arrow'
import { YoutubeIframe } from '@/components/projects/youtube-iframe'
import { TagList } from '@/components/tag-list'
import { getArticleByFileName, getArticleNames } from '@/lib/mdx'
import { Navigation } from '@/types/enum/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type ParamsWithName = {
  params: {
    name: string
  }
}

const { PROJECTS_DIR_PATH } = process.env
if (!PROJECTS_DIR_PATH) throw new Error('Missing projects dir path')

export const generateStaticParams = async () =>
  getArticleNames(PROJECTS_DIR_PATH)

export default async function ProjectPage({ params }: ParamsWithName) {
  const { PROJECTS_DIR_PATH } = process.env
  if (!PROJECTS_DIR_PATH) throw new Error('Missing projects dir path')
  const name = (await params).name
  const article = await getArticleByFileName<ProjectMetadata>(
    name,
    PROJECTS_DIR_PATH
  )

  if (!article) return notFound()

  const { content, data } = article

  return (
    <div className="w-full h-full relative overflow-y-scroll no-scrollbar bg-white selection:bg-yellow selection:text-accent">
      <header className="w-full p-4 flex border-b-2 border-b-current items-center z-30 top-0 bg-white sticky">
        <Link
          href={Navigation.Projects}
          className="hover:bg-black hover:text-white border-black text-black text-4xl lg:text-7xl transition-colors duration-300 rounded-full"
        >
          <Arrow className="rotate-180" />
        </Link>
        <h1 className="ml-auto text-2xl lg:text-7xl uppercase mx-auto font-extrabold font-mono italic break-words text-left">
          {data.title}
        </h1>
      </header>
      <section className="container mx-auto mb-16">
        <div className="flex flex-col items-center">
          <YoutubeIframe embedId={data.embedId} className="w-full lg:w-3/4" />
          <ContrastCard className="w-full lg:w-3/4">
            {data.description}
          </ContrastCard>
          <TagList tags={data.tags} />
        </div>
        <article className="p-2 prose lg:prose-xl mx-auto prose-a:text-blue prose-code:font-extrabold mt-4">
          <MDXRemote source={content} />
        </article>
      </section>
    </div>
  )
}
