import { DefaultPageLayout } from '@/components/containers/default-page-layout'
import { ProjectCard } from '@/components/projects/project-card'
import { getProjectsData } from '@/lib/mdx'

export default async function Projects() {
  const { PROJECTS_DIR_PATH } = process.env
  if (!PROJECTS_DIR_PATH) throw new Error('Missing projects dir path')

  const projects = await getProjectsData<ProjectMetadata>(PROJECTS_DIR_PATH)

  return (
    <DefaultPageLayout
      title="Projects"
      className="text-black bg-white lg:overflow-y-scroll no-scrollbar"
      linkClassName="hover:bg-black hover:text-white border-black text-black"
      headerClassName="bg-white"
      containerClassName="container mx-auto w-full h-full text-black"
    >
      <div className="flex flex-col space-y-12 pb-12">
        {projects.map(({ data, fileName }, i) => (
          <ProjectCard
            key={`${fileName}-${i}`}
            {...data}
            fileName={fileName}
            reverse={!!(i % 2)}
            index={i}
          />
        ))}
      </div>
    </DefaultPageLayout>
  )
}
