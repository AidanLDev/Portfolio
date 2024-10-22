/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
  // output: 'export',
}

module.exports = nextConfig
