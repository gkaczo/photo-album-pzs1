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
    ],
  },
  allowedDevOrigins: [
    "192.168.56.1",
  ],
};

export default nextConfig;
