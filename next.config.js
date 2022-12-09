/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPTIMIZELY_KEY: process.env.OPTIMIZELY_KEY,
    LAUNCHDARKLY_KEY: process.env.LAUNCHDARKLY_KEY,
  }
}

module.exports = nextConfig
