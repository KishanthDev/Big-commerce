import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "cdn.zeptonow.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
