import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/photos/**",
        search: "",
      },
    ],
  },
  // experimental: {
  //   nodeMiddleware: true, // Enable Node.js middleware
  // },
};

export default nextConfig;
