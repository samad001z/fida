import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Only local images are used. Nothing is fetched from a third party.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
