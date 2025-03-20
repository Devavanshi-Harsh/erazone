import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/erazone' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;