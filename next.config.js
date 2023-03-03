/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
  images: {
    domains: ['www.trimt-nsa.gov.tw', 'travel.nantou.gov.tw', 'taiwan.taiwanstay.net.tw', 'www.sunmoonlake.gov.tw', 'www.taiwan.net.tw'],
  },
};

module.exports = nextConfig;
