/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['jsonplaceholder.typicode.com'],
  },
};

export default nextConfig;
