import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
