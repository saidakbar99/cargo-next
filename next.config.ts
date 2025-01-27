const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/svgs/cargo_white.svg',
        permanent: true,
      },
    ];
  },
};
 
module.exports = withNextIntl(nextConfig);