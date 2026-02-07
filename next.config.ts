import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'date-fns'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 75],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webadmin.jhlcollections.com',
        pathname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
