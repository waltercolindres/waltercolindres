module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
      swcMinify: true,
      experimental: { optimizeCss: true }
  }
  return nextConfig
}