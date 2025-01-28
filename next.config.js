/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['localhost:3000'],
    },
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