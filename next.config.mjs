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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://webadmin.jhlcollections.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://webadmin.jhlcollections.com; font-src 'self' data:; connect-src 'self' https://webadmin.jhlcollections.com; frame-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none';",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
