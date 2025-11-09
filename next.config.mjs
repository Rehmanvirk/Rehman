/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  reactCompiler: true,
};

export default nextConfig;
