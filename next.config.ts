import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/policies/privacy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
