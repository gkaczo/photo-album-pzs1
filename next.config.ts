import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.pzs1.pl",
      },
      {
        protocol: "https",
        hostname: "pub-3a4ddaf0210a4385b7c8258ce45cbf6b.r2.dev",
      },
    ],
  },
  allowedDevOrigins: [
    "192.168.56.1",
    "10.250.1.103"
  ],
};

export default nextConfig;
