/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.imagin.studio']
  },
  typescript: {
    ignoreBuildErrors:true
  }
}

module.exports = nextConfig
