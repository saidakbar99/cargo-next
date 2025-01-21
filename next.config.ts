import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ru', 'uz'], // Add your locales
    defaultLocale: 'en', // Default locale
  },
};

export default nextConfig;
