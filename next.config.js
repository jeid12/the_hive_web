/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    // Allow placeholder images during development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Unoptimized for static export compatibility if needed
    unoptimized: false,
  },
  
  // Vercel deployment optimizations are automatic
  // This config ensures compatibility with Vercel edge functions
}

module.exports = nextConfig
