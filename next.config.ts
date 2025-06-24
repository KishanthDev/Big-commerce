import type { NextConfig } from "next";
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = initializeBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.zeptonow.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
