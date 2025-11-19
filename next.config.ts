import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "aida-public.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "aida-public.storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;