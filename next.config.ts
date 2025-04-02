import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp","image/avif"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
