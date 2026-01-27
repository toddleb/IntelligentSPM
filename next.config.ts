import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile local packages
  transpilePackages: ["@aicr/sda-core"],

  // Experimental features
  experimental: {
    // Use webpack instead of turbopack for build (turbopack has issues with file: deps)
  },
};

export default nextConfig;
