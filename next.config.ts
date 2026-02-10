import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile local packages
  transpilePackages: ["@aicr/sda-core"],

  // Experimental features
  experimental: {
    // Use webpack instead of turbopack for build (turbopack has issues with file: deps)
  },

  async redirects() {
    return [
      {
        source: "/content/blog",
        destination: "/intel?type=blog",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/intel?type=newsletter",
        permanent: true,
      },
      {
        source: "/learn",
        destination: "/intel?type=learn",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
