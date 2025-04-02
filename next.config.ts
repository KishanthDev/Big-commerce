import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: true, // Removes console.log in production
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  }
};

export default withBundleAnalyzer(nextConfig);