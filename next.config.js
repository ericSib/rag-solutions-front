/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.ragsolutions.tech',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig