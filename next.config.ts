import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/singing-waiters-glasgow",
        destination: "/singing-waiters-scotland",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
