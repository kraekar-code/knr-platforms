import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This app lives in a folder of the KNR Studio repository: keep it from treating the parent as its workspace root.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
