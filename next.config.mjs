/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
