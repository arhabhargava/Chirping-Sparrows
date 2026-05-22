/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the `out/` folder is publish-ready for any static host
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.chirpingsparrows.org',
      },
    ],
  },
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
