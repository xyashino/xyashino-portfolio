import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote']
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
