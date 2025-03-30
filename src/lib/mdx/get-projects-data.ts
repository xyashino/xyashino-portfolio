'use server'
import { getArticleNames } from './get-article-names'
import { getArticleByFileName } from './get-article-by-file-name'

export const getProjectsData = async <T extends { order: number }>(
  dirPath: string
) => {
  const articleNames = (await getArticleNames(dirPath)).map(({ name }) => name)
  const result: { fileName: string; data: T }[] = []
  for (const articleName of articleNames) {
    const article = await getArticleByFileName<T>(articleName, dirPath)
    if (!article) continue
    const { data, fileName } = article
    result.push({ data, fileName })
  }
  return result.sort((a, b) => a.data.order - b.data.order)
}
