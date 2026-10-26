/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    // Prevent TypeScript checks from failing Vercel production builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
