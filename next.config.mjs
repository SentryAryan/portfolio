/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add npm flags for installation
  experimental: {
    // This setting was changed in Next.js 13+
    // You might need to add this to your Vercel project settings instead
    // But including it in config sometimes helps
    turbotrace: {
      logLevel: 'error'
    }
  }
}

export default nextConfig
