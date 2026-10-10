import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  output: "standalone",
  typedRoutes: true,
  reactStrictMode: true,
};

export default nextConfig;
