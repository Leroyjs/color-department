/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    emotion: true,
  },
  images: {
    domains: ['assets.vercel.com', '45.11.27.63'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
