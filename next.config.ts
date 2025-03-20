import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  basePath: process.env.NODE_ENV === 'production' ? '/erazone' : '', // Replace with your repo name
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
