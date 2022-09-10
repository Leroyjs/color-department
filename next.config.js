/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    emotion: true,
  },
  images: {
    domains: ['45.11.27.63'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
