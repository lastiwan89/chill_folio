import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos/",
        pathname: "/id/**",
      },
    ],
  },
};

export default nextConfig;
