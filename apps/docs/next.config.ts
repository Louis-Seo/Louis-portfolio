import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/design-system"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
