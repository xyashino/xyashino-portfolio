/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
